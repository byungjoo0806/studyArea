# typescript 프로젝트 준비

```sh
npm init -y
npm i -D typescript
npm i -D ts-node
npm i -D @types/merkle
npm i -D @types/crypto-js
npm i -D merkle
npm i -D crypto-js
npm i -D tsc-alias
# tsconfig-paths : ts-node 로 node 환경에서 실행을 할 때 우리가 정해준 별칭을 경로로 변환해서 실행시키기 위해 사용
npm i -D tsconfig-paths
```

```sh
npx tsc --init
```

```sh
npm i -D @types/jest jest
```

## jest.config.ts 
- jest로 테스트 코드를 실행할 때 옵션 설정 파일