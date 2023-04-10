// 클로저 Closure

// 내부 함수에서 외부 함수의 변수에 접근 할 수 있다.

function fun(){
    for(var i = 0; i < 5; i++){
        debugger; // vscode에서 debugger : 브라우저에서 브레이크 포인트를 설정 할 수 있다; 개발자 모드에서 확인 가능
        setTimeout(() => {
            console.log(i);
            debugger;
        }, i * 1000);
    }
    // 블록 스코프와 함수 스코프
    // var : 함수 스코프, let : 블록 스코프
    // 자바스크립트 실행 컨텍스트를 잘 짚고 넘어가야한다.
    // var로 선언한 변수는 함수 스코프를 가지고 함수의 어느곳에서든 접근이 가능하다.
    // for문도 함수 내부에서 실행되고, for문에 선언한 var 변수는 함수의 어디서든 접근이 가능하다.
    // for문 안에서 비동기처리 함수가 호출되고, for문은 이미 다 종료되고 함수가 실행되기 때문에, 전부 증가한 5가 나온다.
    // 비동기함수가 전부 돌아가고 5로 증가가 이미 되어있는 상태에서 함수 스코프로 접근이 가능하기 때문에 5가 나온다.
}
// fun();

// 함수 스코프 : 변수가 선언된 함수에서 유효하다. 함수에서 선언된 변수는 함수가 호출되고 종료되면 해제된다.
// 블록 스코프 : 변수가 선언된 블록에서 블록이 종료될때 사라진다.

function fun2(){
    // for(let i = 0; i < 5; i++){
    //     // 블록 스코프
    // }
    if(true){
        var a = 45; // var : 함수 스코프; 함수스코프에 선언된 것.
        // let b = 50; // let : 블록 스코프; if 블록에 선언된 것.
        const c = 60; // const : 블록 스코프; if 블록에 선언된 것.
    }
    console.log(a); // var 이기에 접근 가능 (함수 스코프)
    // console.log(b); // let 이기에 접근 불가능 (블록 스코프)
    console.log(c); // const 이기에 접근 불가능 (블록 스코프)
}
// fun2();

// 클로저라는 개념은 함수의 외부 변수와 변수 선언 기준으로 어디까지 변수를 활용할 수 있는지 정도로 잘 숙지 하면 된다.

function fun3(){
    var value = "";
    function fun4(){
        if(value == ""){ // 내부 함수에서 외부 함수의 변수를 사용
            value = "클로저";
            return value;
        }
    }
    return fun4;
}

let closure = fun3();
let a = closure();
console.log(a);

// 함수의 변수를 참조해주고 메모리에 변수가 유지되도록 한다.
// fun4 함수가 fun3 함수의 value 변수를 참조하고,
// fun4 함수가 실행되면 value를 선언 -> fun 함수는 fun3 함수의 실행 컨텍스트에 생성된 value값을 변경 할 수 있다.

// 자바스크립트가 함수를 생성할 때 함수나 변수 선언 위치를 기억해서 함수를 반환한 이후에도 참조가 가능하다.

// 복습 필수