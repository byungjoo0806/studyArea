// 테스트 코드를 작성하면 시간이 오래걸리긴 하지만,
// 코드의 품질을 좀 더 올릴 수 있다.

// 단위별로 테스트를 진행해서 디버깅을 하고 코드를 작성할 수 있기 때문에

// 1단계 코드를 실행하고, 2단계 코드를 실행하고,
// 절차적으로 테스트를 우리가 진행을 해볼수가 있다.

import { Block } from '@core/block/block';
import Chain from '@core/chain/chain';

import { GENESIS } from '@core/config';

// describe : 테스트들의 그룹화 - 그룹을 지정할 수 있다.
// 첫번째 매개변수 : 그룹의 이름 / 어떤 테스트 그룹인지
// 두번째 매개변수 : 테스트들을 실행시키는 콜백함수
// describe("block 테스트 코드 그룹", ()=>{
//     // 테스트들의 단위를 어떻게 작성하냐
//     // 하나의 테스트 단위
//     // 첫번째 매개변수에는 테스트 이름
//     // 두번째 매개변수는 테스트의 동작을 가지고 있는 콜백함수
//     it("genesis block test",()=>{
//         console.log(GENESIS);
//     })

// });

// 테스트 코드의 그룹 단위
describe("block check", ()=>{
    let newBlock : Block;
    let newBlock2 : Block;
    let newChain : Chain;
    let newChain2 : Chain;

    // it : 테스트할 코드의 최소 단위
    it("block add",()=>{
        const data = ["Block 1"];
        newBlock = Block.generateBlock(GENESIS, data, GENESIS);
        // 블록의 난이도에 따른 마이닝을 동작해서
        // 조건에 맞을때까지 연산을 반복한 뒤에 생성된 블록을 newBlock에 받아온다.
        // 이전 블록은 GENESIS (최초 블록)
        console.log(newBlock);

        const data2 = ["Block 2"];
        newBlock2 = Block.generateBlock(newBlock, data2, GENESIS);
        console.log(newBlock2);
    })

    it("block authentication",()=>{
        const isValidBlock = Block.isValidNewBlock(newBlock, GENESIS);
        if(isValidBlock.isError) {
            // expect.toBe : 값이 맞는지 확인할때
            // 성공한 결과가 맞는지 확일할때 사용하는 코드
            // true false 비교해서 맞는지 확인
            return expect(true).toBe(false);
        };
        expect(isValidBlock.isError).toBe(false);
    })

    it("adding blocks to chain", () => {
        newChain = new Chain();
        newChain.addToChain(newBlock);
        
        console.log(newChain.get());
        console.log(newChain.getBlockByHeight(1));
        console.log(newChain.getBlockByHash(newBlock.hash));
    })

    it("compare chain networks : longest chain rule", () => {
        newChain2 = new Chain();
        newChain2.replaceChain(newChain.get());
        console.log(newChain2);
    })

    it("genesis block or 10th former block", () => {
        // 현재 블록을 생성한다 가정하고
        // 현재 블록이 생성된 시간이 이전 10번째 블록으로부터 얼마나 걸렸는지 확인을 하고
        // 블록의 정해진 생성 주기보다 빠르면 난이도를 올리고 아니면 내린다.
        // let blockArr = [];
        // let block = new Block(GENESIS,["genesis block"]);
        // blockArr.push(block);
        //////// newChain = new Chain();
        // console.log(newChain);
        // console.log(newChain.length());
        //////// let chainArr = newChain.get();
        // console.log(chainArr);
        //////// for (let i = 0; i < 100; i++) {
        ////////     let newBlock = new Block(chainArr[chainArr.length - 1],[`block ${i+1}`], newChain.getAdjustmentBlock());
        ////////     newChain.addToChain(newBlock);
        ////////     // console.log(newBlock);
        //////// };
        // console.log(newChain);
        // console.log(newChain.length());
        ///////// console.log(newChain.getAdjustmentBlock());
        ///////// console.log(newChain.latestBlock());
        for(let i=0; i< 1; i++){
            let block = Block.generateBlock(newChain.latestBlock(), [`block ${i+1}`], newChain.getAdjustmentBlock());
            newChain.addToChain(block);
        };
        console.log(newChain.getAdjustmentBlock());
        console.log(newChain.latestBlock());
    })
});

// 지갑 구성
// 개인키,공개키,서명
// 지갑 주소 (계정 만들기)

// 게인키와 공개키와 서명을 이용한 신원 인증 방식은 분산원장이라는 이해가 필요

// 분산원장 : 장부를 사용자 모두가 관리하는것; 데이터 합의 기술

// crypto, elliptic, crypto-js

// npm i -D crypto @types/crypto
// npm i -D elliptic @types/elliptic
// npm i -D crypto-js @types/crypto-js

import { Hash, randomBytes } from "crypto";
import elliptic, { rand } from "elliptic";
import { SHA256 } from "crypto-js";

const ec = new elliptic.ec("secp256k1");

// secp256k1 : 비트코인과 이더리움에서 사용되는 알고리즘
// 키 생성 및 디지털 서명 (사용자가 이걸 한게 맞는지 검증하기 위한 영수증), 주소 생성
// 타원 곡선의 별명

// 전달하는 사람과 전달받는 사람 등 모든 사람들은 공통적으로 타원 곡선의 한 점을 알고있어야하는데
// 이 점을 타원 곡선의 기준점 (basepoint) G 라고 부른다.

