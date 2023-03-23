// 1. 플레이어, 컴퓨터
// 2. 플레이어 선택, 컴퓨터 랜덤
// 3. 


let betting;
let choice;

let count = 0;

let money = 20000;
let minBetting = 2000;

let subText = "";

let pc = parseInt(Math.random()*3);
let game = true;

if (pc === 0) {
    pc = "묵"
}else if(pc === 1){
    pc = "찌"
}else{
    pc = "빠"
}


while(money > 2000){
    betting = parseInt(prompt(`${subText}\n판돈 최소 2000원 입니다. 얼마를 걸겠습니까? \n현재 소지금 : ${money}원 | 플레이 횟수 : ${count}`));

    if(isNaN(betting)){
        subText = "숫자를 입력하세요";
        continue;
    }

    if(betting < minBetting || betting > money) {
        subText = `너 잔고 확인해! 최소 ${minBetting}원을 내야하고 ${money}원보다 많이 못내지!`;
        continue;
    }

    choice = prompt(`자, 가위..바위..보!\n현재 소지금 : ${money} | 플레이 횟수 : ${count}`);

    if((choice === "찌" && pc === "빠") || (choice === "묵" && pc === "찌") || (choice === "빠" && pc === "묵")){ // 주도권 있을때
        choice = prompt(`PC : ${pc}\n묵..찌..빠!\n현재 소지금 : ${money} | 플레이 횟수 : ${count}`);
        pc = parseInt(Math.random()*3);
        if (pc === 0) {
            pc = "찌";
        }else if(pc === 1){
            pc = "묵";
        }else{
            pc = "빠";
        }
        if(choice === pc){
            money = money + betting * 2;
        }
        
    }else if((choice === "찌" && pc === "묵") || (choice === "묵" && pc === "빠") || (choice === "빠" && pc === "찌")){ // 주도권 없을때
        choice = prompt(`PC : ${pc}\n묵..찌..빠!\n현재 소지금 : ${money} | 플레이 횟수 : ${count}`);
        pc = parseInt(Math.random()*3);
        if (pc === 0) {
            pc = "찌";
        }else if(pc === 1){
            pc = "묵";
        }else{
            pc = "빠";
        }
        if(choice === pc){
            money = money - betting * 2;
        }
    }else{
        choice = prompt(`비겼습니다. 가위바위보를 다시 진행합니다.\n현재 소지금 : ${money}`);
    }

    count++;
    if(count >= 20){
        console.log("수고하셨습니다. 게임을 종료합니다.")
    }
        
}


    // if(choice === pc){
    //     subText = "비겼습니다. 다시 진행합니다."
    //     choice = prompt(`PC : ${pc}\n${subText}\n가위..바위..보! | 현재 소지금 : ${money}`);
    // }else if(choice === "가위" && pc === "바위"){
    //     choice = prompt(`PC : ${pc}\n묵..찌..빠! | 현재 소지금 : ${money}`);
    //     pc = parseInt(Math.random()*3);
    //     if (pc === 0) {
    //         pc = "가위";
    //     }else if(pc === 1){
    //         pc = "바위";
    //     }else{
    //         pc = "보";
    //     }
    //         if(choice === pc){
    //             money = money - betting * 2;
    //             count++;
    //         }else if(choice === "가위" && pc === "보"){

    //         }
    // }else if(choice === "가위" && pc === "보"){
    //     choice = prompt(`PC : ${pc}\n묵..찌..빠! | 현재 소지금 : ${money}`);
    //     pc = parseInt(Math.random()*3);
    //     if (pc === 0) {
    //         pc = "가위";
    //     }else if(pc === 1){
    //         pc = "바위";
    //     }else{
    //         pc = "보";
    //     }
    //         if(choice === pc){

    //             money = money - betting * 2;
    //             count++;
    //         }
    // }else if(choice === "바위" && pc === "가위"){
    //     choice = prompt(`PC : ${pc}\n묵..찌..빠! | 현재 소지금 : ${money}`);
    //     pc = parseInt(Math.random()*3);
    //     if (pc === 0) {
    //         pc = "가위";
    //     }else if(pc === 1){
    //         pc = "바위";
    //     }else{
    //         pc = "보";
    //     }
    //         if(choice === pc){
    //             money = money - betting * 2;
    //             count++;
    //         }
    // }else if(choice === "바위" && pc === "보"){
    //     choice = prompt(`PC : ${pc}\n묵..찌..빠! | 현재 소지금 : ${money}`);
    //     pc = parseInt(Math.random()*3);
    //     if (pc === 0) {
    //         pc = "가위";
    //     }else if(pc === 1){
    //         pc = "바위";
    //     }else{
    //         pc = "보";
    //     }
    //         if(choice === pc){
    //             money = money - betting * 2;
    //             count++;
    //         }
    // }else if(choice === "보" && pc === "가위"){
    //     choice = prompt(`PC : ${pc}\n묵..찌..빠! | 현재 소지금 : ${money}`);
    //     pc = parseInt(Math.random()*3);
    //     if (pc === 0) {
    //         pc = "가위";
    //     }else if(pc === 1){
    //         pc = "바위";
    //     }else{
    //         pc = "보";
    //     }
    //         if(choice === pc){
    //             money = money - betting * 2;
    //             count++;
    //         }
    // }else if(choice === "보" && pc === "바위"){
    //     choice = prompt(`PC : ${pc}\n묵..찌..빠! | 현재 소지금 : ${money}`);
    //     pc = parseInt(Math.random()*3);
    //     if (pc === 0) {
    //         pc = "가위";
    //     }else if(pc === 1){
    //         pc = "바위";
    //     }else{
    //         pc = "보";
    //     }
    //         if(choice === pc){
    //             money = money - betting * 2;
    //             count++;
    //         }
    // }
    // if(money == 0){
    //     console.log("잔고가 부족합니다. 게임을 종료합니다.");
    // }else if(count == 20){
    //     console.log("최대 게임 횟수에 도달하셨습니다. 게임을 종료합니다.")
    // }


    // while(game){
    //     choice = prompt(`자, 가위..바위..보! | 현재 소지금 : ${money}`)
    //     switch (choice) {
    //         case "가위":
    //             if(pc === "가위"){
    //                 console.log(choice," 대 ",pc," = 무승부");
    //                 choice = prompt("무승부입니다. 재경기합니다.");
    //                 pc = parseInt(Math.random()*3);
    //                 if (pc === 0) {
    //                     pc = "가위"
    //                 }else if(pc === 1){
    //                     pc = "바위"
    //                 }else{
    //                     pc = "보"
    //                 }
    //             }else if(pc === "바위"){
    //                 console.log(choice," 대 ",pc," = 패배");
    //                 money = money - betting * 2;
    //             }else{
    //                 console.log(choice," 대 ",pc," = 승리");
    //                 money = money + betting * 2;
                    
    //             }
    //         case "바위":
    //             if(pc === "가위"){
    //                 console.log(choice," 대 ",pc," = 승리");
    //                 money = money + betting * 2;
                    
    //             }else if(pc === "바위"){
    //                 console.log(choice," 대 ",pc," = 무승부");
    //                 choice = prompt("무승부입니다. 재경기합니다.");
    //                 pc = parseInt(Math.random()*3);
    //                 if (pc === 0) {
    //                     pc = "가위"
    //                 }else if(pc === 1){
    //                     pc = "바위"
    //                 }else{
    //                     pc = "보"
    //                 }
    //             }else{
    //                 console.log(choice," 대 ",pc," = 패배");
    //                 money = money - betting * 2;
                    
    //             }
    //         case "보":
    //             if(pc === "가위"){
    //                 console.log(choice," 대 ",pc," = 패배");
    //                 money = money - betting * 2;
                    
    //             }else if(pc === "바위"){
    //                 console.log(choice," 대 ",pc," = 승리");
    //                 money = money + betting * 2;
                    
    //             }else{
    //                 console.log(choice," 대 ",pc," = 무승부");
    //                 choice = prompt("무승부입니다. 재경기합니다.");
    //                 pc = parseInt(Math.random()*3);
    //                 if (pc === 0) {
    //                     pc = "가위"
    //                 }else if(pc === 1){
    //                     pc = "바위"
    //                 }else{
    //                     pc = "보"
    //                 }
    //             }
    //         default:
    //             break;
    //     }
        // count++;
    // }

    // if(money == 0){
    //     console.log("잔고가 부족합니다. 게임을 종료합니다.");
    // }else if(count == 20){
    //     console.log("최대 게임 횟수에 도달하셨습니다. 게임을 종료합니다.")
    // }
