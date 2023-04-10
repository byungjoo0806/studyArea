
function Drawer(el,open = false){ // open의 디폴트 값 : 전달된 매개변수가 없으면 open = false
    this.el = el;
    this.isOpen = open;
    // assign : 하나 이상의 객체로부터 대상 객체로 속성을 복사하는 메소드; 객체의 원형에 적용시킨다
    // 첫번째 매개변수 : 대상 객체, 두번째 매개변수 : 복사하려는 속성
    // 속성을 복사한 뒤, 첫번째 매개변수를 반환한다.
    // 반환되는 객체는 원본 객체가 아닌 새로운 객체다.
    Object.assign(this.el.style, {
        display : "block",
        position : "fixed",
        top : 0,
        bottom : 0,
        right : 0,
        width : "500px",
        padding : "10px",
        backgroundColor : "yellow",
        transition : "1s"
    });
}

Drawer.prototype.open = function(){
    this.isOpen = true;
    this.el.style.transform = "translate(0px)";
}

Drawer.prototype.close = function(){
    this.isOpen = false;
    this.el.style.transform = "translate(500px)";
}

const sideMenu = new Drawer(document.querySelector(".drawer"));
sideMenu.close();
document.querySelector(".drawer-opener").onclick = function(){
    if(!sideMenu.isOpen) sideMenu.open();
    else sideMenu.close();
}