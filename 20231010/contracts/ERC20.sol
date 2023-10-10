// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import './IERC20.sol';
// hi

// class 에서 인터페이스 상속을 한것처럼 (implements)
// 솔리디티에서는 is 라는 구문을 사용해서 상속

contract ERC20 is IERC20 {
    // ERC20 토큰의 규약

    // 토큰의 이름; 풀네임
    string public name;

    // 토큰의 심볼 (토큰의 단위 ex. ETH 등)
    string public symbol;

    // 토큰의 소수점 자리; 기본 소수점 자리는 18단위
    uint8 public decimals = 18;

    // 토큰의 총 발행량
    // 이미 선언이 되어있는 함수를 interface 함수는 virtual 함수로 되어있는데,
    // 기본 선언하면 virtual 함수다.
    // override : 상속받은 함수를 새로 정의해서 사용 (덮어쓰기)
    uint public override totalSupply;

    // 컨트랙트 배포자 : 현재 버전에서는 상속받아서 사용중; 필요가 없기 때문에 없앤것 (이 컨트랙트에 작성할 필요가 없어졌다는 얘기)
    address private owner;

    // 생성자 함수 컨트랙트 배포자가 실행을 할 함수
    // memory : 메모리 영역에서 사용을 하고 해제 시킨다는 구문
    // uint는 정해져있는 256 과 같은 정해져있는 양을 사용하는데,
    // 양이 동적으로 변할 수 있는 변수에는 memory 를 다 붙인다.
    constructor(string memory _name, string memory _symbol, uint256 _amount){
        // 어떤 이름의 토큰을 발행하고 있고
        // 어떤 심볼(단위)를 사용할지
        // 처음에 총 발행량을 얼마나 설정할지

        // ex. BJToken
        owner = msg.sender;
        name = _name; // BJToken
        symbol = _symbol; // BJT

        // 토큰 발행할때 사용할 메소드 작성
        // _amount * (10 ** uint256(decimals))

        // 최초 토큰 발행량
        mint(_amount * (10 ** uint256(decimals)));
    }

    // balance : 토큰 보유량에 대한 내용을 담을 객체
    // 키 : address, 값 : uint
    mapping(address => uint) public balances;
    /* 
        balances = {
            0x111111111111111111111 : 100,
            0x111111111111111112211 : 100,
            0x111111111111111113311 : 200,
        }
    */

    // 토큰의 권한을 위임받은 내용이 들어있는 객체
    mapping(address => mapping(address => uint)) public override allowance;
    /* 
        balances = {
            0x111111111111111111111 : {
                0x111111111111111112211 : 50
            },
            0x111111111111111112211 : {
                0x111111111111111113311 : 80
            },
            0x111111111111111113311 : {
                0x111111111111111111111 : 30
            },
        }
    */

    // 잔액을 조회하는 함수
    function balanceOf(address account) external view override returns (uint) {
        return balances[account];
    }

    // 다른 지갑으로 잔액을 전달하는 함수
    function transfer(address to, uint amount) external override returns (bool){
        // 1. 전달하는 사람의 잔액이 감소해야하고
        balances[msg.sender] -= amount;
        // 2. 전달 받는 사람의 잔액이 증가
        balances[to] += amount;
        // transfer 이벤트를 실행시킨 로그를 트랜잭션에서 확인
        emit Transfer(msg.sender, to, amount);

        // 성공은 true 가 반환되는 함수
        // 실패는 false
        return true;
    }

    // 토큰의 소유권을 위임하는 함수
    function approve(address spender, uint amount) external override returns (bool) {
        // 소유권을 추가
        allowance[msg.sender][spender] = amount;
        emit Approval(msg.sender, spender, amount);

        // 성공은 true 가 반환되는 함수
        // 실패는 false
        return true;
    }

    // 권한을 가지고 있는 제3자가 토큰을 보낼때 사용하는 함수
    function transferFrom(address spender, address to, uint amount) external override returns (bool) {
        // 실행하는 사람이 권한을 가지고 있는지 토큰의 양을 검사를 하고
        require(allowance[spender][msg.sender] >= amount);

        allowance[spender][msg.sender] -= amount;
        balances[spender] -= amount;
        balances[to] += amount;
        
        // 성공은 true 가 반환되는 함수
        // 실패는 false
        return true;
    }

    // 토큰을 발행하는 함수
    // internal : 컨트랙트 내부에서만 실행시킬 함수
    function mint(uint amount) internal {
        balances[msg.sender] += amount;
        totalSupply += amount;
    }

    // 토큰을 소각시키는 함수
    // 토큰을 너무 많이 발행하면 가치가 떨어지기 때문에
    function burn(uint amount) external {
        balances[msg.sender] -= amount;
        totalSupply -= amount;
    }
}