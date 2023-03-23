
for(let i = 0; i < 10; i++){
    if(i%3 == 0){
        console.log(i)
        console.log("주말 잘 쉬었니? 공부는 하셨나요?")
    }
}

// 컴파일 언어와 인터프리터 언어
// 개념

// 컴파일러 언어 : 프로그램 코드를 컴파일해서 컴퓨터가 알아들을수 있는 기계어롤 번역해준다. 소는코드 전체를 한번에 번역하고
// 실행 파일을 만들어서 실행해준다.
// 장점 : 파일의 크기가 큰데 실행 속도가 빠르다.
// 실해하기 전에 전체 코드를 번역해서 오류를 미리 알 수 있다.
// 대신 번역 과정 시간이 좀 걸린다.
// C, C++, Java, Python 등등

// 인터프리터 언어 : 프로그램 코드를 한줄씩 읽으면서 번역과 실행을 한다.
// 장점 : 프로그램 실행 도중에 동적으로 소스코드를 수정이 가능하다.
// 실행하는 크기가 작고 소스 코드의 수정이 용이하다.
// 그래서 디버깅 하기가 편하다.
// 소스 코드가 실행될때마다 번역과 실행을 반복해서 속도는 좀 느리다.
// 오류를 실행중에 발견할 수 있다.
// Javascript 등등 있다.

// 논리 연산자 ||, &&
/*
    || 논리합(OR)

    a || b --> 둘중에 하나라도 참이면 참, 둘 다 거짓이면 거짓
    0 || 0 --> false
    1 || 0 --> true
    0 || 1 --> true
    1 || 1 --> true

    && 논리곱(AND)

    a && b --> 둘중에 하나라도 거짓이면 거짓, 둘 다 참이면 참
    0 && 0 --> false
    1 && 0 --> false
    0 && 1 --> false
    1 && 1 --> true

*/
let a = false;
let b = true;
console.log(a || b);
console.log(false || false); // false
console.log(true || false); // true
console.log(false || true); // true
console.log(true || true); // true

let c = true;
let d = false;

console.log(c && d);
console.log(false && false); // false
console.log(true && false); // false
console.log(false && true); // false
console.log(true && true); // true

let text = "집에 가고싶다";
let age = 21;
// true && false
if(text === "집에 가고싶다" || age === 20){
    console.log("집에도 가고 나이도 20이야")
}

// 삼항연산자
// 한줄로 코드를 표현할 수 있다. 잘쓰면 편한데
// 가독성이 많이 떨어져서 본인도 읽기가 힘들 수 있다.

// 조건 ? (앞의 조건이 참일때) : (앞의 조건이 거짓일때)
console.log(1 > 2 ? "이건 참이야" : "이건 거짓이야")
console.log(1 < 2 ? 3 < 4 ? "이건 두번째 참이야" : "이건 틀렸어" : "이건 거짓이야")
// 3번만 더 들어가도 작업물 지워버리고 싶다.

// 조건문 if, 반복문 for

// switch 조건문

// switch ("값을 여기에 넣으세요") {
//     case 1: // if 부분이구나
        
//         break;
//     case 2: // else if

//         break;
//     case 3: // else if
    
//         break;
//     case 4: // else if

//         break;
//     default: // else
//         break;
// }

let month = 11;
let monthName = "";
switch (month) {
    case 1:
        
        break;
    case 2:

        break;
    case 3:

        break;
    case 4:

        break;
    case 5:

        break;
    case 6:

        break;
    case 7:

        break;
    case 8:

        break;
    case 9:
        
        break;
    case 10:
        // 여기가 동작되는 이유는 case 10부터 실행 시키는데
        // break문이 있기 때문에 여기만 실행한거다.
        // break문이 없으면 case 10에 들어와서 밑으로 break문이 있을때까지 실행
        break; // break문이 있는데 이게 뭐지?
    case 11:
        // 값이 11이니까 여기를 실행해야겠네?
        monthName = "November";
        break;
    case 12:

        break;
    default:
        break;
}

console.log(monthName);

switch (1) {
    case 1:
        console.log("첫번째 case문")
        // break;
    case 2:
        console.log("두번째 case문")
        // break;
    case 3:
        console.log("세번쨰 case문")
        // break;

    default:
        console.log("여기가지가 끝이야.")
        break;
}

// while 반복문 : 무한히 돌아간다.
// whil("값이 true면 무한으로 돌아간다. false로 값을 변경해주어야 반복문이 멈춘다.")
// break문으로 반복을 종료시켜줄 수 있다.
// while (true) {
//     if("멈추는 조건"){
//         break; // 조건이 맞을때 반복을 끝내준다.
//     }
// }

let num = 1;
while (num !== 5) {
    console.log(num); // 1/2/3/4
    num++;
}

let num2 = 1;
while (true) {
    console.log(num2); // 1/2/3/4
    num2++;
    if(num2 === 5){
        break;
    }
}

// 사용자가 브라우저에 값을 간단히 입력 받을 수 있는 상태창을 띄워준다.
// prompt : 간단한 입력값을 받아올 수 있다.
// let value = prompt("자 값을 입력해보시오");
// console.log("value : ",value);

// let inputNum = prompt("첫번째 숫자 입력");
// let inputNum2 = prompt("두번째 숫자 입력");

// prompt에 입력 받은건 문자열이다.. 흑흑 ㅠ
// 숫자가 필요한데..
// 숫자로 형태를 변환시켜주는 작업이 필요하다.
// 형태를 변환시켜주는 함수를 사용해야한다.
// 이런걸 형변환
// parseInt("숫자 정수로 변경할 변수나 값");
// Number("숫자로 변경할 변수나 값");
// 다른 형태의 type을 number type으로 형변혼 시켜준다.

// let result = parseInt(inputNum) + Number(inputNum2);
// console.log("결과는 두구두구두구~ : ",result);

// let value = prompt("너는 숫자를 입력해야해 1 ~ 5 사이의");
// let play = true;
// while (play) {
//     switch(value){
//         case "1":
//             console.log("1번 눌렀네 집에가");
//             play = false;
//             break;
//         case "2":
//             console.log("2번 눌렀네 점심 먹으러가");
//             play = false;
//             break;
//         case "3":
//             console.log("3번임");
//             play = false;
//             break;
//         case "4":
//             console.log("4");
//             play = false;
//             break;
//         case "5":
//             console.log("5");
//             play = false;
//             break;
//         default:
//             console.log("1~5 누르라고");
//             value = prompt("1~5를 누라라고 했지?");
//             break;
//     }
// }

// 어렵다.. 연습해야겠다.. 모두가 거처가는 연습
// 가위바위보 컴퓨터랑 가위바위보..
// 3개 중에 선택을 할수가 있는데.. 컴퓨터는 자동으로 어떻게 선택하지?..

// 자바스크립트에서 랜덤값을 구할 수 있는 친구
Math.random(); // 0~1까지의 랜덤수
// parseInt() 이 친구를 사용해서 정수로 변환을하고 값이 너무 작으니까 곱해줘야한다.
// 0 ~ 100
// 0 == 가위
// 1 == 바위
// 2 == 보
console.log(parseInt(Math.random()*3));