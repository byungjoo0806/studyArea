// 우리가 만들어볼거 : 없다운 게임
// 숫자 맞추기

// 1. 플레이어가 있고, 컴퓨터가 있고
// 2. 플레이어는 선택을 할 수 있게하고, 컴퓨터는 랜덤값
// 3. 플레이어가 선택할 수 있는 제어문
// 4. 게임의 종료 시점을 정해야겠다.

// 생각하는 힘이 고민할수록 길러집니다.


let playerSelect;
// 1~100의 랜덤숫자
let comSelect = parseInt(Math.random()*99 + 1);

let count = 0; // 시도한 횟수

let max = 100; // 플레이어가 선택이 가능한 최대의 숫자
let min = 0; // 플레이어가 선택이 가능한 최소의 숫자
// 50
// 3 : 숫자가 작다 -> 1,2 이후에 입력하지마

let subText = ""; // 컴퓨터가 알려줄 문구
let maxCount = parseInt(prompt("게임 몇 번 할래?")); // 게임 횟수

// alert(comSelect); // 컴퓨터가 정한 숫자 미리보기
// 반복되어야 하니까
while(playerSelect !== comSelect && count < maxCount){
    // ES6에서 문자열을 사용할때 편하게 사용할 수 있는 기법
    // 템플릿 리터럴 : 문자를 다룰때 줄바꿈 같은걸 편하게 사용할 수 있게 해준다.
    // ` : 백틱
    // "안뇽"+playerSelect
    // `${변수}문자열`
    // \n : 문자를 작성할때 줄내림을 해준다.
    playerSelect = prompt(`${subText}\n숫자를 입력하세요 \n 최소 : ${min} | 최대 : ${max} | 남은 횟수 : ${maxCount - count}`);

    // 숫자로 변환
    // playerSelect = parseInt(playerSelect);
    // 입력된 값이 숫자인지 확인 : 문자 쓰면 어뜨캄?
    // isNaN : 숫자가 아닌 값을 입력했는지 확인해준다.
    if(isNaN(playerSelect)){
        subText = "숫자 입력하셈~";
        // 다시 게임을 시작 해야하는데? 밑에 작성된 코드를 읽지않게 할 수 없을까?
        continue; // 다시 시작
        // continue 구문부터 밑으로 읽지않고 다시 반복문 시작점으로 돌아간다.
    }

    // 최소와 최대 사이의 값인지 확인; 범위의 값이 맞는지
    if(min >= playerSelect || max <= playerSelect){
        subText = `너 입력값 확인해 최소 : ${min} | 최대 : ${max}`
        continue; // 다시 입력하셈~
    }

    // 게임의 로직 시작

    if(playerSelect > comSelect){
        // max 최대값을 다시 겹치지 않게 입력해준다.
        max = playerSelect;
        subText = "다운!";
    }else if(playerSelect < comSelect){
        // min 최소값을 다시 겹치지 않게 입력해준다.
        min = playerSelect;
        subText = "업!";
    }else{
        count = count + 1;
        console.log(`${count}번 시도해서 너 맞췄어 축하~`);
        // 게임 끝났음
        break;
    }
    // 게임 횟수 증가해야함
    count++;
    if(count >= maxCount){
        // 너 실패함. 게임 오버
        console.log("게임 오버!! 메롱~")
    }
}

// 과제
// 1. 가위바위보 게임을 20판 게임 시작하기전에 돈 입력해서 거는데 2000원 이상으로 걸수있게 다시입력 -> 배팅금액 20000원들고 시작
// 2. 가위바위보 이기면 묵찌빠 -> 이기면 배팅한 금액의 *2로 판돈 줍니다.
// 지면 -*2 배팅금액
// 종료조건 20판 다 끝나면 OR 돈 다 잃었을때
// 소지금이랑 몇판했는지 알려주세용~