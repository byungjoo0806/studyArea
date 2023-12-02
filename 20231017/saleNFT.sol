// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "./myNFT.sol";

contract SaleNFT {
    // 누가 판매등록을 한 NFT들이 보여야 하니까
    // NFT들의 판매금액을 다루는 컨트랙트

    // 상호작용할 CA의 주소가 필요함
    MyNFT public _nft;

    uint256 _tokenId;
    
    // 상호작용할 CA 를 담을 상태변수

    constructor(address _nftCA) {
        _nft = MyNFT(_nftCA);
        // 상호작용할 CA 인스턴스 생성
    }

    function _saleNFTmint(string memory uri) public {
        // CA 에서 CA 로 메세지 전송 메소드 실행
        _nft.minting(_tokenId,uri);
    }

    // 판매에 대한 내용의 함수를 작성을 하고
    // saleNFT에서 myNFT로 메세지를 보내서 NFT 권한을 위임받는 함수를 실행 해보자.
    function setApprovalForAll() public {
        // address(this) : 판매 CA
        // 판매 CA가 지금 컨트랙트를 실행시킨 사람의 모든 NFT 권한을 위임받았다.
        _nft.setAppAll(msg.sender, address(this), true);
    }

    // 컨트랙트를 실행시킨 사람이
    // 판매 컨트랙트에게 NFT의 권한을 위임했는지 확인하는 함수
    function salesNFT() public view returns (bool) {
        return _nft.isApprovedForAll(msg.sender, address(this));
    }

    // NFT의 소유권 및 권한 설정
    // 민팅

    // 판매 내용
    // 누가 판매등록 했는지에 대한 내용을 담을 상태변수 등등
    // 판매 금액은 얼마로 설정했는지
    // 판매에 대한 시기
    // 구매자가 구매 신청을 할때, 상품의 금액만큼 CA에 이더를 보낸다.
    // 구매자가 발생하면 판매자가 확인을 할 수 있고
    // 판매 확인 버튼을 누르면 이더를 받고 소유권을 구매자에게 넘긴다.
    // 판매자는 CA에 있던 이더를 받는다.
}