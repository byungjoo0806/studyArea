import { useEffect, useState } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import useWeb3 from "./hooks/web3.hook";
import myNFTAbi from "./abi/MyNFT.json";
import saleNFTAbi from "./abi/saleNFT.json;"

const App = ()=>{
  const {user,web3} = useWeb3();
  const [file,setFile] = useState(null);
  const [ipfsUrl,setIpfsUrl] = useState("https://salmon-dear-crow-401.mypinata.cloud/ipfs/");
  const [fileName,setFileName] = useState("");

  // pinata link
  const [imgLink,setImgLink] = useState("");
  const [jsonLink,setJsonLink] = useState("");

  // token info when deploying
  const [tokenName,setTokenName] = useState("");
  const [tokenSymbol,setTokenSymbol] = useState("");

  // token id
  const [tokenId,setTokenId] = useState(null);

  // deployed CA
  const [contractAddress,setContractAddress] = useState("");

  const [jsonObj,setJsonObj] = useState({
    name : "",
    description : "",
    url : ""
  });

  const [contract,setContract] = useState(null);

  // contract 가져오기
  useEffect(()=>{
    if(web3 !== null){
      if(contract) return;
    
      const nft = new web3.eth.Contract(
        myNFTAbi,
      );
      setContract(nft);
    }
  },[web3]);

  // deploy from react
  const deployContract = async ()=>{
    // get accounts
    const accounts = await web3.eth.getAccounts();

    // deploy
    contract.deploy({
      data : nftData.bytecode,
      arguments : [tokenName,tokenSymbol]
    })
    .send({
      from : accounts[0],
      gas : "4700000"
    })
    .then((newInstance)=>{
      console.log(`CA : ${newInstance.options.address}`);
      
      const nft = new web3.eth.Contract(
        nftData.abi,
        newInstance.options.address,
        {data : ""}
      );
      setContract(nft);
      console.log("new contract created");
    })
    .catch(
      console.error
    );
  };

  // pinata 에 파일 업로드
  const upload = async ()=>{
    const fileData = new FormData();
    fileData.append("file",file);
    const resp = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS",fileData,
      {
        headers : {
          "Content-Type" : "multipart/form-data",
          pinata_api_key : "bc498532ff5983fb1631",
          pinata_secret_api_key : "7fec4775610a07c377394bb034e39629d741bf26f7c50e700d919da8f71eef9e",
        },
      }
    );
    console.log(file);
    console.log(resp);
    console.log(resp.data.IpfsHash);
    if(file.name.includes(".json")){
      setJsonLink(resp.data.IpfsHash);
    }else{
      setJsonObj(prevState => ({
        ...prevState,
        url : ipfsUrl + resp.data.IpfsHash
      }));
    }
  };

  // 인풋에 작성하는 내용을 하나의 객체로 만드는 함수
  const handleInputChange = (e)=>{
    const {name,value} = e.target;
    setJsonObj(prevState => ({
      ...prevState,
      [name] : value
    }));
    console.log(jsonObj);
  };

  // 파일로 저장하기
  const save = ()=>{
    const blob = new Blob([JSON.stringify(jsonObj,null,2)],{ type : "application/json" });
    saveAs(blob, fileName);
  };

  // minting
  const mint = async (tokenId,uri)=>{
    const accounts = await web3.eth.getAccounts();

    await contract.methods.minting(tokenId,uri).send({
      from : accounts[0]
    });
  };

  const handleMint = async ()=>{
    await mint(tokenId,jsonLink);
    console.log("got a new nft");
  };

  // testing
  const testingCall = async ()=>{
    const hash = await contract.methods.tokenURI(0).call();
    console.log(hash);
  };

  return (
    <>
      <label>uplaod file to IPFS</label> <br/>
      <br/>
      <input type="file" 
        onChange={(e)=>{
          setFile(e.target.files[0])
        }}
      /> <br/>
      <br/>
      <button onClick={upload}>upload</button>
      <br/>
      <br/>
      <div style={{borderTop : "1px solid", height : "20px"}}></div>
      <div>
        <h2>create json</h2>
        <input type="text" name="name" placeholder="NFT name" onChange={handleInputChange} /> <br/>
        <input type="text" name="description" placeholder="NFT description" onChange={handleInputChange} style={{width : "500px"}} /> <br/>
        <input type="text" name="url" placeholder="NFT image url" value={jsonObj.url} onChange={handleInputChange} style={{width : "500px"}} /> <br/>
        <input type="text" placeholder="json file name" onChange={(e)=>{setFileName(e.target.value)}} />
        <br/>
        <button onClick={save}>create json</button>
      </div> <br/>
      <br/>
      <div style={{borderTop : "1px solid", height : "20px"}}></div>
      <div>
        <h3>deploy</h3>
        <input type="text" placeholder="token name" onChange={(e)=>{setTokenName(e.target.value)}} /> <br/>
        <input type="text" placeholder="token symbol" onChange={(e)=>{setTokenSymbol(e.target.value)}} /> <br/>
        <button onClick={deployContract}>deploy</button>
      </div> <br/>
      <br/>
      <div style={{borderTop : "1px solid", height : "20px"}}></div>
      <div>
        <h3>mint</h3>
        <input type="text" placeholder="json file hash link" value={jsonLink} onChange={(e)=>{setJsonLink(e.target.value)}} style={{width : "500px"}} /> <br/>
        <input type="text" placeholder="token id" onChange={(e)=>{setTokenId(e.target.value)}} /> <br/>
        <button onClick={handleMint}>mint</button>
      </div> <br/>
      <br/>
      <div style={{borderTop : "1px solid", height : "20px"}}></div>
      <div>
        <h3>transfer</h3>
        <input type="text" placeholder={user.account} style={{width : "500px"}}/> <br/>
        <input type="text" placeholder="To" style={{width : "500px"}} /> <br/>
        <input type="text" placeholder="token id" /> <br/>
        <button>send</button>
      </div>
      <div>
        <button onClick={testingCall}>testing</button>
      </div>
    </>
  )
};

export default App;

// react에서 파일을 생성해서 IPFS에 업로드하고
// 객체 만들기전에 이미지먼저 올리고 해시주소 가지고

// NFT 이름 입력
// NFT 설명 입력
// NFT 이미지 경로

// 새로운 nft 민팅