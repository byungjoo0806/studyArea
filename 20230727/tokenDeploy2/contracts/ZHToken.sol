// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;
 
import './ERC20.sol';
 
contract ZHToken is ERC20 {
    
    address public owner;
    uint256 public ethCanBuy = 200;
 
    constructor(string memory _name, string memory _symbol, uint256 _amount) {
        owner = msg.sender;
        name = _name;
        symbol = _symbol;
 
        mint(_amount * (10 ** uint256(decimals)));
    }
 
    // 익명함수
    receive() external payable {
        
        require(msg.value != 0);
        uint amount = msg.value * ethCanBuy;
 
        require(balances[owner] >= amount);
        balances[owner] -= amount;
        balances[msg.sender] += amount;
 
        if (msg.sender == owner) {
            mint(amount);
        }
 
        emit Transfer(owner, msg.sender, amount);
    }
    
}