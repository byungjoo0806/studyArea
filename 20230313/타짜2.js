

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

while(count < 20 || money != 0){
    betting = parseInt(prompt(`${subText}\n판돈 최소 2000원 입니다. 얼마를 걸겠습니까? \n현재 소지금 : ${money}원 | 플레이 횟수 : ${count}`));

    if(isNaN(betting)){
        subText = "숫자를 입력하세요";
        continue;
    }

    if(betting < minBetting || betting > money) {
        subText = `너 잔고 확인해! 최소 ${minBetting}원을 내야하고 ${money}원보다 많이 못내지!`;
        continue;
    }

    choice = prompt("묵,찌,빠 중 하나를 선택하시오");
    while (count <= 20 || money >= 0) {
        switch (choice) {
            case "묵":
                if(pc === "묵"){
                    choice = prompt(`비겼습니다. 가위바위보를 다시 진행해주세요.\n현재 소지금 : ${money}원 | 플레이 횟수 : ${count}`);
                    pc = parseInt(Math.random()*3);
                    if (pc === 0){
                        pc = "묵"
                    }else if( pc === 1){
                        pc = "찌"
                    }else{
                        pc = "빠"
                    }
                }else if(pc === "찌"){
                    choice = prompt(`가위바위보에서 승리하셨습니다. 묵찌빠를 진행하겠습니다.\n당신 : 묵 | pc : ${pc}\n
                    현재 소지금 : ${money} | 플레이 횟수 : ${count}`);
                    switch (choice) {
                        case "묵":
                            if(pc === "묵"){
                                choice = prompt(`승리하셨습니다.`);
                                money = money + betting * 2;
                                count = count + 1;
                            }else if(pc === "찌"){
                                choice = prompt(`승리하셨습니다.`);
                                money = money + betting * 2;
                                count = count + 1;
                            }else{
                                choice = prompt(`패배하셨습니다.`);
                                money = money - betting * 2;
                                count = count + 1;
                            }
                            break;
                        case "찌":
                            if(pc === "묵"){
                                choice = prompt(`패배하셨습니다.`);
                                money = money - betting * 2;
                                count = count + 1;
                            }else if(pc === "찌"){
                                choice = prompt(`승리하셨습니다.`);
                                money = money + betting * 2;
                                count = count + 1;
                            }else{
                                choice = prompt(`승리하셨습니다.`);
                                money = money + betting * 2;
                                count = count + 1;
                            }
                            break;
                        case "빠":
                            if(pc === "믁"){
                                choice = prompt(`승리하셨습니다.`);
                                money = money + betting * 2;
                                count = count + 1;
                            }else if(pc === "찌"){
                                choice = prompt(`패배하셨습니다.`);
                                money = money - betting * 2;
                                count = count + 1;
                            }else{
                                choice = prompt(`승리하셨습니다.`);
                                money = money + betting * 2;
                                count = count + 1;
                            }
                            break;
                    }
                }else{ // pc === "빠"
                    choice = prompt(`가위바위보에서 패배하셨습니다. 묵찌빠를 진행하겠습니다.\n당신 : 묵 | pc : ${pc}\n
                    현재 소지금 : ${money} | 플레이 횟수 : ${count}`);
                    switch (choice) {
                        case "묵":
                            if(pc === "묵"){
                                choice =  prompt(`패배하셨습니다.`);
                                money = money - betting * 2;
                                count = count + 1;
                            }
                            else if(pc === "찌"){
                                choice = prompt(`승리하셨습니다.`);
                                money = money + betting * 2;
                                count = count + 1;
                            }else{
                                choice = prompt(`패배하셨습니다.`);
                                money = money - betting * 2;
                                count = count + 1;
                            }
                            break;
                        case "찌":
                            if(pc === "묵"){
                                choice = prompt(`패배하셨습니다.`);
                                money = money - betting * 2;
                                count = count + 1;
                            }else if(pc === "찌"){
                                choice = prompt(`패배하셨습니다.`);
                                money = money - betting * 2;
                                count = count + 1;
                            }else{
                                choice = prompt(`승리하셨습니다.`);
                                money = money + betting * 2;
                                count = count + 1;
                            }
                            break;
                        case "빠":
                            if(pc === "묵"){
                                choice = prompt(`승리하셨습니다.`);
                                money = money + betting * 2;
                                count = count + 1;
                            }else if(pc === "찌"){
                                choice = prompt(`패배하셨습니다.`);
                                money = money - betting * 2;
                                count = count + 1;
                            }else{
                                choice = prompt(`패배하셨습니다.`);
                                money = money - betting * 2;
                                count = count + 1;
                            }
                            break;
                    }

                }
            break;
            case "찌":
                if(pc === "묵"){
                    choice = prompt(`가위바위보에서 패배하셨습니다. 묵찌빠를 진행하겠습니다.\n당신 : 찌 | pc : ${pc}\n
                    현재 소지금 : ${money} | 플레이 횟수 : ${count}`);
                    switch (choice) {
                        case "묵":
                            if(pc === "묵"){
                                choice =  prompt(`패배하셨습니다.`);
                                money = money - betting * 2;
                                count = count + 1;
                            }
                            else if(pc === "찌"){
                                choice = prompt(`승리하셨습니다.`);
                                money = money + betting * 2;
                                count = count + 1;
                            }else{
                                choice = prompt(`패배하셨습니다.`);
                                money = money - betting * 2;
                                count = count + 1;
                            }
                            break;
                        case "찌":
                            if(pc === "묵"){
                                choice = prompt(`패배하셨습니다.`);
                                money = money - betting * 2;
                                count = count + 1;
                            }else if(pc === "찌"){
                                choice = prompt(`패배하셨습니다.`);
                                money = money - betting * 2;
                                count = count + 1;
                            }else{
                                choice = prompt(`승리하셨습니다.`);
                                money = money + betting * 2;
                                count = count + 1;
                            }
                            break;
                        case "빠":
                            if(pc === "묵"){
                                choice = prompt(`승리하셨습니다.`);
                                money = money + betting * 2;
                                count = count + 1;
                            }else if(pc === "찌"){
                                choice = prompt(`패배하셨습니다.`);
                                money = money - betting * 2;
                                count = count + 1;
                            }else{
                                choice = prompt(`패배하셨습니다.`);
                                money = money - betting * 2;
                                count = count + 1;
                            }
                            break;
                    }
                }else if(pc === "찌"){
                    choice = prompt(`비겼습니다. 가위바위보를 다시 진행해주세요.\n현재 소지금 : ${money}원 | 플레이 횟수 : ${count}`);
                    pc = parseInt(Math.random()*3);
                    if (pc === 0){
                        pc = "묵"
                    }else if( pc === 1){
                        pc = "찌"
                    }else{
                        pc = "빠"
                    }
                }else{ // pc === "빠"
                    choice = prompt(`가위바위보에서 승리하셨습니다. 묵찌빠를 진행하겠습니다.\n당신 : 찌 | pc : ${pc}\n
                    현재 소지금 : ${money} | 플레이 횟수 : ${count}`);
                    switch (choice) {
                        case "묵":
                            if(pc === "묵"){
                                choice = prompt(`승리하셨습니다.`);
                                money = money + betting * 2;
                                count = count + 1;
                            }else if(pc === "찌"){
                                choice = prompt(`승리하셨습니다.`);
                                money = money + betting * 2;
                                count = count + 1;
                            }else{
                                choice = prompt(`패배하셨습니다.`);
                                money = money - betting * 2;
                                count = count + 1;
                            }
                            break;
                        case "찌":
                            if(pc === "묵"){
                                choice = prompt(`패배하셨습니다.`);
                                money = money - betting * 2;
                                count = count + 1;
                            }else if(pc === "찌"){
                                choice = prompt(`승리하셨습니다.`);
                                money = money + betting * 2;
                                count = count + 1;
                            }else{
                                choice = prompt(`승리하셨습니다.`);
                                money = money + betting * 2;
                                count = count + 1;
                            }
                            break;
                        case "빠":
                            if(pc === "믁"){
                                choice = prompt(`승리하셨습니다.`);
                                money = money + betting * 2;
                                count = count + 1;
                            }else if(pc === "찌"){
                                choice = prompt(`패배하셨습니다.`);
                                money = money - betting * 2;
                                count = count + 1;
                            }else{
                                choice = prompt(`승리하셨습니다.`);
                                money = money + betting * 2;
                                count = count + 1;
                            }
                            break;
                        }
                }
                break;
            case "빠":
                if(pc === "묵"){
                    choice = prompt(`가위바위보에서 승리하셨습니다. 묵찌빠를 진행하겠습니다.\n당신 : 빠 | pc : ${pc}\n
                    현재 소지금 : ${money} | 플레이 횟수 : ${count}`);
                    switch (choice) {
                        case "묵":
                            if(pc === "묵"){
                                choice = prompt(`승리하셨습니다.`);
                                money = money + betting * 2;
                                count = count + 1;
                            }else if(pc === "찌"){
                                choice = prompt(`승리하셨습니다.`);
                                money = money + betting * 2;
                                count = count + 1;
                            }else{
                                choice = prompt(`패배하셨습니다.`);
                                money = money - betting * 2;
                                count = count + 1;
                            }
                            break;
                        case "찌":
                            if(pc === "묵"){
                                choice = prompt(`패배하셨습니다.`);
                                money = money - betting * 2;
                                count = count + 1;
                            }else if(pc === "찌"){
                                choice = prompt(`승리하셨습니다.`);
                                money = money + betting * 2;
                                count = count + 1;
                            }else{
                                choice = prompt(`승리하셨습니다.`);
                                money = money + betting * 2;
                                count = count + 1;
                            }
                            break;
                        case "빠":
                            if(pc === "믁"){
                                choice = prompt(`승리하셨습니다.`);
                                money = money + betting * 2;
                                count = count + 1;
                            }else if(pc === "찌"){
                                choice = prompt(`패배하셨습니다.`);
                                money = money - betting * 2;
                                count = count + 1;
                            }else{
                                choice = prompt(`승리하셨습니다.`);
                                money = money + betting * 2;
                                count = count + 1;
                            }
                            break;
                        }
                }else if(pc === "찌"){
                    choice = prompt(`가위바위보에서 패배하셨습니다. 묵찌빠를 진행하겠습니다.\n당신 : 빠 | pc : ${pc}\n
                    현재 소지금 : ${money} | 플레이 횟수 : ${count}`);
                    switch (choice) {
                        case "묵":
                            if(pc === "묵"){
                                choice =  prompt(`패배하셨습니다.`);
                                money = money - betting * 2;
                                count = count + 1;
                            }
                            else if(pc === "찌"){
                                choice = prompt(`승리하셨습니다.`);
                                money = money + betting * 2;
                                count = count + 1;
                            }else{
                                choice = prompt(`패배하셨습니다.`);
                                money = money - betting * 2;
                                count = count + 1;
                            }
                            break;
                        case "찌":
                            if(pc === "묵"){
                                choice = prompt(`패배하셨습니다.`);
                                money = money - betting * 2;
                                count = count + 1;
                            }else if(pc === "찌"){
                                choice = prompt(`패배하셨습니다.`);
                                money = money - betting * 2;
                                count = count + 1;
                            }else{
                                choice = prompt(`승리하셨습니다.`);
                                money = money + betting * 2;
                                count = count + 1;
                            }
                            break;
                        case "빠":
                            if(pc === "묵"){
                                choice = prompt(`승리하셨습니다.`);
                                money = money + betting * 2;
                                count = count + 1;
                            }else if(pc === "찌"){
                                choice = prompt(`패배하셨습니다.`);
                                money = money - betting * 2;
                                count = count + 1;
                            }else{
                                choice = prompt(`패배하셨습니다.`);
                                money = money - betting * 2;
                                count = count + 1;
                            }
                            break;
                    }
                }else{
                    choice = prompt(`비겼습니다. 가위바위보를 다시 진행해주세요.\n현재 소지금 : ${money}원 | 플레이 횟수 : ${count}`);
                    pc = parseInt(Math.random()*3);
                    if (pc === 0){
                        pc = "묵"
                    }else if( pc === 1){
                        pc = "찌"
                    }else{
                        pc = "빠"
                    }
                }
            break;

            default:
                choice = prompt(`묵,찌,빠 중 하나를 선택하시오`);
                break;
        }

        if(count == 20 || money == 0){
            console.log("수고하셨습니다. 더 이상 게임을 진행할 수 없습니다.");
        }
    }
}