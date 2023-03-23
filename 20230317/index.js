// 오늘은 생성 합수
// 객체를 함수로 만들때 많이 사용해요
// 이름부터 뭔가를 생성한다고 하네
// 객체를 생성할때 사용하는 함수
// 모양이 어떻게 되냐?

// createObj : 생성자 함수
function createObj(_name,_atk,_def,_speed){
    this.name = _name;
    this.atk = _atk;
    this.def = _def;
    this.speed = _speed;
}

// 이런 모양으로 생성자 함수를 만들고
// 이 함수를 가지고 객체를 생성하는 방법
// 새로운 키워드 - new - 를 사용할 것
// (동적할당)메모리 공간을 동적으로 사용할 수 있게 해준다.(할당)
// 새로운 객체를 생성하기 위한 메모리 공간을
// new 키워드를 사용하면 빈 객체를 만들어주고 생성자 함수를 실행시켜서
// this가 빈 객체로 시작하고, 키값을 추가해주고, 객체를 만들어준다.
// 객체를 뭐라고 보면 될까? 사람, 사물, 등등
// 사나의 객체를 사람이라 표현했을때
// 사람에 대한 정보를 객체로 만들어놓고 사람을 생성
// 물건을 생성할때도 객체에 그 물건의 정보를 키와 값으록 만들어서 하나의 오브젝트화 시킨다.

let obj = new createObj("고블린",100,100,10);
console.log(obj);

console.log(obj.name);
console.log(obj.atk);
console.log(obj.def);
console.log(obj.speed);

let obj2 = new createObj("트롤",200,100,10);
console.log(obj2);

// 전역 변수만으로 프로그램을 관리하기에는 너무 힘들기때문에
// 오브젝트화(객체화) 시킨다
let obj1_name = "고블린";
let obj1_atk = 100;

let obj2_name = "고블린";
let obj2_atk = 100;

// 첫번째 객체의 이름이구나
// obj.name
// 두번째 객체의 이름이구나
// obj2.name

// obj.name 객체의 값에 접근하는 방법
// obj["name"] : 객체의 값에 접근하는 방법
console.log(obj["name"]);

let arr = [1,2,3,4];
arr.forEach((i) => {
    console.log(i);
});

for (let i = 0; i < arr.length; i++) {
    console.log(arr);
}


for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}

// for in
// 자동완성 했을때 object라고 적혀있는 변수에 우리가 보고싶은 객체를 넣어준다
for (const key in obj) {
    // 키값이 순서대로 나온다.
    // 키값이 key변수에 순서대로 담긴다.
    console.log(key);

    // obj.key 노노 - 객체안에 있는 key라는 키값을 찾는 식이다
    console.log(obj.key);
    // 이렇게 작성하면 된다.
    console.log(obj[key]);
}

// 재미없어.. 눈에 변수 밖에 안보여
// 드디어 페이지에 자바스크립트를 이용해서 동적인 기능을 넣어보자

// BOM - 브라우저 객체
// 브라우저의 기능들을 객체로 사용할 수 있게 해준것.
console.log(window);

// onload 메소드는 브라우저의 랜딩이 끝나고 보여줄 준비가 되었을때 실행되는 함수; 문서 랜더링을 끝내고 실행되는 함수
// window onload라는 키값에 함수 값을 전달.

window.onload = function(){
    console.log("나 다 그렸어 보여줄 준비 끝");
}

// DOM(문서 객체 모델) : 문서를 객체의 모양으로 만든것.
// 문서의 접근을 가능하게 해준다.

// DOM은 페이지에 있는 태그들을 객체로 표현한것,
// document; 객체에서 태그를 선택하는 방법
// 객체를 이용해서 찾고싶은 태그를 자바스크립트로 가져와서 사용할 수 있다.
console.log(document);

// 태그 선택자들

// ID ----------------------------------------------------------
// getElementById 메소드로 태그의 아이디를 찾아서 태그를 가져올 수 있다.
let div2 = document.getElementById("div1");

// 아이디 값이 있는 태그는 그냥 변수처럼 사용해도 된다.
// 계속 이야기한게 아이디는 한개만!! 태그에 하나만 같은 아이디가 있으면 안되요
// 아이디 중복 되지 않게
let div3 = div1;

// querySelector : 만능; 이 친구만 사용해도 된다.
// #을 붙여서 아이디라고 알려주고, div1을 찾아줘
let div4 = document.querySelector('#div1');

console.log(div2);
console.log(div3);
console.log(div4);
// -------------------------------------------------------------

// class -------------------------------------------------------
// 이게 안된다...왜그럴까?
// 클래스는 중복될 수 있게 만들었으니까 변수처럼 불러오는걸 안되게 한거다.
// console.log(class_div2);
let div5 = document.querySelector('.class_div2');

// querySelector : 문서를 읽다가 첫번째로 발견된 태그를 하나만 가져온다.
console.log(div5);

// querySelectorAll : 해당하는 전체 태그들을 가져온다.
let divArr = document.querySelectorAll('.class_div2');
console.log(divArr[3]);
// 배열의 형태로 가져오는구나
// -------------------------------------------------------------

// 태그 이름 선택자-------------------------------------------------
// querySelector 변수의 내용은 CSS 선택을 넣어주는거구나
let div6 = document.querySelector('div');
console.log(div6);
// -------------------------------------------------------------

// 이제 우리는 웹페이지를 만들 수 있는 능력이 생겼어. 대단한 사람이 됬다.

// 텍스트를 태그에 넣어주고 싶어
// div1
// 텍스트로 태그를 추가해봤다.
div1.innerHTML = "<ul><li>나 태그임</li></ul>";
// div1 태그의 내용을 추가할 수 있다. <div>여기에 내용이 추가됨</div>
console.log(div1.innerHTML);

let div7 = document.querySelector('.class_div2');
div7.innerHTML = "나 class_div2 태그 중 첫번째야";

let div8 = document.querySelectorAll('.class_div2');
div8[3].innerHTML = "난 class_div2를 가진 4번째 태그야";

/////////////////////////////////////////////////////////////////
// 버튼에 기능을 넣어보자

// 버튼을 누르면 함수를 실행시켜보자.
function btnFn(){
    // class_div2 클래스를 가지고있는 태그들을 class_div 변수에 배열로 담고
    let class_div = document.querySelectorAll('.class_div2');
    // 그 배열을 forEach로 순회하면서 아이템을 매개변수로 받았다.
    class_div.forEach(function(i){
        i.innerHTML = "이 문자로 통일; 너 버튼 눌렀지?";
    })
}

// html에서 함수를 가져가서 사용하자.
