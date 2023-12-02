// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./IERC20.sol";

contract ERC20 is IERC20 {
    // 토큰의 이름
    string public name;
    // 토큰의 단위 (심볼)
    string public symbol;
    // 토큰의 소수점 자리 - 기본 18자리
    uint8 public decimals = 18;

    // 토큰의 총 발행량
    uint public override totalSupply;

    // 컨트랙트 배포자
    address private owner;

    // 토큰을 가지고있는 지갑 주소들을 키로 담은 객체 + 각각이 가지고있는 토큰 양
    mapping (address => uint) public balances;
    // { "0x1234151234" : 1000 }

    // 토큰을 위임할때 누가 누구에게 얼마나 위임했는지에 대한 정보가 담긴 객체
    mapping (address => mapping(address => uint)) public override allowance;
    // { "0x1231235343142" : { "0x193485128341234" : 1000 } }

    // 컨트랙트 생성자 함수
    constructor(string memory _name, string memory _symbol, uint256 _amount){
        owner = msg.sender;
        name = _name;
        symbol = _symbol;
        mint(_amount * (10 ** uint256(decimals)));
    }

    // 토큰을 발행할때 소유자를 지정해주는 함수
    function mint(uint amount) internal {
        balances[msg.sender] += amount;
        totalSupply += amount;
    }

    // 토큰의 잔액을 확인하는 함수
    function balanceOf(address account) external view override returns(uint) {
        return balances[account];
    }

    // 토큰을 보내는 함수
    function transfer(address to, uint amount) external override returns (bool) {
        balances[msg.sender] -= amount;
        balances[to] += amount;
        return true;
    }

    // 위임한 토큰을 받는 함수
    function approve(address spender, uint amount) external override returns (bool) {
        allowance[msg.sender][spender] = amount;
        return true;
    }

    // 위임받은 토큰을 누군가에게 보낼때
    function transferFrom(address sender, address to, uint amount) external override returns (bool) {
        // sender == A, msg.sender == B, to == C
        // { A : 1000, B : 0, C : 0 }
        // { A : { B : 100 }}
        // { A : 900, B : 100, C : 0 }
        // { B}
        require(allowance[sender][msg.sender] >= amount);
        allowance[sender][msg.sender] -= amount;
        balances[sender] -= amount;
        balances[to] += amount;
        return true;
    }

    // 토큰 소각하는 함수
    function burn (uint amount) external {
        balances[msg.sender] -= amount;
        totalSupply -= amount;
    }


    // CA 주소로 이더가 전송이 되었을때 실행시키고 싶은 동작이 있다.
    // 익명함수 receive (특별한 함수) : CA가 이더를 받으면 자동으로 실행되는 메소드
    // CA가 이더를 전송 받았을때 동작을 추가할 수 있다.
    receive() external payable {
        // CA가 이더를 받았을때 실행되는 동작
        
        // 배포자가 토큰의 발행량을 관리하고
        // 다른 이용자들이 토큰을 가지고 싶으면
        // 컨트랙트 배포자가 정한 비율에 따라 토큰을 가져갈 수 있게

        // 받은 이더의 일정 비율로 지급해줄 토큰의 양
        // amount : 토큰의 양
        // value : 이더
        uint amount = msg.value * 200;

        require(balances[owner] >= amount);
        balances[owner] -= amount;
        balances[msg.sender] += amount;

        // 만약에 토큰을 다 소유권을 넘겨서 배포자가 들고있는 토큰이 없다.
        // 만약에 배포자가 이더를 보냈으면 토큰을 추가로 발행할 수 있게
        if(msg.sender == owner){
            mint(amount);
        }
    }
}