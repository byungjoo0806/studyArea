let randomPc = parseInt(Math.random()*3);

function randNum(pc){
    if(pc === 0){
        return pc = "묵";
    }else if(pc === 1){
        return pc = "찌";
    }else{
        return pc = "빠";
    }
}

let choice;
let betting;

let count = 0;
let maxCount = 20;

let money = 20000;
let minBetting = 2000;

let subText = "";

function rps_win(player, com){
    switch (player) {
        case "묵":
            if(com === "묵"){
                money = money + betting * 2;
                choice = prompt(`승리하셨습니다\n현재 소지금 : ${money} | 플레이 횟수 : ${count}\n다시 묵,찌,빠 중 하나를 고르세요.`);
            }else if(com === "찌"){
                money = money + betting * 2;
                choice = prompt(`승리하셨습니다\n현재 소지금 : ${money} | 플레이 횟수 : ${count}\n다시 묵,찌,빠 중 하나를 고르세요.`);
            }else{ // com === "빠"
                money = money - betting * 2;
                choice = prompt(`패배하셨습니다\n현재 소지금 : ${money} | 플레이 횟수 : ${count}\n다시 묵,찌,빠 중 하나를 고르세요.`);
            }
            break;
        case "찌":
            if(com === "묵"){
                money = money - betting * 2;
                choice = prompt(`패배하셨습니다\n현재 소지금 : ${money} | 플레이 횟수 : ${count}\n다시 묵,찌,빠 중 하나를 고르세요.`);
            }else if(com === "찌"){
                money = money + betting * 2;
                choice = prompt(`승리하셨습니다\n현재 소지금 : ${money} | 플레이 횟수 : ${count}\n다시 묵,찌,빠 중 하나를 고르세요.`);
            }else{ // com === "빠"
                money = money + betting * 2;
                choice = prompt(`승리하셨습니다\n현재 소지금 : ${money} | 플레이 횟수 : ${count}\n다시 묵,찌,빠 중 하나를 고르세요.`);
            }
            break;
        case "빠":
            if(com === "묵"){
                money = money + betting * 2;
                choice = prompt(`승리하셨습니다\n현재 소지금 : ${money} | 플레이 횟수 : ${count}\n다시 묵,찌,빠 중 하나를 고르세요.`);
            }else if(com === "찌"){
                money = money - betting * 2;
                choice = prompt(`패배하셨습니다\n현재 소지금 : ${money} | 플레이 횟수 : ${count}\n다시 묵,찌,빠 중 하나를 고르세요.`);
            }else{ // com === "빠"
                money = money + betting * 2;
                choice = prompt(`승리하셨습니다\n현재 소지금 : ${money} | 플레이 횟수 : ${count}\n다시 묵,찌,빠 중 하나를 고르세요.`);
            }
            break;
    }
}

function rps_lose(player, com){
    switch (player) {
        case "묵":
            if(com === "묵"){
                money = money - betting * 2;
                choice = prompt(`패배하셨습니다.\n현재 소지금 : ${money} | 플레이 횟수 : ${count}\n다시 묵,찌,빠 중 하나를 고르세요.`);
            }else if(com === "찌"){
                money = money + betting * 2;
                choice = prompt(`승리하셨습니다.\n현재 소지금 : ${money} | 플레이 횟수 : ${count}\n다시 묵,찌,빠 중 하나를 고르세요.`);
            }else{ // com === "빠"
                money = money - betting * 2;
                choice = prompt(`패배하셨습니다.\n현재 소지금 : ${money} | 플레이 횟수 : ${count}\n다시 묵,찌,빠 중 하나를 고르세요.`);
            }
            break;
        case "찌":
            if(com === "묵"){
                money = money - betting * 2;
                choice = prompt(`패배하셨습니다.\n현재 소지금 : ${money} | 플레이 횟수 : ${count}\n다시 묵,찌,빠 중 하나를 고르세요.`);
            }else if(com === "찌"){
                money = money - betting * 2;
                choice = prompt(`패배하셨습니다.\n현재 소지금 : ${money} | 플레이 횟수 : ${count}\n다시 묵,찌,빠 중 하나를 고르세요.`);
            }else{ // com === "빠"
                money = money + betting * 2;
                choice = prompt(`승리하셨습니다.\n현재 소지금 : ${money} | 플레이 횟수 : ${count}\n다시 묵,찌,빠 중 하나를 고르세요.`);
            }
            break;
        case "빠":
            if(com === "묵"){
                money = money + betting * 2;
                choice = prompt(`승리하셨습니다.\n현재 소지금 : ${money} | 플레이 횟수 : ${count}\n다시 묵,찌,빠 중 하나를 고르세요.`);
            }else if(com === "찌"){
                money = money - betting * 2;
                choice = prompt(`패배하셨습니다.\n현재 소지금 : ${money} | 플레이 횟수 : ${count}\n다시 묵,찌,빠 중 하나를 고르세요.`);
            }else{ // com === "빠"
                money = money - betting * 2;
                choice = prompt(`패배하셨습니다.\n현재 소지금 : ${money} | 플레이 횟수 : ${count}\n다시 묵,찌,빠 중 하나를 고르세요.`);
            }
            break;
    }
}

