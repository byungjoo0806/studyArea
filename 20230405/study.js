function iceCream(type,scoop,taste){
    this.type = type;
    this.scoop = scoop;
    this.taste = taste;
}
let choco = new iceCream("cone","large","chocolate");
console.log(choco);

let sym1 = Symbol("one");
let sym2 = Symbol("one");
let sym3 = Symbol("one");

console.log(sym1 == sym2);
console.log(sym2 == sym3);
console.log(sym3 == sym1);