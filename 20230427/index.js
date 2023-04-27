// nodejs 설치 해봅시다~
// 설치 버전 확인 : node -v

// nodejs의 Repl
// 읽기 - 해석(실행) - 출력 - 반복
// REPL (Read - Evaluate - Print - Loop)은 콘솔 환경에서 코드를 입력하면 즉시 실행해서 결과를 반환해주는 인터페이스
// nodejs의 코드를 test하고 실행할 수 있도록 해주는 대화형 콘솔이다.

// 레플이라는 모드에 들어가보자.
// 터미널 창을 열고 node 만 써주면 된다.
// 레플 모드에서 test 코드를 작성해보자
const str = "hello nodejs";
console.log(str);
// 출력된 값은 "hello nodejs" 이렇게 나오고
// 함수의 반환값이 다음으로 출력되는데
// console.log(str) 함수의 반환값은 undefined
// 그래서 첫번째로 "hello nodejs" 두번째로 undefined

// 자바스크립트로 브라우저 창을 만들고 볼때는 런타임 환경
// node의 런타임 환경
// 실행되고 있는 환경이 다르다
// 브라우저에서 실행하는 console.log와 nodejs에서 실행하는 console.log는 내용이 비슷한거지 같은 친구가 아니다.
// 브라우저에서는 this 전역객체가 window였고
// node 런타임환경에서 this의 전역객체가 global
// window
// global

// 레플모드를 사용하다가 종료하고 싶은데
// control + c     or      .exit

// node로 파일을 실행해서 응용프로그램으로 만들어보자

// 파일 실행 모드
// node로 파일을 실행할때
// node 구문 뒤에 파일의 경로를 작성해주면 된다.
// node ./index/index.js

// 잠깐 실행되고 종료되는 응용프로그램을 만든것