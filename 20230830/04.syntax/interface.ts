// interface 는 객체의 구조를 정의하는 "타입"
// 객체의 틀
// 그 틀을 따라가야한다 - 틀 : 키와 해당하는 타입의 값

interface IBlock {
    id : number
    title : string
    content : string
    date : number
    like : number
    hit? : number // ? : 객체의 구조에서 hit 가 없어도 가능한 정의
}

const Block : IBlock = {
    id : 0,
    title : "",
    content : "",
    date : 0,
    like : 0,
    hit : 0
}

const Block2 : IBlock = {
    id : 0,
    title : "",
    content : "",
    date : 0,
    like : 0
}


// 추상
// interface
// class

// implements
// implements 키워드 : class의 구조가 만족하는지 여부 체크 / 구조 확인용
// interface IProduct {
//     name : string
//     price? : number
// }

// class product implements IProduct {
//     name : string
//     price : number
//     constructor(name : string, price : number){
//         this.name = name;
//         this.price = price;
//     }
// }