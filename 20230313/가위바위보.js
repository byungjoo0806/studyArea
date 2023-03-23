let choice = prompt("가위,바위,보 중 하나를 선택하시오");
let pc = parseInt(Math.random()*3);
let play = true;
let game = true;

if (pc === 0) {
    pc = "가위"
}else if(pc === 1){
    pc = "바위"
}else{
    pc = "보"
}

while (game) { 
    while (play) {
        switch (choice) {
            case "가위":
                if(pc === "가위"){
                    console.log(choice," 대 ",pc," = 무승부");
                    choice = prompt("무승부입니다. 재경기합니다.");
                    pc = parseInt(Math.random()*3);
                    if (pc === 0) {
                        pc = "가위"
                    }else if(pc === 1){
                        pc = "바위"
                    }else{
                        pc = "보"
                    }
                }else if(pc === "바위"){
                    console.log(choice," 대 ",pc," = 패배");
                    play = false;
                }else{
                    console.log(choice," 대 ",pc," = 승리");
                    play = false;
                }
                break;
            case "바위":
                if(pc === "가위"){
                    console.log(choice," 대 ",pc," = 승리");
                    play = false;
                }else if(pc === "바위"){
                    console.log(choice," 대 ",pc," = 무승부");
                    choice = prompt("무승부입니다. 재경기합니다.");
                    pc = parseInt(Math.random()*3);
                    if (pc === 0) {
                        pc = "가위"
                    }else if(pc === 1){
                        pc = "바위"
                    }else{
                        pc = "보"
                    }
                }else{
                    console.log(choice," 대 ",pc," = 패배");
                    play = false;
                }
                break;
            case "보":
                if(pc === "가위"){
                    console.log(choice," 대 ",pc," = 패배");
                    play = false;
                }else if(pc === "바위"){
                    console.log(choice," 대 ",pc," = 승리");
                    play = false;
                }else{
                    console.log(choice," 대 ",pc," = 무승부");
                    choice = prompt("무승부입니다. 재경기합니다.");
                    pc = parseInt(Math.random()*3);
                    if (pc === 0) {
                        pc = "가위"
                    }else if(pc === 1){
                        pc = "바위"
                    }else{
                        pc = "보"
                    }
                }
                break;
            default:
                break;
        }
    }
    game = false;
}
