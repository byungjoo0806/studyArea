// typescript 변수의 타입 지정

// js
// 변수명 = 초기값

// ts
// 변수명 : 타입명 = 초기값

// node 환경에서 실행 시켜볼 수 있나?

// ts-node : 개발환경에서 typescript로 작성된 코드를 실행 시켜볼 수 있다.
// 기존 javascript는 node를 통해서 실행 시켰는데
// typescript는 node가 해석을 할수가 없기 때문에 ts-node로 실행 시켜줘야한다.

// ts-node - typescript 실행 환경 (typescript를 javascript로 컴파일해서 실행 필요없이 node 환경에서 실행 가능)

// 1. typescript를 컴파일 - 내부 컴파일러를 통해 메모리 상에 javascript 코드로 변환
// javascript 파일을 만들지 않는다. (메모리에 가지고만 있음)

// 2. 컴파일된 javascript 코드를 nodejs 런타임 환경으로 실행; 그 다음, 코드 실행 결과를 출력
// (타입 검사로 코드에서 발생할 오류를 미리 또 알려줌)

// 설치 명령어

// ----------------------------------------------------------------------
// npm install ts-node @types/node
// ----------------------------------------------------------------------

// @types/node
// node.js는 javascript 런타임 환경인데 내장 함수 및 모듈에 대한 타입 정보가 필요한데,
// 그래서 nodejs 타입 정보를 패키지로 설치해서 사용하자


// js 실행 가이드 : node
// node app.js

// ts 실행 가이드 : ts-node
// npx ts-node [file_directory]