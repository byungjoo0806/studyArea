let arr = ["한식","햄버거","중식","일식","백화점"];

let randNum = Math.floor(Math.random()*6);

setTimeout(() => {
    alert(arr[randNum]);    
}, 100);

function lunch(){
    if(arr[randNum] === "햄버거"){
        let burger = ["롯데리아","노브랜드","맥도날드","버거킹","서브웨이"];
        let burgerNum = Math.floor(Math.random()*5);
        setTimeout(() => {
            alert(burger[burgerNum]);
        }, 1000);
    }else if(arr[randNum] === "한식"){
        let korean = ["싸다김밥","그린토마토","태양식당"];
        let koreanNum = Math.floor(Math.random()*3);
        setTimeout(() => {
            alert(korean[koreanNum]);
        }, 1000);
    }else if(arr[randNum] === "중식"){
        let chinese = ["짬뽕바이브","도원스타일","마라탕"];
        let chineseNum = Math.floor(Math.random()*3);
        setTimeout(() => {
            alert(chinese[chineseNum]);
        }, 1000);
    }else if(arr[randNum] === "일식"){
        let japanese = ["스시진","갓포하루"];
        let japaneseNum = Math.floor(Math.random()*2);
        setTimeout(() => {
            alert(japanese[japaneseNum]);
        }, 1000);
    }else if(arr[randNum] === "백화점"){
        setTimeout(() => {
            alert("가서 골라 이노무 시키야");
        }, 1000);
    }
}

lunch();