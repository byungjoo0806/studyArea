// 프로토타입 : 객체의 원형
// 자바스크립트의 객체는 프로토타입을 상속 받는다.

// object.prototype

function Car(model,color,speed){
    this.model = model;
    this.color = color;
    this.speed = speed;
    this.accel = function(){
        this.speed -=10;
    }
}

// 생성자 함수로 동적할당해서 생성
// let temp = new Car("벤츠","흰색",200);
// let temp2 = new Car("모닝","검정",200);

// console.log(temp);
// console.log(temp2);

// function Car(m,c,s){
//     this.model = m;
//     this.color = c;
//     this.speed = s;
//     this.speedUp = function(){
//         this.speed += 10;
//         return this.speed;
//     }
// }

// let temp = new Car("마티즈","레드",150);
// // battery 키 추가, true 값 추가
// temp.battery = true;
// temp.speedUp = function(){
//     this.speed += 20;
//     return this.speed;
// }
// console.log(temp);
// temp.speedUp();
// console.log(temp);

// 이런 방식은 객체에 새 속성을 추가할 수 있는데
// 원형에 추가는 할 수가 없다.

function Car(m,c,s){
    this.model = m;
    this.color = c;
    this.speed = s;
}
let temp = new Car("봉고","검정",100);
console.log(temp);


// 프로토타입의 정의 기본 형식
// 객체명.prototype.메소드 = function(){
//    
// }
// 이 원형을 가진 객체들은 전부 프로토타입으로, 추가한 메소드를 사용할 수 있다.
// 생성자에 의해 생성된 모든 객체는 생성자 함수의 모든 속성과 메소드를 상속 받는다.
// 각 객체는 상속도니 속성과 메소드를 메모리에 저장해놓고, 동일한 메소드는 메모리에 저장하고 중복저장을 피한다.
// 생성자 함수에 메소드를 정의하지않고 생성자 외부에 별도의 메소드를 정의해서 사용하는 방법이 .prototype

// Car.prototype.speedUp = function(){
//     this.speed += 20;
//     return this.speed;
// }

// Car.prototype.speedDown = function(){
//     this.speed -= 20;
//     return this.speed;
// }

// let temp = new Car("봉고","검정",100);
// console.log(temp);
// let temp2 = new Car("다마스","파랑",100);
// console.log(temp.speedUp());

// // temp 객체에 stop 메소드 추가
temp.stop = function(){
    this.speed = 0;
    return this.speed;
}
// console.log(temp);

let temp2 = new Car("벤츠","검정",150);
console.log(temp2);

// // 생성자 함수로 만든 객체들에게 전부 메소드를 추가해줄때
// // .prototype 으로 생성자함수 원형에 메소드를 추가해주자
// Car.prototype.stop = function(){
//     this.speed = 0;
//     return this.speed;
// }
// console.log(temp);
// console.log(temp2);

// console.log(temp.stop());
// console.log(temp2.stop());

String.prototype.replaceOf = function(){
    console.log("나는 프로토타입으로 추가됬어");
}

// 문자열의 원형은 String
console.log("가나다");
console.log("가나다".replace("가","나"));
console.log("가나다".replaceOf());