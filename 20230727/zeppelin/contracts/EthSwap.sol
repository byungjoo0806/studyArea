// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;
 
import "../node_modules/openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
 
contract EthSwap {
 
    ERC20 public token;
 
    uint public rate = 100;
 
    // 배포한 ERC20의 CA를 인자값으로 받는다.
    constructor(ERC20 _token) {
        token = _token;
    }
 
    // EOA -> EthSwap (Contract) -> getToken() -> return JwToken CA 
    function getToken() public view returns (address) {
        return address(token); // JwToken CA
    }
 
    // EOA -> EthSwap -> getSwapBalance() -> JwToken -> balanceOf()
    function getSwapBalance() public view returns (uint) {
        return token.balanceOf(msg.sender);
    }
 
    function getThisAddress() public view returns (address) {
        return address(this); 
        // 여기서 this는 해당 컨트랙트를 의미 (this == EthSwap)
    }
 
    function getMsgSender() public view returns (address) {
        return msg.sender;
    }
 
    function getTokenOwner() public view returns (address) {
        return token._owner();
    }
 
    // ETH -> TOKEN buy
    function buyToken() public payable {
        uint256 tokenAmount = msg.value * rate;
        require(token.balanceOf(address(this)) >= tokenAmount, "error [1]");
        token.transfer(msg.sender, tokenAmount);  // from: EthSwap CA, to: msg.sender
    }
 
    // TOKEN -> ETH sell
    function sellToken(uint256 _amount) public payable {
 
        require(token.balanceOf(msg.sender) >= _amount);
        uint256 etherAmount = _amount/rate;
 
        require(address(this).balance >= etherAmount);
        token.transferFrom(msg.sender, address(this), _amount);
        payable(msg.sender).transfer(etherAmount);
    }
 
}