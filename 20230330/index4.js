// 정규 표현식(RegExp) 객체
// 문자의 패턴을 검색하기 위해 사용하는 문자
// 예) 회원가입할때 email, id, 주소 같은 형식으로 입력하기위해 문자의 패턴을 정의하는데 유용

// 정규 표현식의 메소드
/*
search(), replace()
test() : 정규 표현식과 일치하는 문자가 있으면 true 반환
*/

// 정규 표현식

// 방법 1
let reg1 = /a/;
// 방법 2
let reg2 = new RegExp("a");

// 위처럼 정규표현식을 만드는 이유 : 규칙을 가진 문자열을 찾기 위해서

// [] : 대괄호 내부 중 한개
let tempReg = /[3,6,9]/; // 3 or 6 or 9 중에 한개

let tempReg1 = /[0~9]/; // 0~9 이렇게 작성하면, 0부터 9까지 라는 뜻

let str = "Hello Javascript Program...";
let regExp_search = str.search(/Hello/); // search() : 해당 문자열의 인덱스를 찾는 메소드
console.log(regExp_search);

let regExp_replace = str.replace(/Javascript/,"CSS"); // replace() : 첫번째 매개변수 문자열을 찾아서 두번째 매개변수 문자열로 바꿔준다
console.log(regExp_replace);

// test() : 정규식 패턴에 대한 문자열 검색; 괄호 안에 들어간 변수에 문자열이 있는지 확인
// 반환값은 문자열이 있으면 true, 문자열이 없으면 false
let reg3 = /Javascript/;
let reg4 = /Javascript2/;
console.log(reg3.test(str));
console.log(reg4.test(str));

// 정규식 표현할때 플래그
// 검색에 대한 옵션 설정

// 플래그 종류
// i : 대소문자를 구분안하고 비교할 수 있다.
// g : 전체 문자열을 정규식과 비교한다. 첫번째로 위치한 문자열이 있으면 비교를 중단. 정규식이 문자열에 있으면, 그 문자열만 반환
// m : 줄이 다른 여러줄의 문자열을 정규 표현식으로 비교한다.

let str2 = "The best program is \nJavaScript";

let temp1 = /javascript/i; // 플래그 세우는 법 : 정규식 뒤에 붙인다
console.log(str2);
console.log(str2.match(temp1)); // match() : 해당 문자열을 찾고 배열의 형태로 반환해준다.

let temp2 = /JavaScript/g;
console.log(str2.match(temp2)); // match() : 해당 문자열을 찾지 못하면 null 값을 반환한다.

let temp3 = /JavaScript/m;
console.log(str2.match(temp3));

// 정규식의 패턴
// [abc] : 대괄호 안에 있는 문자들을 찾는다.
// [0~9] : 대괄호 사이의 숫자를 찾는다.
// [A-Z] : 대괄호 사이의 알파벳을 찾는다.
// [x|y] : 문자중에서 "|" 로 분리된 문자 중 하나를 찾는다.

let str3 = "The best program is javascript and html...1357924680";

let temp4 = /JavaScript/ig; // 플래그를 여러개 주고 싶으면, 그냥 같이 작성하면 된다.
console.log(str3.match(temp4));

let temp5 = /[A-K]/; // 대괄호 안에 있는 범위안에 포함된 알파벳을 다 찾아온다.
console.log(str3.match(temp5));

let temp6 = /b|p|z/ig; // b or p or z 중에 문자열에 있는 알파벳만 가져온다.
console.log(str3.match(temp6));

// 정규식에서 메타 문자
// 메타 문자는 숫자만 이거나, 알파벳만 이거나, 숫자를 제외하거나, 등등 속성을 표현한다.
/*
    ^문자 : ^ 뒤에 있는 문자로 시작하는 문자를 찾는다.
    문자$ : $ 앞에 있는 문자로 끝나는 문자를 찾는다.
    \w문자 : \w 뒤에 있는 문자가 포함된 모든 문자를 찾는다.
    \W문자 : 알파벳 대소문자, 숫자, _ 를 제외한 모든 문자를 찾는다.
    \d : 모든 숫자를 찾는다.
    \D : 숫자를 제외하고 찾는다. (모든 문자를 찾는다.)
    \s : 문자열 사이 혹은 문자열 시작 혹은 문자열 끝의 공백을 찾는다.
    \S : 문자열 사이 혹은 문자열 시작 혹은 문자열 끝의 공백을 제외하고 찾는다.
*/

let temp7 = /^T/ig; // 문자열이 T로 시작하는지 확인을 하고 T가 맞으니까 맞는 문자열을 배열로 반환
console.log(str3.match(temp7));

let temp8 = /.$/ig; // 문자열이 . 으로 끝나는지 확인을 하고 . 이 맞으니까 맞는 문자열을 배열로 반환
console.log(str3.match(temp8));

let temp9 = /\d/ig; // 문자열에 숫자가 있는지 확인을 하고, 있으면 각각의 숫자를 배열로 반환
console.log(str3.match(temp9));

// 정규식은 주로 검색해서 사용