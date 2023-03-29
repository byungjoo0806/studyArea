let popupBtn = document.querySelector(".popup-btn");
let popupEvent = document.querySelector(".event-btn");
let popupCookie = getCookie("event-popup");

function popupOpen(){ // 버튼 클릭으로 팝업을 띄우는 함수
    let popup = document.querySelector(".popup-wrap");
    if(popup.classList.contains("is-on")){ // 해당 클래스를 가지고 있을때
        popup.classList.remove("is-on"); // 해당 클래스를 제거한다
    }else{
        popup.classList.add("is-on"); // 해당 클래스를 추가한다
    }
}
popupBtn.addEventListener("click",popupOpen); // 팝업창의 우측 상단에 위치한 X 표시


popupEvent.addEventListener("click",function(){ // 버튼 클릭으로 쿠키를 생성하는 함수
    console.log("이벤트");
    // 쿠키 추가

    // 하루동안 유지되는 쿠키 생성
    setCookie("event-popup",true,10);
})

// 문자로 저장되는구나. 쿠키, 로컬스토리지 둘 다 
// 코딩을 하면서 데이터를 저장할때 문자열로 저장한다.
// console.log(typeof getCookie("event-popup"))
// 하루동안 팝업 안보이기

// 쿠키값이 없으면 (undefined) 팝업이 작동하게, 팝업이 뜨게
if(popupCookie == undefined){
    // if(JSON.parse(popupCookie).value === "true"){}
        popupOpen();
}

function getCookie(c_name)
{
   var i,x,y,ARRcookies=document.cookie.split(";");
   for (i=0;i<ARRcookies.length;i++)
   {
     x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
     y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
     x=x.replace(/^\s+|\s+$/g,"");
     if (x==c_name)
     {
       return unescape(y);
     }
   }
}

function setCookie(c_name,value,time){
   let date = new Date();
   date.setTime(date.getTime() + time * 1000);

   let str = c_name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
   let str2 = getCookieTime(str);
   // 문자열로 데이터를 저장하는데 값이 여러개일 경우
   // 배열이라던지 객체를 사용
   // 여러가지의 값을 사용해야하기 때문에 객체의 모양으로 문자열을 전달하고
   // 문자열을 받아서 객체로 변환하여 사용하자.
   console.log(getCookieTime(c_name + "=" + value + ";expires=" + date.toUTCString() + ";path=/"));
   document.cookie = c_name + "=" + `{"value" : "${value}", "time" : "${str2}"}` + ";expires=" + date.toUTCString() + ";path=/";
   let value2 = getCookie("event-popup");
   console.log(JSON.parse(value2));
}

// 쿠키 문자열을 받아서 배열로 변환
function getCookieTime(cookie){
    let str = cookie.split(";"); // 문자열로 저장된 쿠키 값을 배열로 만든다.
    let str2 = str.find(function(i){ // 문자열에서 해당 조건에 부합하는 아이템을 찾는 .find 메소드
        let temp = i.trim(); // 문자열의 양쪽 끝에 빈 공간이 있으면 그 빈 공간을 없애주는 메소드
        return temp.startsWith("expires="); // 괄호안에 들어간 문자열로 시작하는 문자열이 있으면 true, 없으면 false
        // let _bool = i.trim().startsWith("expires=");
        // if(_bool){
        //     return new Date()
        // }else{
        //     // 조건에 맞지 않으면 null 값 반환
        //     return null;
        // }
    })
    if(str2){
        let str3 = str2.trim();
        console.log(str3)
        // 쿠키의 시간을 받아서 시간의 정보들을 다루는 Date 객체를 만들어줬다.
        return new Date(str3);
    }else{
        return null;
    }
}

// trim 메소드 : 문자열 양끝의 공백을 제거
let a = "    a  b    ";
// console.log(a);
// console.log(a.trim());

// startWith() 메소드 : 해당 문자로 시작하는지 여부
// 매개변수로 시작하는 문자열 전달해주면 된다.

let b = "abcd"
// console.log(b.trim().startsWith("abc"));

