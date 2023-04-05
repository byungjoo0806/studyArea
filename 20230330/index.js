// 예외 처리문

// try-catch문 : 코드 실행 중에 예외 상황이 발생해도 프로그램이 종료가 되지 않고
// 프로그램을 유지할 수 있다.
// 프로그램이 꺼지지 않으니, 안정성을 높힐 수 있다.

try {
    // 오류가 발생할것 같은 코드

} catch (error) {
    
    // 오류가 발생했을때
    // error : 오류의 메시지
}

// try {
//     // throw : 에러 메시지를 던질 수 있다.
//     if(5 == 5)throw "Err"
// } catch (error) { // throw로 던진 메시지가 error 매개변수로 들어간ㅅ
//     console.log(error);
// }

function myStr(){
    let devValue = document.querySelector(".dev").value;
    try {
        if(devValue == "")
        throw "비었음";
        devValue = Number(devValue); // Number : 타입을 숫자로 변경해주는 생성자 함수
        if(isNaN(devValue))
        throw "number가 아님"; // 문자열이 들어가면 문자가 숫자로 변환될수 없어서 number가 아니다.

        // 오류가 발생해도 프로그램이 종료가 안된다.
    } catch (error) {
        // 코드를 실행하다 err가 발생하면 catch 문을 실행하고
        // 오류의 내용은 error 매개변수에 들어온다.
        document.querySelector(".message").innerHTML = error;
        console.log(typeof devValue);
        console.log(devValue);
    }
}
