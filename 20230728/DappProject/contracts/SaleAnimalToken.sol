// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "MintAnimalToken.sol";

contract SaleAnimalToken {
    MintAnimalToken public mintAnimalTokenAddress; // 배포했을때 생기는 주소

    // 민팅된 토큰의 주소를 인자로 받는다.
    constructor (address _mintAnimalTokenAddress) {
        mintAnimalTokenAddress = MintAnimalToken(_mintAnimalTokenAddress); // 배포했을때 생긴 주소를 변수에 담는다
    }

    mapping(uint256 => uint256) public animalTokenPrices; // 토큰과 해당 토큰의 판매 가격이 담긴 mapping 변수

    uint256[] public onSaleAnimalTokenArray; // 판매목록 - 어떤게 판매중인지 확인할 수 있는 배열

    // 판매등록 함수
    function setForSaleAnimalToken(uint256 _animalTokenId, uint256 _price) public { // 판매등록 함수 - 토큰 번호와 가격이 매개변수로 들어간다
        address animalTokenOwner = mintAnimalTokenAddress.ownerOf(_animalTokenId); // 해당 토큰의 주인의 주소를 변수에 담는다

        // require : 조건문
        require(animalTokenOwner == msg.sender, "Caller is not animal token owner."); // 함수를 실행하는 사람이 판매하려는 토큰의 주인이 맞는지 확인
        require(_price > 0, "Price is zero or lower."); // 판매가격이 0 혹은 0보다 작은지 확인
        require(animalTokenPrices[_animalTokenId] == 0, "This animal token is already on sale"); // 판매 등록이 되었는지 확인하는 함수; 판매 등록이 된 토큰이면 가격이 0이 아니게된다. 0이면 판매가 완료된 상황
        require(mintAnimalTokenAddress.isApprovedForAll(animalTokenOwner, address(this)), "Animal token owner did not approve token."); // 토큰 주인이 해당 토큰의 판매 권한을 부여했는지 확인

        animalTokenPrices[_animalTokenId] = _price; // 판매 등록을 하면 mapping 객체에 키와 값으로 담는다.

        onSaleAnimalTokenArray.push(_animalTokenId); // 판매 등록을 한 토큰을 확인할 수 있는 배열에 담는다.
    }

    // 구매 함수
    function purchaseAnimalToken(uint256 _animalTokenId) public payable {
        uint256 price = animalTokenPrices[_animalTokenId];
        address animalTokenOwner = mintAnimalTokenAddress.ownerOf(_animalTokenId);

        require(price > 0, "AnimalToken not for sale"); // 가격이 0이거나 0보다 작으면 판매중인 토큰이 아님
        require(price <= msg.value, "Caller sent lower than price."); // msg.value - 구매자가 구매신청을 할때 보내는 가격
        require(animalTokenOwner != msg.sender, "Caller is animal token owner."); // 구매하려는 사람이 토큰의 주인이면 구매 못함

        payable(animalTokenOwner).transfer(msg.value); // 돈 전달 - 구매자가 등록한 가격만큼의 돈이 토큰 주인한테 넘어가고
        mintAnimalTokenAddress.safeTransferFrom(animalTokenOwner, msg.sender, _animalTokenId); // 토큰 전달 - 매개변수 : from,to,tokenId

        // mapping 객체에서 판매완료된 토큰 정보 제거
        animalTokenPrices[_animalTokenId] = 0;

        // 판매등록중인 토큰의 id를 담은 배열에서 판매완료된 토큰의 id를 제거
        for(uint256 i = 0; i < onSaleAnimalTokenArray.length; i++) {
            if(animalTokenPrices[onSaleAnimalTokenArray[i]] == 0) {
                onSaleAnimalTokenArray[i] = onSaleAnimalTokenArray[onSaleAnimalTokenArray.length - 1];
                onSaleAnimalTokenArray.pop();
            }
        }
    }

    // 프론트에서 판매중인 토큰들을 보여주는데 사용할 함수
    function getOnSaleAnimalTokenArrayLength() view public returns (uint256) {
        return onSaleAnimalTokenArray.length;
    }
}