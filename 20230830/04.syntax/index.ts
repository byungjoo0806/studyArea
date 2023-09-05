// ---------------------------------- javascript ----------------------------------
let num = 20;
const str = "javascript";
const nan = NaN;
const infinity = Infinity;
const bool = true;
const nullValue = null;
const undefinedValue = undefined;

const obj = {};
const arr = [];

const fn = (a:any)=>{
    console.log(a);
};

const sum = (a:any,b:any)=>{
    return a+b;
};

const any = "";
const unknown = "";

// ---------------------------------- typescript ----------------------------------
let num2 : number = 20;
const str2 : string = "typescript";
const nan2 : number = NaN;
const infinity2 : number = Infinity;
const bool2 : boolean = true;
const nullValue2 : null = null;
const undefinedValue2 : undefined = undefined;

const obj2 : object = {};
// Array<> : <> 에는 제네릭 타입 설정; 배열의 요소의 타입을 지정
const arr2 : Array<number | string> = [1,2,3]; // Array<type> : 배열 안에 들어가는 요소들의 타입도 설정 해줘야함

// void : 함수 실행시 비어있다는 것을 의미
// 반환값이 없는 함수라는 것
const fn2 = (a:number):void =>{
    console.log(a);
};

// 함수명 = ():type => {} - 함수의 반환값의 타입도 설정해줘야함; 설정 안하면 반환값이 없는 함수임
const sum2 = (a:number, b:number):number => {
    return a+b;
};

// any : 어떤 타입이든 할당할 수 있다. 하지만, 되도록이면 남발하지말자. 타입의 안정성이 보장되지 않음
const any2 : any = "";
console.log(any2.length);

// unknown : 어떤 타입이든 할당할 수 있다. 타입의 안정성까지 보장.
const unknown2 : unknown = "";

if(typeof unknown2 === "string")
console.log(unknown2.length);
