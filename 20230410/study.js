let my_string = "asdfbotiuQASDVZXC";
console.log(my_string.split(""));
let arr_my_string = my_string.split("");
let lower = /[a-z]/
let lowerCase = my_string.matchAll(lower);
console.log(my_string.matchAll(lower));
// for(i = 0; i < my_string.length; i++){
//     if(my_string[i].match(lower) ){
//         my_string[i].toUpperCase();
//     }else{
//         my_string[i].toLowerCase();
//     }
//     console.log(my_string);
// }
console.log(my_string);