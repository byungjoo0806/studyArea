// 배열 심화
// 배열 [1,2,3,4,5,6] : 레퍼런스 타입
// 리스트 형태
// 인덱스의 순서로 해당 값에 접근할 수 있다.
// 우리는 1부터 숫자를 세는데
// 배열은 0에서부터 숫자를 센다.
// 인덱스 0~배열의 길이까지

// 다른 언어에서 C,C++,C# 등등~
// 배열이 list타입이 있는데
// 자바스크립트에서는 Arr타입이 있는데
// 사용자가 편하게 접근하기 위해서 조금 허술한 부분이 있다.
// 자바스크립트의 배열은 객체; 키값이 0 1 2 3
// 자바스크립트의 배열안의 배열은 객체 배열이다.
// 예) 다른 언어 배열안의 배열 int a[0][1];

// 자바스크립트
let a = [[1,2,3],[4,5,6],[7,8,9]];

// 우리는 이중배열이라고 부른다.
console.log(a[0]); // === [1,2,3]
console.log(a[1][1]); // === 5
console.log(a[2][0]); // === 7

// a[0] === [1,2,3]
// a[0][0] === [1,2,3]의 0번 인덱스. 즉, 1이 나온다.
// 대부분 이중 배열까지만 사용한다. 더 만들수는 있지만

// 배열에는 length라는 키값이 있다.
// 배열의 총 길이는 알려줍니다.

console.log(a.length);
//배열의 인덱스 접근할때 0 ~ (배열의 길이 - 1)
// 길이 : 1, 2, 3, 4
// 인덱스 : 0, 1, 2, 3

// 반복문에 바로 숫자를 이렇게 작성하게 되면
// 반복문의 반복횟수를 동적으로 변경하기 힘들다.
let b = [1,2,3,4,5,6,7];
// 길이가 변경되는 상황이 발생했는데
// 반복문은 7번 돌아가기 때문에
// 배열의 길이가 8로 늘어나게되면 마지막 값을 가져올수가 없다.
// 배열의 길이가 변해도 length 키값으로 배열의 길이를 가져올 수 있다.
// 그럼 반복문을 정상적으로 배열의 길이만큼 반복 시킬수 있다.
b.push(8); // 배열 뒤에 값 추가
b.push(9);
// push(8) 이제 알겠다. 외웠었는데
// push(8); // 너 함수구나? 배열 메소드
// 배열타입의 함수
// 함수도 값이다.
for (i = 0; i < b.length; i++){
    // 0 1 2 3 4 5 6
    console.log(b[i]);
    // 값 : 1 2 3 4 5 6 7
    // 이렇게 콘솔이 뜰건데
}

// 객체 생긴거 다시보자.

// const 한번 선언하면 값을 변경할 수 없다. 재선언 또한 안된다.
// 상수의 값
// 객체는 키와 값이 있다.

const obj = {
    a : "나는 객체야",
    // 익명함수 : 이름이 없는 함수
    push : function(num){
        console.log("나는 obj 객체 안에 push라는 키값에 있는 함수야");
        console.log(num + "를 매개변수로 받았어 ㅎㅎ");
    }
}

console.log(obj.a);
obj.push(2);

let d = [1,2,3,4,5];

// 배열 메소드 indexOf

// 배열 인덱스에 따른 값을 구할 수 있는 함수
// return은 변수명으로 쓰면 안된다

// 배열 0~(배열의 길이-1)까지 있는데
// 배열의 값을 찾아서 위치를 리턴
let return2 = d.indexOf(2);
// 해당 값을 찾아서 배열의 인덱스를 반환한다.
console.log(return2);

let arr = ["사과","딸기","포도"];

let return3 = arr.indexOf("딸기");
// 딸기라는 값의 인덱스를 알고싶어.
console.log(return3);

// 배열 메소드 find
// 검색할때 사용할 함수
// 함수 반환값이 true나오는 함수를 넣어주고

// find라는 함수는 매개변수로 함수를 전달받는다.
let return4 = arr.find(function(i){
    // 배열의 값이 순서대로 들어온다.
    // i 매개변수에
    console.log("item"+i);
    // return 값이 true의 값이 반환되면 해당 아이템을 반환해준다.
    return i === "딸기";
});
// true가 나온 첫번째 값을 반환한다.
console.log(return4);

// 배열 메소드 findIndex
let return5 = arr.findIndex(function(i){
    return i === "딸기";
})
// 해당 배열을 반복시키면서 값을 찾고, 그 값의 인덱스를 반환해준다.
console.log(return5);

let arr2 = ['이사과','김딸기','이포도']
// 배열 메소드 filter

// 문자열 가나다
let str = "가나다";
console.log(str[1]);
// 문자열도 인덱스로 한자 한자 접근이 가능하다.

let return6 = arr2.filter(function(i){
    return i[0] === "이";
})
// filter : 검색창 같은 알고리즘 구현할때 사용할 것 같다.

// 원하는 값을 모두 찾아서 반환해준다.
console.log(return6);

// 배열 메소드 map
let return7 = arr2.map(function(i){
    console.log(i);
    // return i;
    // 반환값들을 배열의 형태로 반환해준다.
    return i[0] === "이"
})
// 반환값이 나오면 배열의 길이만큼 채워서 반환
console.log(return7);

// 배열 메소드 forEach
// 해당 배열을 반복시켜서 작업해야할 경우 용이하게 사용된다.
arr2.forEach(function(i){
    console.log(i);
})
// 배열의 길이만큼 반복하면서 값을 뽑아줍니다.
// 값을 바로 사용할 수 있다.
// 아이템을 순차적으로 뽑아준다.

// for (let i = 0; i < arr2.length; i++) {
//     // 증가하는 값을 배열의 인덱스로 줘서 값을 확인했는데
//     console.log(arr2[i]);
// }

// 배열 메소드 join
// join 함수는 매개변수로 문자열을 전달해준다.
console.log(arr2.join(" "));
// 배열을 문자열로 변경시켜준다.
// 배열에 들어있는 값들의 구분을 매개변수로 전달한 문자열로 해준다.

let str3 = arr2.join(",");
// split 함수
// 문자열을 배열로 변경
// split 함수의 매개변수로 문자열 값을 자를 문자값을 넣어주면된다.
// ',' 값을 매개변수로 전달하면 문자열에서 ,의 문자를 잘라서 배열의 형태로 변경시켜준다.
console.log(str3.split(','));