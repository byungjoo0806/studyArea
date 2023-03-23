let count = 0;
let playerSelect = "";
let comSelect = parseInt(Math.random() * 3);
let comarr = ["가위", "바위", "보"];
let money = 50000;
let bet = 0;
let win = "";

function rps_start(player){
    switch(player){
        case "가위":
            if(comarr[comSelect] == "바위"){
                alert("내가 졌다..");
                win = "com";
            }else{
                alert("내가 이김");
                win = "player";
            }
            break;
        case "바위":
            if(comarr[comSelect] == "보"){
                alert("내가 졌다..");
                win = "com";
            }else{
                alert("내가 이김");
                win = "player";
            }
            break;
        case "보":
            if(comarr[comSelect] == "가위"){
                alert("내가 졌다..");
                win = "com";
            }else{
                alert("내가 이김");
                win = "player";
            }
            break;
    }
}

function rps(player){
    switch (player) {
        case "가위":
            if(comarr[comSelect] == "바위"){
                alert("com 선공권 가져감");
                win = "com";
            }else{
                alert("내가 선공권 가져감");
                win = "player";
            }
            break;
        case "바위":
            if(comarr[comSelect] == "보"){
                alert("com 선공권 가져감");
                win = "com";
            }else{
                alert("내가 선공권 가져감");
                win = "player";
            }
            break;
        case "보":
            if(comarr[comSelect] == "가위"){
                alert("com 선공권 가져감");
                win = "com";
            }else{
                alert("내가 선공권 가져감");
                win = "player";
            }
            break;
    }
}

while (money >= 2000 || count <= 20) {
    bet = prompt(`배팅금액 입력하셈\n현재 소지금 : ${money} | 플레이 횟수 : ${count}`);
    if(bet < 2000){
        alert("2000원 이상으로 입력하셈")
        continue;
    }else {
        money = money - parseInt(bet);
    }

    playerSelect = prompt("가위 바위 보를 입력해주세요");
    comSelect = parseInt(Math.random() * 3);
    alert(comarr[comSelect]);
   
    if(playerSelect === comarr[comSelect])
    {
        alert("무승부임 ㅎㅎ");
        money = money + parseInt(bet);
        continue;
    }

    rps_start(playerSelect);

    while (money >= 2000 || count <=20) {
        playerSelect = prompt("묵찌빠 가위바위보 입력해주셈")

        comSelect = parseInt(Math.random() * 3);
        alert(comarr[comSelect]);    

        if(playerSelect === comarr[comSelect]){
            if(win === "player")
            {
                alert("묵찌빠 승리")
                money = money + parseInt(bet) * 2;
            }else{
                alert("묵찌빠 패배")
                money = money - parseInt(bet);
            }
            // 묵찌빠 끝남
            break;
        }

        rps(playerSelect);
    }

    count++;
    alert(count + "판째 " + money + "원 남았엉");
    if(count >= 10 || money < 2000){
        break;
    }

}