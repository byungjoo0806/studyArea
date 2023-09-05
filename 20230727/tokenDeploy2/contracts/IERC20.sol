// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;
 
// ERC20에 사용되는 인터페이스
 
interface IERC20 {
 
    function totalSupply() external view returns (uint);
    function balanceOf(address account) external view returns (uint);
    function transfer(address recipient, uint amount) external returns (bool);
 
    // 위임 받은 돈을 관리하는 공간 (데이터 저장 공간)
    function allowance(address owner, address spender) external returns (uint); 
    
    // 위임장 (제 3자가 돈을 사용할지 말지 허락하는 함수)
    function approve(address spender, uint amount) external returns (bool);
 
    // 관리하는 돈을 보내는 함수
    function transferFrom(address spender, address recipient, uint amount) external returns (bool);
 
    event Transfer(address indexed from, address indexed to, uint value);
 
    event Approval(address indexed owner, address indexed spender, uint value);
}