// 클릭의 시작 위치를 가지고 있고,
// 끝나면 끝난 좌표와 비교를 해서
// 오른쪽으로 스와이프 된건지
// 왼쪽으로 스와이프 된건지부터 확인을 하고
// 인덱스를 기준으로 움직임을 제어해보자.

// 마우스 시작 클릭의 X좌표 
let _start;
// 진행중인 인덱스
let _index = 1;

let _swiper = document.querySelector(".swiper");
let _swiperContent = document.querySelector(".swiper-content");
let {length} = document.querySelectorAll(".swiper-item");
let _prev = document.querySelector(".prev");
let _next = document.querySelector(".next");


// getComputedStyle : 적용된 스타일의 값을 가져올수 있다.
// 적용된 스타일을 가져올 태그를 매개변수로 전달
let _swiperWidth = parseInt(getComputedStyle(_swiper).width);
console.log(_swiperWidth);

_swiper.addEventListener("mousedown",function(e){
    console.log("클릭시작");
    // 클릭했을때의 X좌표
    console.log(e);
    // e.clientX : 클릭한 위치의 X 좌표
    _start = e.clientX;
    console.log(_start);
});

_swiper.addEventListener("mouseup",function(e){
    // _end = e.clientX;
    // console.log(_end);
    // console.log("클릭 끝");
    if(e.clientX < _start - 50){
        // console.log("끝 좌표가 더 작아");
        if(_index < length - 1){
            _index++;
            swiperMove();
            // console.log(_swiperContent.style.left);
            _swiperContent.style.transition = "0.5s";
            _swiperContent.ontransitionend = function(){ // transitionend : 애니메이션을 멈춰주는 이벤트
                // console.log("😭");
                if(_index == length - 1){
                    _swiperContent.style.transition = "none";
                    _index = 1;
                    _swiperContent.style.left = -(_index * _swiperWidth) + "px";
                // setTimeout(() => {
                //     _swiperContent.style.transition = "none";
                //     _index = 1;
                //     _swiperContent.style.left = -(_index * _swiperWidth) + "px";
                // }, 800);
                }else{
                    _swiperContent.style.transition = "0.5s";
                }
        }

            // _swiperContent.style.transition = "1s";
            // else{
            //     _swiperContent.style.transition = "1s";
            // }
        }
        // if(_index == length - 1){
        //     oneToOne();
        // }
        // if(_index == length){
        //     // setTimeout(() => {
        //     //     // _swiperContent.style.transition = "none";
        //     //     _index = 1;
        //     // }, 100);
        //     _index = 1;
        //     // _swiperContent.style.left = 0;
        //     swiperMove();
        //     // _swiperContent.style.transition = "1s";
        // }
    }else if(e.clientX > _start + 50){
        // console.log("시작 좌표가 더 작아");
        if(_index > 0){
            _index--;
            swiperMove();
            // console.log(_swiperContent.style.left);
            _swiperContent.style.transition = "0.5s";
            _swiperContent.ontransitionend() = function(){
                if(_index == 0){
                    _swiperContent.style.transition = "none";
                    _index = 5;
                    _swiperContent.style.left = -(_index * _swiperWidth) + "px";
                    // setTimeout(() => {
                    //     _swiperContent.style.transition = "none";
                    //     _index = 5;
                    //     _swiperContent.style.left = -(_index * _swiperWidth) + "px";
                    // }, 800);
                }else{
                    _swiperContent.style.transition = "0.5s";
                }
            }
                // _swiperContent.style.transition = "none";
                // _swiperContent.classList.add("fake");
                // _swiperContent.style.left = -(4 * _swiperWidth) + "px";
                // swiperMove();
                // _swiperContent.classList.remove("fake");
        }
        // if(_index == 0){
        //     fiveToFive();
        // }
    }
})

// 인덱스를 기준으로 움직임
function swiperMove(){
    _swiperContent.style.left = -(_index * _swiperWidth) + "px";
    // if( == 0){
    //     _swiperContent.style.left = parseInt(-(5 * _swiperWidth));
    // }else if(parseInt(_swiperContent.style.left) == -(6 * _swiperWidth)){
    //     _swiperContent.style.left = parseInt(-(1 * _swiperWidth));
    // }
    // console.log(parseInt(_swiperContent.style.left));
}
// swiperMove();

// window.onload = function(){
//     _swiperContent.style.transition = "none";
// }

// if(_index == 1){
//     _index == 6
// }

// if(_index == 5){
//     _index == 0
// }
_prev.addEventListener("click",function(){
    if(_index > 0)
    _index--;
    swiperMove();
    _swiperContent.style.transition = "0.5s";
    console.log("🥲");
    _swiperContent.ontransitionend = function(){
        if(_index == 0){
            _swiperContent.style.transition = "none";
            _index = 5;
            _swiperContent.style.left = -(_index * _swiperWidth) + "px";
        }else{
            _swiperContent.style.transition = "0.5s";
        }
    }
        // if(_index == 0){
        //     setTimeout(() => {
        //         _swiperContent.style.transition = "none";
        //         _index = length - 2;
        //         _swiperContent.style.left = -(_index * _swiperWidth) + "px";
        //     }, 800);
        // }else{
        //     _swiperContent.style.transition = "0.5s";
        // }
})

_next.addEventListener("click",function(){
    if(_index < length -1)
    _index++;
    swiperMove();
    _swiperContent.style.transition = "0.5s";
    _swiperContent.ontransitionend = function(){
        if(_index == length -1){
            _swiperContent.style.transition = "none";
            _index = 1;
            _swiperContent.style.left = -(_index * _swiperWidth) + "px";
        }else{
            _swiperContent.style.transition = "0.5s";
        }
    }
    // if(_index == length - 1){
        //     setTimeout(() => {
            //         _swiperContent.style.transition = "none";
            //         _index = 1;
            //         _swiperContent.style.left = -(_index * _swiperWidth) + "px";
            //     }, 800);
            // }else{
                //     _swiperContent.style.transition = "0.5s";
                // }
                
})
// if(_swiperContent.style.left == 0){
//     _
// }

// function oneToOne(){
//     _index = _index - 5;
// }

// function fiveToFive(){
//     _index = _index + 5;
// }