// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract JusticeToken is ERC721Enumerable {
    struct TokenMetadata {
        string casenum;
        string casename;
        string date;
        string sentence;
        string imgURL;
    }
    // constructor() ERC721(name, symbol) {
    //     
    // }
    constructor () ERC721("justice", "jtk") {
        
    }

    mapping(uint256 => TokenMetadata) public tokenMetadata; // 첫번째 uint256 : animalTokenId, 두번째 uint256 : animalType

    function getTotalSupply() view public returns(uint256) {
        return totalSupply();
    }

    function mintJusticeToken(uint256 tokenId, TokenMetadata memory metadata) public {
        // uint256 userTokenId = totalSupply() + 1; // nft 번호
        
        // animalType 랜덤하게 뽑기
        // keccak256 - 크립토 해시 값 만들어주는 함수
        // abi.encodePacked(arg); - single byte 배열을 만들어주는 함수
        // block.timestamp - 블록이 채굴된 시간
        // msg.sender - 블록을 민팅한 사람
        // uint256 animalType = uint256(keccak256(abi.encodePacked(block.timestamp, msg.sender, animalTokenId))) % 5 + 1;

        tokenMetadata[tokenId] = metadata;

        _mint(msg.sender, tokenId); // msg.sender : 민팅 누른사람 (주인), animalTokenId : nft 고유 번호
    }
}