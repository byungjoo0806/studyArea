// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract Baseball {
    // 컨트랙트를 배포한 사람
    // 컨트랙트 소유자

    // 컴퓨터가 숫자 3개를 랜덤하게 뽑고
    // 이 숫자를 플레이어들이 맞추는 게임
    // 숫자를 입력해서 값을 비교하고 틀리면 그 사람은 이더를 CA에 보낸다.
    // CA 플레이어들이 게임을 하면서 모인 이더를 최종적으로 맞춘 사람에게 보상으로 주고
    // 게임 플레이 횟수가 있는데 횟수만큼 진행했는데 아무도 맞추지 못할경우,
    // 보상은 컨트랙트 소유자가 가져간다.

    // 컨트랙트 배포자
    address private owner;

    // 게임의 횟수
    // constant : 값이 변하지 않는 상수 상태변수
    uint256 private constant GAME_COUNT = 5;

    // ticket : 게임을 플레이하고 싶으면 지불해야하는 이더
    uint256 private ticket = 5 ether;

    // 정답의 값을 담아놓을 변수
    // 컴퓨터가 정할 랜덤값
    // 3자리수의 숫자
    uint256 private random;

    // 게임의 진행도
    uint256 private progress;

    // 총 모여있는 상금
    uint256 private reward;

    // 게임의 현재 상태
    enum GameStatus {
        Playing, // 0
        Gameover // 1
    }

    // 최초의 상태값은 0
    // 0 === Playing - 게임 플레이중
    GameStatus gameStatus; // 0

    // 컨트랙트 생성자
    // 생성자 함수는 컨트랙트가 배포될때 딱 한번 실행된다.
    constructor() {
        // 최초에 딱 한번
        // 배포자가 상태변수에 담긴다.
        owner = msg.sender;

        // keccak256 : 솔리디티에서 랜덤값을 뽑을때 사용; 매개변수를 해시값으로 변경해준다. SHA-3 알고리즘을 사용
        // block 객체에 있는 내용을 사용
        // abi.encodePacked(arg) : 매개변수로 전달된 arg 를 바이트 배열로 만들어준다.
        random = uint256(keccak256(abi.encodePacked(block.timestamp, block.difficulty, block.coinbase, block.number)));
        // 큰 숫자가 나오는데,
        // 이 숫자를 가지고 나머지 연산을 통해 원하는 자리수의 숫자를 구하자

        // 100 ~ 999 까지의 범위를 지정
        random = (random % 900) + 100;
        // 100 ~ 999의 랜덤값
    }

    // -------------------------------- 관리자 모드 --------------------------------
    // 배포자만의 권한을 주는 부분
    modifier onlyOwner() {
        require(owner == msg.sender, "only for admin");
        _;
    }

    // 정답을 확인하는 함수
    function getRandom() public view onlyOwner returns(uint256) {
        // require(owner == msg.sender, "only for admin");
        return random;
    }

    // CA 에 쌓인 상금을 배포자에게 보내는 함수
    function toDeployer() public onlyOwner {
        address payable _owner = payable(owner);
        _owner.transfer(address(this).balance);
    }
    // -------------------------------- 관리자 모드 --------------------------------


    // 유저의 값을 받아서 랜덤 숫자와 맞는지 비교하는 함수
    function gameStart(uint256 _value) public payable {
        // 게임 최대 플레이 횟수보다 적어야 플레이 가능;
        require(progress < GAME_COUNT, "Gameover");
        // 참가비를 낼수 있는지 판단
        require(msg.value == ticket, "insufficient balance for ticket");
        // 플레이어가 입력한 숫자가 범위 안에 있는지 확인
        require((_value >= 100) && (_value < 1000), "number should be between 100 and 999");

        progress += 1;

        if(_value == random){
            // 정답 맞추면 게임 끝
            // CA의 잔액이 보상 금액만큼 있는지 확인
            require(reward <= address(this).balance);
            // msg.sender === 게임 플레이어
            // address(this) === 컨트랙트 배포자
            payable(msg.sender).transfer(address(this).balance);
            reward = 0;
            // gameStatus 상태가 상수값 1로 들어감
            // 1 === Gameover : 게임 끝
            gameStatus = GameStatus.Gameover;
        }else{
            reward += msg.value;
        }
    }

    // 새로운 게임판 생성
    function gameRestart() public {
        reward = 0;
        progress = 0;
        gameStatus = GameStatus.Playing;
    }

    // 플레이어에게 진행중이 게임 상태 보여주는 함수들

    // 현재 쌓인 보상 보여주는 함수
    function getReward() public view returns(uint256) {
        return reward;
    }

    // 현재 진행중인 게임 진행도를 보여주는 함수
    function getProgress() public view returns(uint256) {
        return progress;
    }

    // 게임 플레이를 하기 위한 티켓 가격 보여주는 함수
    function getTicketPrice() public view returns(uint256) {
        return ticket;
    }

    // 게임이 진행중인지 확인하는 함수
    function getPlaying() public view returns(uint256) {
        // 게임이 진행되고 있는 상태의 상수값 == 0
        uint256 Playing = 0;
        if((gameStatus != GameStatus.Playing) || (progress == GAME_COUNT)){
            // 게임 종료
            Playing = 1;
        }
        return Playing;
    }
}