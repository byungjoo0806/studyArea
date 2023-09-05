// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract MintAnimalToken is ERC721Enumerable {
    struct TokenMetadata {
        string casenum;
        string casename;
        string date;
        string sentence;
        string imageUrl;
    }
    // constructor() ERC721(name, symbol) {
    //     
    // }
    constructor () ERC721("h662Animals", "HAS") {
        
    }

    mapping(uint256 => uint256) public animalTypes; // 첫번째 uint256 : animalTokenId, 두번째 uint256 : animalType

    function mintAnimalToken() public {
        uint256 animalTokenId = totalSupply() + 1; // nft 번호
        
        // animalType 랜덤하게 뽑기
        // keccak256 - 크립토 해시 값 만들어주는 함수
        // abi.encodePacked(arg); - single byte 배열을 만들어주는 함수
        // block.timestamp - 블록이 채굴된 시간
        // msg.sender - 블록을 민팅한 사람; 트랜잭션이 발생할때만 들어가는 값 - call()은 블록체인 네트워크에 접근할 수가 없기 때문에 불러올수가 없음
        uint256 animalType = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender, animalTokenId))) % 5 + 1;

        animalTypes[animalTokenId] = animalType;

        _mint(msg.sender, animalTokenId); // msg.sender : 민팅 누른사람 (주인), animalTokenId : nft 고유 번호
    }
}