// 옹알이 1
function solution(babbling){
    for(i = 0; i < babbling.length; i++){
        // "aya" "ye" "woo" "ma"

    }
}

// 분수의 덧셈
function solution2(num1,den1,num2,den2){
    let arr = [];
    let resultNum = num1 * den2 + num2 * den1;
    let resultDen = den1 * den2;
    arr.push(resultNum,resultDen);
    console.log(arr);
}
solution2(1,3,1,2);

function angles(angle){
    if(angle<90 && angle>0){
        console.log(1);
    }
}
angles(-10);

let a = "asdfqwerzxcvasdf";
let b = a.split("");
let c = b.join("");
console.log(b);
console.log(c);

let arr1 = [1,2,3,4,5];
console.log(Math.max(...arr1));

let arr2 = [1,5,23,6,10];
let num = Math.max(...arr2);
console.log(num);

let arr2_less = arr2.slice(arr2.indexOf(num),arr2.indexOf(num)+1);
console.log(arr2_less);
console.log(arr2);

let arr2_splice = arr2.splice(arr2.indexOf(num),1);
console.log(arr2_splice);
console.log(arr2);

let arr3 = [];
let abc = "hello";
let textSplit = abc.split("");
console.log(textSplit);
let textSplit1 = textSplit.splice(abc[0],1);
console.log(textSplit1);
for(i = 0;i < 2; i++){
    arr3.push(textSplit1[0]);
}
console.log(arr3);

let arr5 = [];
let my_string_arr = abc.split("");
for( i = 0; i < abc.length; i++){
    for(c = 0; c < 4; c++){
        arr5.push(my_string_arr[i]);
    }
}
console.log(arr5);

let arr10 = [];


// arranging array in ascending order
// Array.sort(function(a,b){a-b})

// arranging array in descending order
// array.sort(function(a,b){b-a})

let words = "Nice to Meet you";
console.log(words.split(""));

// 모음 제거 (배열에서 원하는 아이템 제거)
let vowels = ["a","e","i","o","u"];
let splitted = words.split("");
let vowelsGone = splitted.filter(letter => letter !== "e" && letter !== "i" && letter !== "o" && letter !== "u");
console.log(vowelsGone);
console.log(splitted);
//

for(i = 0; i < splitted.length; i++){
    if(splitted[i] === "e"){
        splitted.splice(splitted.indexOf("e"),1);
    }
}
console.log(splitted);

let text = "asdf1234dkdsf9";
let textsplit = text.split("");
let numsplit = textsplit.filter(num => num >= 0 && num < 10);
let sum = 0;
console.log(numsplit);
for(i = 0; i < numsplit.length; i++){
    sum = sum + parseInt(numsplit[i]);
    console.log(sum);
}
console.log(sum);
let numbered = parseInt(numsplit);
console.log(numbered);

console.log(textsplit);

let numExp = /\d/;
console.log(text.match(numExp));
console.log(parseInt("a"));

// 최대공약수 구하기
let divisor;
for(i = 1; i <= 10 && i <= 20; i++){
    if(10 % i == 0 && 20 % i == 0){
        divisor = i;
    }
}
console.log(divisor);
//

let testNum1 = 12345;
let strNum1 = testNum1.toString();
console.log(strNum1.split(""));
let sumOfNum = 0;
for(i = 0; i < strNum1.length; i++){
    sumOfNum = sumOfNum + parseInt(strNum1[i]);
}
console.log(sumOfNum);