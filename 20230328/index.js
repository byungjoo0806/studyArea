// 스프레드 연산자

let obj = {name : "andy", content : "info"};

let obj2 = obj;
obj2.name = "park";

// 객체는 주소를 참조하는 레퍼런스 타입
console.log(obj);
console.log(obj2);
console.log(obj == obj2); // true

// ... : 스프레드 연산자 구문
let obj3 = {...obj}; // 값을 복사해서 새로운 객체를 만들어준것
// obj3.name = "kim";

console.log(obj);
console.log(obj3);
console.log(obj == obj3); // false

// 스프레드 연산자를 사용하면 원본을 유지하고 작업을 진행할 수 있다.
// 데이터베이스에서 값을 가져와서 검색기능을 만든다고 가정하면
// 모든 리스트를 가지고있는 배열은 유지하되,
// 검색으로 걸러낸 배열만 사용하고 싶을때

// 리엑트에서 많이 사용할것

// 옵션 체이닝
// ES11에서 도입되었고
// 객체의 값을 호출할때 안전성을 유지하면서 호출 가능하다.
// 옵션 체이닝 : 객체의 키 앞에 ? 구문을 추가해서 작성

let obj4 = {name: "park", content : "info"};

// obj4?.name
// name이라는 키가 있는지 확인
// 키가 없으면 undefined, 키가 있으면 저장되어있는 값
// 오류가 나지 않게 방지해준다.

// 오류가 나지 않는 이유는 객체의 키를 확인하고, type 에러가 나지 않게 방지해주기 때문
console.log(obj4?.name);
console.log(obj4?.story);

let obj5 = {
    name : "park",
    content : {
        age : 10
    }
}
console.log(obj5.content.key);
// node 환경에서 보여줄거야