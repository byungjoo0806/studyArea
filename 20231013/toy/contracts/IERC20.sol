// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IERC20 {
    // 토큰 총 발행량 조회하는 함수
    function totalSupply() external view returns (uint);
    // 토큰의 잔액을 조회하는 함수
    function balanceOf(address account) external view returns (uint);
    // 다른 계정으로 토큰을 보내는 함수
    function transfer(address to, uint amount) external returns (bool);
    // 위임한 토큰을 확인하는 함수
    function allowance(address owner, address spender) external returns (uint);
    // 토큰을 위임 받을 수 있게끔 하는 함수
    function approve(address spender, uint amount) external returns (bool);
    // 위임받은 토큰을 누군가에게 보낼때 사용하는 함수
    function transferFrom(address spender, address to, uint amount) external returns (bool);
}