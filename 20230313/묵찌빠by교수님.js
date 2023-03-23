// 가위바위보

// 게임의 횟수
let count = 0;
let playerSelect = "";
let comSelect = parseInt(Math.random() * 3); // 0 1 2
// 배열의 인덱스 0 부터 시작하지? 그럼 배열로 랜덤을 구할수 있을거같아/.
let comarr = ["가위", "바위", "보"];
// comarr[0] === "가위" comarr[1] === "바위" comarr[2] === "보"
// comarr[comSelect]  comSelect가 0이면 가위 1이면 바위 2면 보
let money = 50000;
let bet = 0;
let win = "";

while (true) {
    bet = prompt("배팅금액 입력하셈");
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

    switch (playerSelect) {
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

    // 가위바위보 끝났으니까 묵찌빠 하자
    while (true) {
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

        switch (playerSelect) {
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

    count++;
    alert(count + "판째 " + money + "원 남았엉");
    if(count >= 10)
    {
        break;
    }
}