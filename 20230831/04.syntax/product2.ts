// 할인
interface Discount {
    // 함수만 선언
    getDiscountPrice(price : number) : number
};

// 가격만 수정하는 할인
class FlatDiscount implements Discount {
    private amount : number;

    constructor(amount : number) {
        this.amount = amount;
    };

    getDiscountPrice(price: number): number {
        return price - this.amount;
    };
};

const saleAmount = new FlatDiscount(50);
console.log(saleAmount.amount);

const FlatDiscount2 : Discount = {
    getDiscountPrice(price : number){
        return price - 1000;
    }
};

// 할인으로 가격 수정
class PercentDiscount implements Discount {
    private amount : number;

    constructor(amount : number){
        this.amount = amount;
    };

    getDiscountPrice(price: number): number {
        return price * (1 - this.amount / 100)
    };
};

// 가격도 깍고 할인도 깍고
class FlatPercentDiscount implements Discount {
    private flatAmount : number;
    private percent : number;

    constructor(flatAmount : number, percent : number){
        this.flatAmount = flatAmount;
        this.percent = percent;
    };

    getDiscountPrice(price: number): number {
        const flatDiscountAmount = price - this.flatAmount;
        return flatDiscountAmount * (1 - this.percent / 100);
    };
};

// 할인의 기능에 대한 유지보수가 좋아진다.
// 클래스 하나만 더 추가하면 되는것.

class Products {
    private name : string;
    private price : number;

    constructor(name : string, price : number){
        this.name = name;
        this.price = price;
    };

    getName() : string {
        return this.name;
    };

    getPrice() : number {
        return this.price;
    };
};

class ProductDiscount {
    private product : Products;
    private discount : Discount;

    constructor(product : Products, discount : Discount){
        this.product = product;
        this.discount = discount;
    };

    getPrice() : void {
        console.log(this.discount.getDiscountPrice(this.product.getPrice()));
    };
};

const mac = new Products("mac",100000);
const asus = new Products("asus",2000);

const laptopDiscount = new PercentDiscount(10);
const laptopDiscount2 = new FlatDiscount(1000);
const laptopDiscount3 = new FlatPercentDiscount(1000,10);

const laptopWithDiscount = new ProductDiscount(mac, laptopDiscount);
laptopWithDiscount.getPrice();

const laptopWithDiscount2 = new ProductDiscount(asus, laptopDiscount3);
laptopWithDiscount2.getPrice();