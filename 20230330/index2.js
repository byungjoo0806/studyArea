// 재귀함수
// 함수가 함수 자신을 호출하는 함수

// 쓸일은 그렇게 많지 않은데 알고리즘 문제 풀때 가끔 사용한다.
// function add(){
//     add();
// }

// 임시로 데이터베이스에 추가할때와 같은 상황에 사용할 수 있다.

function add(n){
    // 얼마나 반복 실행 시킬건지
    if(n < 5){
        add(n + 1);
        console.log(n);
    }
}
add(0); // if 안에 걸린 조건부터 매개변수로 들어간 숫자까지

// 함수의 실행 컨텍스트
// add(0) -> add(1) -> add(2) -> add(3) -> add(4)
// add4 -> 실행이 끝나고 -> add3 -> 실행이 끝나고 -> add2 -> 실행이 끝나고 -> add -> 실행 끝

// 함수가 호출되면 실행 컨텍스트가 생성되고, 함수 안에서 함수를 호출하면서 실행 컨텍스트가 쌓이고,
// 늦게 쌓인 컨텍스트부더 실행하고 제거한다.

// 실행 컨텍스트 중요

// 재귀함수 좀 더 써보자
// 피보나치 수열 : 이전 두 항의 합으로 만들어진 수열
// 재귀 함수를 사용해서 피보나치 수열을 만들었다.
function fibonacci(n){
    if(n < 2) 
    return n;
    // 이전 두 항을 더해서 반환
    return fibonacci(n - 1) + fibonacci(n - 2);
}
for(i = 0;i < 20;i++){
    console.log(fibonacci(i));
}
// n = 0 -> fibonacci(0) = 0
// n = 1 -> fibonacci(1) = 1
// n = 2 -> fibonacci(1) + fibonacci(0) = 0 + 1 = 1
// n = 3 -> fibonacci(2) + fibonacci(1) = 1 + 1 = 2
// n = 4 -> fibonacci(3) + fibonacci(2) = 2 + 1 = 3

function test(n){
    if(n < 5){
        test(n+1);
        console.log(n);
    }
}
test(1);

// n = 1 -> test(2) -> test(3) -> test(4) -> test(5)
// console.log : test(5) -> test(4) -> test(3) -> test(2) -> test(1)
// console.log : 5 -> 4 -> 3 -> 2 -> 1

// function reverseString(str){
//     if(str !== ""){
//         // console.log(str);
//         let strFirstLetter = str.slice(0,1);
//         // console.log(strFirstLetter);
//         let strBackLetters = str.slice(1,str.length);
//         // console.log(strBackLetters);
//         str = strBackLetters + strFirstLetter;
//         console.log(str);
//         reverseString(str);
//         // str = str.slice(1,str.length - 1) + str.slice(0,1);
//         // console.log(str);
//         // reverseString(str);
//     }
// }
// reverseString("hello");

// function test2(str){
//     if(str === ""){
//         console.log("");
//     }else{
//         console.log(str.substring(1));
//         console.log(typeof str.substring(1));
//         console.log(str.charAt(0));
//         console.log(test2(str.substring(1)) + str.charAt(0));
//     }
// }
// test2("hello");