// 배열 메소드 좀 더 사용해보자

// 배열 메소드가 제일 많이 사용된다.

// Array.of() : 전달된 인자를 아이템으로 가지는 배열을 만들어준다; 배열을 생성할때 사용하는 메소드
const arr = Array.of(1,2,3,4,5,6);
console.log(arr);

// push() : 배열의 원본 배열을 수정하는 메소드; 새로운 배열을 반환시켜주는 것이 아닌, 원본 배열을 직접적으로 수정하는 메소드
arr.push(2);
console.log(arr);

// concat() : 원본 배열을 수정하는게 아니라, 새로운 배열을 반환시켜주는 메소드
const result = arr.concat(5);
console.log(result);
console.log(arr);

// 레퍼런스 타입 (참조 타입) : 값을 비교하는게 아니라 주소를 비교하기 때문에, 똑같은 값을 가지고 있는 배열이라도, false가 뜬다.
console.log(arr == result); // false

let a = [1,2,3];
let b = [1,2,3];
console.log(a == b); // false

let c = [4,5,6];
let d = c;
console.log(c == d); // true

let e = [7,8,9];
let f = [...e]; // 스프레드 연산자 : 값만 복사해서 새로운 배열을 만들어줌
console.log(e);
console.log(f);
console.log(e == f);


const fruits = ["apple","banana","orange"];
// fruits 배열에서 banana가 있는지 확인
if(fruits.indexOf("banana") === -1){ // banana가 없으면
    fruits.push("banana");
}
console.log(fruits);

// includes : ES7에 도입, 값이 있는지 확인하는 메소드; 있으면 true, 없으면 false
if(!fruits.includes("banana")){ // banana가 없으면
    fruits.push("banana");
}
console.log(fruits);

// 배열에 아이템을 추가할때 push 메소드를 사용하는데, 자바스크립트에서는 index 에러가 따로 뜨지 않기 때문에 (정해진 사이즈가 없기 때문에)
const arr2 = [1,2,3];
// 배열의 최대 인덱스 = 갯수 - 1
arr2[arr2.length + 1] = 3; // 배열의 마지막 인덱스에 값을 추가하지 않고, 더 이후의 인덱스에 값을 추가하면 중간 값들은 empty
console.log(arr2);

// pop : 배열의 마지막 아이템을 제거하는 메소드; 원본 배열에서 제거된다.
const arr3 = [1,2,3,4,5];
arr3.pop();
console.log(arr3);

// shift : 첫번째 아이템을 제거하는 메소드; 원본 배열에서 제거된다.
arr3.shift();
console.log(arr3);

const arr4 = [1,2];
const arr5 = [3,4];
const arr6 = [5,6]; 
const arr7 = arr4.concat(arr5,arr6); // concat : 배열을 이어붙이는 메소드
console.log(arr7);

// ex) 판매상품들의 리스트가 있는데, 원본 배열을 수정하면 안되고, 생활 가전 식품 리스트가 따로있고
//     전체 상품 리스트를 뽑아서 이벤트성이나 전체 상품 페이지를 구성해야할때, 원본은 유지하되 새로운 리스트를 만들 수 있다.

// splice : 원본 배열의 중간 값을 추가/제거 하는 메소드; 시작 인덱스와 끝 인덱스를 모두 포함한 값들이 제거된다
const arr8 = [1,2,3,4,5];
const result2 = arr8.splice(1,3,20,30); // 첫번째 매개변수 : 시작 인덱스, 두번째 : 끝 인덱스, 세번째,네번째 : 추가할 값
console.log(arr8);
console.log(result2); // splice 메소드를 반환하면 제거한 아이템들이 반환된다.

const arr9 = [1,2,3,4];
const result3 = arr9.splice(1,2);
console.log(arr9); // 아이템을 제거한 원본 배열
console.log(result3); // 제거한 아이템

// 배열에서 특정 요소 제거 함수
const arr10 = [1,20,3,1,50,6];
function removeItem(arr,item){
    // 제거할 item의 인덱스
    const index = arr.indexOf(item);
    if(index !== -1) arr.splice(index,1); // 해당 인덱스에 있는 값만 제거
    return arr;
}
console.log(removeItem(arr10,1));

// slice : 매개변수로 전달받은 범위의 아이템을 복사해서 배열을 반환해주는 함수; 원본 배열은 수정되지 않는다.
const arr11 = [1,2,3,4];
console.log(arr11.slice(0,2));

// join : 원본 배열의 모든 아이템을 문자열로 반환; 사실상 대괄호만 없애주는 느낌이다.
const arr12 = [1,2,3,4,"wow"];
console.log(arr12.join());

// reverse : 배열의 순서를 뒤집어 주는 메소드
console.log(arr12.reverse());

// fill : ES6에서 도입, 배열의 모든 아이템을 전달받은 매개변수로 바꾼다; 배열의 갯수를 유지하되, 값을 초기화 해야할때 사용 
const arr13 = [1,2,3,4,5];
arr13.fill(1);
console.log(arr13);

// flat : 배열의 뎁스를 1차 배열로 맞춰주는 메소드; 한 뎁스씩 올려준다
// [1,2,3,4,5,[4,4]] -> [1,2,3,4,5,4,4]
const arr14 = [1,[2,[3,4],4],[3,4],5];
console.log(arr14.flat()); // 매개변수로 뎁스를 정할 수 있다; 매개변수로 전달한 값이 없으면 기본값이 한 뎁스까지만 합쳐준다.

const arr15 = [[[[[[[[[[1],2],3],4,5],6],7],8],9],10],11];
console.log(arr15.flat(Infinity));