// 타원 곡선의 기준점 좌표가 뭐냐에 따라 타원 곡선에 별명을 붙여준다.

// 비트코인과 이더리움에서 사용되는 타원 곡선 별명은 secp256k1 이다.

// y^2 = x^3 + ax + b
// 이 방정식에 만족하는 곡선

// a=0,b=7 ==> 기준점 G : (x,y) 좌표를 16진수로 표현한 것.
// 02 79BE667E F9DCBBAC 55A06295 CE870B07 029BFCDB 2DCE28D9 59F2815B 16F81798
// y^2 = x^3 + 7

// A가 트랜잭션 만들고 서명을 만들고 (영수증)
// 본인들 볼펜이 하나씩 있어서 (개인키)
// 볼펜 (개인키)의 정수 값은 타원 곡선의 지정 범위내의 값으로 정한 (1 ~ n-1) 정수 범위 (범위내의 정수)
// secp256k1 의 n 은 1.157920892373162e+77 (과학 표기법)
// n 을 16진수로 변환하면 FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141
// 즉 1 ~ FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364140 범위 중에 하나를 사용하는 것.

// 개인키를 하나 임시로 지정을 해보면
// FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364140

// 전자 서명을 만들때
// 2개의 서명이 필요하다.

// 서명 r : 트랜잭션을 보낼때 개인키처럼 랜덤 정수를 뽑아서 이 값을 k 라고 지정한다.
// 서명 r = k * G(기준점)

// 서명 s : k⁻¹ = (z + r * private key) mod n == k
// k 를 역수 계산 : z + r * 개인키 , 나머지 ㅜ
// z = 만든 트랜잭션 정보
// r = 서명 r
// 개인키 = 범위에서 지정하고 본인만 알고있는 개인키
// mod n : n으로 나눈 나머지

// 중요한건 서명 s 를 만드는데 개인키를 사용했다는 개념
// U1 * G + U2 * 공개키 값을 구해서 서명 r 과 같은지 비교해서 검증

// U1 : z * w mod n
// w : s⁻¹ mod n
// w : 동일한 서명을 만들지않기 위해서 임의의 값을 추가 (nonce 값이라고 보면됨)

// U2 : r * w mod n


// 이거를 전부 이해할 필요가 겂고
// 중요한 부분만 이해하면 된다.

// 개인키로 서명을 만들고
// 공개키를 통해서 서명을 검증할 수 있다.

// 데이터 전송
// 1. 트랜잭션 생성
// 2. 개인키 생성
// 3. 서명 r, 서명 s 생성

// 데이터 수신
// U1 * G + U2 + 공개키 : 이 식으로 값을 구해서 서명 r 과 비교(검증)

describe("making wallet",()=>{
    let privKey : string;
    let pubKey : string;
    let signature : elliptic.ec.Signature;

    if("rodlsl o"){
        // 2진수의 랜덤값을 만들자
        // 16진수로 나타냄
        privKey = randomBytes(32).toString("hex");

        console.log("개인키 : ", + privKey);

        // 개인키의 길이 64
        console.log("개인키의 길이 : ", privKey.length);
    }

    it("create public key",()=>{
        const keyPair = ec.keyFromPrivate(privKey);
        pubKey = keyPair.getPublic().encode("hex",false);
        console.log("공개키 : ", pubKey);
        console.log("공개키의 길이 : ", pubKey.length);
    })

    it("create signature",()=>{
        const keyPair = ec.keyFromPrivate(privKey);
        // 임시 트랜잭션 내용
        const hash = SHA256("transaction data").toString();
        // sign 서명 생성
        signature = keyPair.sign(hash,"hex");
        console.log("signature : ", signature);


        // r 서명, s 서명

        // BN = BigNumber : 엄청 큰 number 타입
        // negative : 0 ==> 양수라는 의미
        // words : 서명 r 이나 서명 s 의 값을 32비트 정수 배열로 표시한 값
        // length : 배열의 길이

        // signature :  Signature {
        //     r: BN {
        //       negative: 0,
        //       words: [
        //         44067049, 31496790,
        //          7790434, 42584609,
        //         60327276,  2680284,
        //         36299346, 48107811,
        //         34359634,  2773365
        //       ],
        //       length: 10,
        //       red: null
        //     },
        //     s: BN {
        //       negative: 0,
        //       words: [
        //         11069927, 48508117, 33957094, 47549267,
        //          2443859, 24579879, 19128343, 53690114,
        //         39802784,  2672089,        0,        0,
        //                0,        0,        0,        0,
        //                0,        0,        0,        0,
        //                0,        0,        0,        0,
        //                0,        0,        0,        0,
        //                0,        0
        //       ],
        //       length: 10,
        //       red: null
        //     },
        //     recoveryParam: 1
        //   }
    });

    it("authenticate signatures", ()=>{
        const hash = SHA256("transaction data").toString();
        const verify = ec.verify(hash, signature, ec.keyFromPublic(pubKey,"hex"));
        console.log("is this authentic? : ", verify);
    });

    // create wallet address
    it("wallet address",()=>{
        // 계정을 만드는 방법 : 공개키 값의 앞 26개의 문자열을 잘라서
        // 40자리만큼을 남긴다.
        // 불필요한 부분 제거하고 앞에 0x 붙이기
        // 가독성 주소의 앞에는 0x 붙이는 것이 일반적 (16진수의 주소다 라는 뜻)
        const address = pubKey.slice(26).toString();
        console.log("address : ", `0x${address}`);
    })
})