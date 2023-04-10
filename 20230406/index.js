// 이터러블 이터레이터

// Set, Map

// Set : 배열에 중복되지 않는 값을 저장할 수 있다.
// 중복되지 않는 유일한 값들
// 배열에는 중복값이 저장될 수 있는데, set은 중복이 안되는 값을 저장할 수 있다.

// 배열은 요소의 순서에 의미가 있는데, set은 순서 의미가 없다
// 배열은 인덱스로 접근을 하는데 set은 접근이 안된다.

// Set : ES6 값으로만 이루어져있고 중복값은 허용하지 않는다.

// Set 객체를 만들자

const s = new Set();
console.log(s);

// 요소를 추가하는 방법 : add 메소드 사용
s.add("one");
s.add("one");
// 중복값은 허용하지 않는다.
s.add("two");
s.add("two");
s.add("three");
console.log(s);

const arr = [1,2,3,4,5];
// 생성단계에서 생성자 함수에 배열을 전달
const ss = new Set(arr);
console.log(ss);

// has : 값을 가지고 있는지 확인하는 메소드; 있으면 true, 없으면 false
console.log(ss.has(2));

// delete : 아이템을 제거하는 메소드
ss.delete(2);
console.log(ss);

// clear : 모든 값을 제거하는 메소드
// ss.clear();
// console.log(ss);

// forEach : 이터러블 반복자
ss.forEach(function(i){
    console.log(i)
})

// entries : SetIterator 객체로 반환; 이터러블에 이터레이터를 반환 시켜준다.
const temp = ss.entries();
console.log(temp.next().value); // 
console.log(temp.next().value);


// Map : 키와 값을 저장하는데, 키를 객체로 저장할 수 있다.
//     : ES6부터 추가됬다.
// 키와 값을 한쌍으로 저장하고, 중복된 키값을 허용하지 않는다.
// iterator를 통해 Map 객체 내부를 순회할 수 있다.

const map = new Map();

// Map : 값을 추가할때 키와 같이 한쌍으로 추가를 해줘야한다.
// set() : 값을 추가하는 메소드; 첫번째 매개변수 = 키, 두번째 = 값
map.set("one",1);
map.set("one",2);
map.set("one",3); // map : 중복되는 키를 허용하지 않는다. 마지막으로 저장된 값이 뜬다.
map.set("two",2);
console.log(map);

// 키를 지정하는 이유 : 키에 저장된 값을 호출하기위해
// get() : 키에 저장된 값을 호출하는 메소드; 매개변수로는 키가 들어간다.
console.log(map.get("one"));
console.log(map.get("two"));

// 값을 저장할 수 있으면 값을 뺄 수도 있을거야
// delete : 키와 값을 삭제해주는 메소드; 매개변수로는 키가 들어간다.
// map.delete("one");
console.log(map);

// size : map에 저장된 아이템의 갯수를 확인할 수 있는 메소드
console.log(map.size);

// keys() : map의 아이템에서 모든 키를 가져오는 메소드
const keys = map.keys();
console.log(keys);

// values() : map의 아이템에서 모든 값을 가져오는 메소드
const values = map.values();
console.log(values);

// emtries() : [키,값] 형태의 정보들을 모아서 MapIterator 객체로 변환하고 반환해준다.
const iter = map.entries();
console.log(iter);

// console.log(iter.next().value);
// console.log(iter.next().value); // 키와 값을 배열로 반환

// for of
// 키 정보만 출력 시키게 for of 문으로 작성해보자
for (const iterator of keys) {
    // 이터레이터 요소가 끝날때까지 반복하면서 요소를 보여준다.
    console.log(iterator);
}

// 값 정보만 출력 시키게
for (const iterator of values) {
    console.log(iterator);
}

// 키랑 값을 다 출력; 구조 분해 할당
for (const [key,value] of iter) {
    console.log(`키는 ${key}, 값은 ${value}`);
}

map.forEach(function(value,key){
    console.log(`키는 ${key}, 값은 ${value}`);
})