// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./ERC20.sol";

contract Pokemon is ERC20 {
    constructor() ERC20("PokeCoin","PKC",500000){}

    // 포켓몬 객체를 만들것
    // 이 객체 하나가 포켓몬 데이터
    struct Pokemons {
        string url;
        string name;
    }

    // 포켓몬 빵 구매한 사람들의 주소
    struct Users {
        address account;
    }

    // ERC20 토큰을 지불해서 포켓몬 빵을 하나 사는것.
    // 빵 하나에 얼마
    // 단위를 이더로 지정 - 10**18 소수점 단위
    // 가격이 1000 토큰
    uint256 private tokenPrice = 1000 ether;

    // 포켓몬 빵을 사면 랜덤한 스티커가 있는데
    // 나올 수 있는 포켓몬의 이름을 배열 안에 선언해두자.
    // 한글을 사용하려면 유니코드 작성 해야함. 그래서 영어로 하자
    string[] pokemonNames = ["Pikachu","Squirtle","Charmander"];

    // 포켓몬 이미지를 담아놓은 배열
    string[] pokemonImages = [
        "https://assets.bigcartel.com/product_images/f5183215-19d6-4598-bb72-903e1f83e360/buff-pikachu.jpg?auto=format&fit=max&w=650",
        "https://c1-ebgames.eb-cdn.com.au/merchandising/images/packshots/f25b1d8db73549efaaafad47423e5a77_Large.jpg",
        "https://i5.walmartimages.com/seo/Disguise-Boys-Pokemon-Charmander-Hooded-Costume-Size-4-6_23521266-45cb-46a9-a2b2-ca6c942793c6.310a8eefebb912b7a82416311b6f8518.jpeg?odnHeight=117&odnWidth=117&odnBg=FFFFFF"
    ];

    // 빵 하나 사면 스티커 하나
    // 빵 하나 더 사면 스티커 하나 더
    mapping(address => Pokemons[]) public pokemonList;

    // 한번이라도 포켓몬 빵을 구매한 사람들의 주소
    Users[] public users;

    // 모든 포켓몬 보여주기
    // 포켓몬 이름들
    function allPokemonNames() public view returns (string[] memory) {
        return pokemonNames;
    }
    // 포켓몬 사진들
    function allPokemonImages() public view returns (string[] memory) {
        return pokemonImages;
    }

    // 지갑 주소에 들어있는 포켓몬 조회
    function getPokemon() public view returns (Pokemons[] memory) {
        return pokemonList[msg.sender];
    }

    // 포켓몬 빵을 구매한 사람들 조회
    function getPokemonUser() public view returns (Users[] memory) {
        return users;
    }

    // 포켓몬 빵을 사면 실행시키는 함수
    function buyPokemon() public {
        require(balances[msg.sender] >= tokenPrice);
        balances[msg.sender] -= tokenPrice;
        totalSupply -= tokenPrice;

        uint random = uint(
            keccak256(
            abi.encodePacked(block.timestamp,block.coinbase,block.number)
            )
        );
        // 0 ~ 2 까지, 3가지의 랜덤값
        random = uint(random % 3);

        // Pokemons 구조체 형태로 객체를 만들어서 배열에 추가
        pokemonList[msg.sender].push(Pokemons(pokemonImages[random],pokemonNames[random]));

        // 유저가 포켓몬 빵을 한번 산 기록이 있는지
        // 해당 빵을 샀으면 새로 추가하지 않고
        // 해당 빵을 산 기록이 없으면 새로 추가하기
        bool isUser = false;
        for(uint256 i = 0; i < users.length; i++){
            if(users[i].account == msg.sender){
                isUser = true;
                break;
            }
        }

        if(!isUser) {
            users.push(Users(msg.sender));
        }
    }
}