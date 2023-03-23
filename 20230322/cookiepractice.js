
// 쿠키 만들기
function createCookie(name,value,time){ // 설정할 쿠키 이름, "true", 쿠키가 만료할 시간(만료기간)
    // 우선 쿠키가 만료될 시간을 설정하기 위해서 현재 시간을 가져오자
    let date = new Date();
    // console.log(date);

    // console.log(date.getTime() + date * 24 * 60 * 60 * 1000);
    // 쿠키가 만료할때까지 남은 시간을 설정 (time에 일수 단위로 넣을때)
    date.setTime(date.getTime() + time * 24 * 60 * 60 * 1000);
    // 쿠키 설정하는 방법 (정해져있다. 쿠키 만들때마다 복붙하면 된다.)
    // date.toUTCString() - 불러온 현재 시간을 UTC로 맞춰준다.
    document.cookie = name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
}
createCookie();
createCookie("테스트 팝업 1","true",1);
createCookie("테스트 팝업 2","true",1);
// console.log(document.cookie);

function deleteCookie(name){
    document.cookie = name + "=; expires=Thu 01 Jan 1999 00:00:10 GMT;";
}
deleteCookie();
deleteCookie("테스트 팝업 1");
deleteCookie("테스트 팝업 2");

// window.localStorage.setItem("user_id","aaa");
// window.localStorage.setItem("user_id","aa");
window.localStorage.setItem("user_id","abc");
let a = window.localStorage.getItem("user_id");
console.log(a);