function rps_start(player, pc){
    switch (player) {
        case "묵":
            if(pc === "묵"){
                choice = prompt(`비겼습니다. 가위바위보를 다시 진행해주세요.\n현재 소지금 : ${money + betting} | 플레이 횟수 : ${count}`);
                randomPc = parseInt(Math.random()*3);
                randNum(randomPc);
            }else if(pc === "찌"){
                choice = prompt(`가위바위보에서 승리하셨습니다.\n묵찌빠를 진행하겠습니다.\n당신 : 묵 | PC : ${pc}`);
                rps_win(choice, randNum(randomPc));
            }else{ // pc === "빠"
                choice = prompt(`가위바위보에서 패배하셨습니다.\n묵찌빠를 진행하겠습니다.\n당신 : 묵 | PC : ${pc}`);
                rps_lose(choice, randNum(randomPc));
            }
            break;
        case "찌":
            if(pc === "묵"){
                choice = prompt(`가위바위보에서 패배하셨습니다.\n묵찌빠를 진행하겠습니다.\n당신 : 찌 | PC : ${pc}`);
                rps_lose(choice, randNum(randomPc));
            }else if(pc === "찌"){
                choice = prompt(`비겼습니다. 가위바위보를 다시 진행해주세요.\n현재 소지금 : ${money + betting} | 플레이 횟수 : ${count}`);
                randomPc = parseInt(Math.random()*3);
                randNum(randomPc);
            }else{ // pc === "빠"
                choice = prompt(`가위바위보에서 승리하셨습니다.\n묵찌빠를 진행하겠습니다.\n당신 : 찌 | PC : ${pc}`);
                rps_win(choice, randNum(randomPc));
            }
            break;
        case "빠":
            if(pc === "묵"){
                choice = prompt(`가위바위보에서 승리하셨습니다.\n묵찌빠를 진행하겠습니다.\n당신 : 빠 | PC : ${pc}`);
                rps_win(choice, randNum(randomPc));
            }else if(pc === "찌"){
                choice = prompt(`가위바위보에서 패배하셨습니다.\n묵찌빠를 진행하겠습니다.\n당신 : 빠 | PC : ${pc}`);
                rps_lose(choice, randNum(randomPc));
            }else{ // pc === "빠"
                choice = prompt(`비겼습니다. 가위바위보를 다시 진행해주세요.\n현재 소지금 : ${money + betting} | 플레이 횟수 : ${count}`);
                randomPc = parseInt(Math.random()*3);
                randNum(randomPc);
            }
            break;
    }
}

while(count <= maxCount && money >= minBetting){ // count <= maxCount && money > minBetting
    betting = parseInt(prompt(`${subText}\n판돈 최소 2000원 입니다. 얼마를 걸겠습니까?\n현재 소지금 : ${money} | 플레이 횟수 : ${count}`));

    if(isNaN(betting)){
        subText = "숫자를 입력하세요";
        continue;
    }

    if(betting < minBetting || betting > money){
        subText = `잔고를 확인하세요. 최소 ${minBetting}, 최대 ${money}를 걸 수 있습니다.`;
        continue;
    }

    money = money - betting;
    

    choice = prompt(`가위바위보를 진행합니다. 묵,찌,빠 중 하나를 고르세요.\n현재 소지금 : ${money}`);
    while(count <= 20 || money >= 2000){ // count <= 20 || money >= 2000
        rps_start(choice, randNum(randomPc));
        count++;
    }
    
    if(count >= 20 || money < 2000){
        alert("더 이상 게임을 진행할 수 없습니다. 수고하셨습니다. 게임을 종료합니다.")
        break;
    }

}