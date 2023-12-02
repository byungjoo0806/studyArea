// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyNFT is ERC721 {
    mapping(uint256 => string) private _tokenURIs;

    constructor(string memory _name, string memory _symbol) ERC721(_name, _symbol) {}

    function minting(uint256 _tokenId, string memory _uri) public {
        _mint(msg.sender,_tokenId);
        _setTokenURI(_tokenId,_uri);
    }

    function _setTokenURI(uint256 _tokenId, string memory _uri) internal {
        _tokenURIs[_tokenId] = _uri;
    }
    
    function tokenURI(uint256 _tokenId) public view override returns (string memory) {
        require(ownerOf(_tokenId) != address(0),"URI is not valid");
        return _tokenURIs[_tokenId];
    }

    // 디폴트 경로 조회하는 함수
    function _baseURI() internal view override returns (string memory) {
        return "https://salmon-dear-crow-401.mypinata.cloud/ipfs/";
    }
}