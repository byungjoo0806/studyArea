// 즉시 실행 함수 작성법
// 즉시 실행함수를 사용하는 이유는
// 한번 실행시키고 사용하지 않을 것 같은 변수나 코드를 즉시 실행 함수로 만들고 호출하는 방식
// 변수나 함수명이 겹치지않게(충돌하지 않게)

// 즉시 실행 함수 작성 방법 (전역에 ()안에 익명함수처럼 생긴 구문)
// 맨뒤에 함수 실행식 ()
// 매개변수를 전달하고 싶으면, 맨뒤의 함수 실행식 ()안에 매개변수를 전달하면 된다.
// (function(){
//     console.log("즉시 실행 함수");
//     let a = 5;
// }());
// let b = 4;

function temp(b){
    (function(c){
        console.log("즉시 실행 함수");
        let a = 5;
        console.log(c);
    }(b));
}
temp("안뇽 매개변수");

(function (){
    console.log("bye world")
})()

function helloWorld(){
    console.log("hello world");
}
helloWorld();