// 시간의 차이를 구해서 값을 받아보자
// 밀리초를 받아서 시간이 얼마나 남은건지 확인하는 함수
// 시간계산을 할 때 언제 만료되는지 알고있으면
// 지금 시간의 정보를 가지고있는 Date 객체를 만들어서
// 미래 시간의 밀리초와 지금 만든 Date 객체의 밀리초를 빼면 차이값이 나오는데
// 그 차이값(밀리초)를 가지고 날짜와 시간과 '분','초' 이렇게 나타내주기만 하면 된다.
// time 함수로 밀리초를 가지고 날짜,시간,분,초가 얼마나 남은건지 나타내고 있다.
// function times(time){
//     // time은 milliseconds
//     // 일수로 따지면
//     let day = Math.floor(time / 24 / 60 / 60 / 1000);
//     console.log(time);

//     // 값을 바로 대입해서 사용하자. += -=
//     time %= (24 * 60 * 60 * 1000);
//     console.log(time);

//     // 시간으로 따지면
//     let hour = Math.floor(time / 60 / 60 / 1000);
//     time %= (60 * 60 * 1000);
//     console.log(time);

//     // 분으로 따지면
//     let min = Math.floor(time / 60 / 1000);
//     time %= (60 * 1000);

//     // 초로 따지면
//     let sec = Math.floor(time / 1000);

//     console.log("날짜 : " + day);
//     console.log("시간 : " + hour);
//     console.log("분 : " + min);
//     console.log("초 : " + sec);
//     return day + "일 " + hour + "시간 " + min + "분 " + sec + "초";
// }
// let dateTemp = 1000;
// times(dateTemp);


// 비동기 함수 setTimeout : 매개변수로 전달한 시간 이후에 실행되는 함수
// setTimeout(() => {
//     // 1초 뒤에 실행
// }, 1000);

// 비동기 함수 setInterval : 매개변수로 전달한 시간마다 동작하는 함수
// 매초마다 동작하는 함수를 만들어보자
// 정한 시간마다 동작하는 함수
// let date1 = new Date();
// date1.setTime(date1.getTime() + 100000);
// setInterval 제거 방법
let setIntervalFunction = setInterval(() => {
    let date2 = new Date();
    // date2.setTime(date2.toUTCString());
    // // time에는 값이 들어왔다. (객체 X)
    // let time = date1.getTime() - date2.getTime();
    // // 1초마다 실행
    // times(time);
    let timeTag = document.querySelector(".popup-time");
    if(popupCookie != undefined){
        let time = JSON.parse(popupCookie).time;
        let date = new Date(time); // Date() : 괄호안에 들어가는 내용을 날짜 형식으로 바꿔준다.
        // console.log(date);
        // console.log(date2);
        // time.innerHTML = popupTime(date,date2);
        timeTag.innerHTML = times(popupTime(date,date2));
    }else{
        timeTag.innerHTML = "시간끝";
    }
}, 1000);

function popupTime(date1,date2){
    return date1.getTime() - date2.getTime();
}

function times(time){ // 시간을 일,시간,분,초 단위로 표출해주는 함수
    // let sec = Math.floor(time / 24 / 60 / 60 / 1000);
    // let min = Math.floor(time / (60*60*1000));
    // console.log(sec);
    if(time <= 0){
        time = 0;
    }
    let day = Math.floor(time / (24*60*60*1000)); // 밀리세컨드를 일 단위로 바꿔준다
    // 받아온 시간에서 날짜가 하루 단위가 있으면 나눠서 값을 넣어주고
    // '일' 단위를 빼고
    time %= (24*60*60*1000);
    let hour = Math.floor(time / (60*60*1000)); // 밀리세컨드를 시간 단위로 바꿔준다
    // '시간' 단위를 빼고
    time %= (60*60*1000);
    let min = Math.floor(time / (60*1000)); // 밀리세컨드를 분 단위로 바꿔준다
    // '분' 단위를 빼고
    time %= (60*1000);
    let sec = Math.floor(time / 1000); // 밀리세컨드를 초 단위로 바꿔준다
    // 남은 '초' 단위
    // time %= 1000;
    console.log(day + "일 " + hour + "시간 " + min + "분 " + sec + "초");
    
    if(time == 0){
        // setInterval 함수를 변수로 전달 후
        // clearInterval 함수에 매개변수로 전달하면 된다.
        clearInterval(setIntervalFunction);
        let timeTag = document.querySelector(".popup-time");
        timeTag.innerHTML = "";
    }else if(time < 0){
        console.log("시간끝");
    }
    return `${day}일 ${hour}시 ${min}분 ${sec}초`;
}