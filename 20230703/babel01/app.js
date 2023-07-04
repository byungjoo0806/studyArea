// ES6 문법 - 화살표 함수
const test = (msg)=>{
    const arr = [1,2,3];
    const arr2 = [4,5,6];

    // ES6 문법 - 스프레드 연산자
    const arr3 = [...arr,...arr2];

    // ES6 문법 - 템플릿 리터럴
    console.log(...arr3,msg);
}

test("문자 ㄱㄱㄱ");