# 컨트랙트 복습

```sh
npx create-react-app test

cd test

npm i truffle web3 ganache-cli

npx truffle init
```

- contracts 폴더에 sol 파일에 컨트랙트 코드 작성하고
```sh
npx truffle compile
```
- migrations 폴더에 배포 내용 코드 파일 추가 (파일명 : 1_deploy_Counter.js)
```sh
npx truffle migrate
```
- truffle config 파일 내용에 지정한 네트워크로 배포 진행
- CA : 0xDf3A9D4CB1498BAfe3ae6399dAB33D07929c1e8A
- 만약 위 CA 를 잃어버렸다면,
```sh
npx truffle console
Counter.address
# 배포한 컨트랙트의 이름을 통해서 마지막으로 배포한 CA 조회
```


# 계약을 작성

# 숫자야구 게임을 하나 만들어볼건데

(0) 0xe662a45240d84ddd3698f6a148577de7bb81163eecadbba114cb093ad2d237af
(1) 0xf502445a53af4c7b5ba595cd6e2acf70c60c43b5b488464422802324c64cdf46
(2) 0x690d8c0b6df4192f9b581f8d36652fe26cced81167adcf2402eb571162f273a8
(3) 0x1c16c5955ec51659a908c675e76db3d24d9dca12fbaa17869a854dadf85223b7
(4) 0xe1bb3318e087c95e5a84b736c70e53d04fec8c6623b4a44eeba245256f6ebd46
(5) 0x3697b3435effcb6a57fcf46ac8e78aa0793bc2f915554aa55c3f9ed0cc2deeeb
(6) 0xda1f962b19ed059be82982cb947387d26f24c818c733e5e04f6de6b25d008adb
(7) 0x7cff798bacef65f394d0b8f451e1da6ef4b83712f2180dc20b71bd3ee44421cd
(8) 0x758deab1a8380320a9d10a7409b16d0faf787d69c1d51ca5467400a980f4637b
(9) 0xf2fdbfdfd8fdba0dad4c6921492efd35c5bb84973c1680cc4d9dabf45a56605c

- Baseball CA : 0xA942fBb8eEE62e176f1c8F0F1a69A496EA5DeE72


- 게임 재시작 내용 추가
- 어드민 부분 수정