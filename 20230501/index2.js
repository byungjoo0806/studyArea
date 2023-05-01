// fs 모듈 : 파일 시스템
// 파일 생성, 삭제, 읽기, 쓰기 등 작업을 할 수 있다.
const fs = require("fs");

// 폴더가 있는지 확인을 하는 메소드
// existsSync 메소드 : 폴더가 있는지 확인을 해주는 메소드
// 반환값 : 폴더가 있으면 true, 폴더가 없으면 false
// 동기적으로 작동한다. Sync 구문이 있는 메소드는 동기적으로 동작한다.
 // 매개변수 : 폴더의 이름
let folder = fs.existsSync("./Test");
console.log(folder);

// 폴더를 생성해보자
// mkdir 메소드 : 폴더 생성
// 첫번째 매개변수 : 생성할 폴더의 경로
// 두번째 매개변수 : 폴더 생성시 호출할 콜백 함수
// 콜백함수의 첫번째 매개변수 : 에러 내용 객체
if(!folder){
    // mkdir : 비동기적으로 실행되는 메소드
    fs.mkdir("./Test",(err)=>{
        if(err){
            console.log("error")
            console.log(err);
            return;
        }else{
            console.log("Test folder created");
        }
    });

    // mkdirSync : 동기적으로 실행되는 메소드
    // fs.mkdirSync("./Test"); 
    // console.log("folder created");
}

// 폴더를 만들었으니 폴더 안에 파일을 추가해보자
// writeFile : 파일쓰기; 파일에 데이터를 작성할 수 있다.
// 첫번째 매개변수 : 파일의 경로(이름)
// 두번째 매겨변수 : 파일에 작성할 내용
// 세번째 매개변수 : 콜백 함수
// 콜백함수의 매개변수 : 에러 내용 객체

// writeFile : 비동기적으로 실행
// fs.writeFile("./Test/temp.txt","Hello nodejs",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("temp file created");
//     }
// })
// writeFileSync : 동기적으로 실행
fs.writeFileSync("./Test/temp.txt","Hello nodejs");
console.log("temp file created");

// 폴더도 만들고, 파일도 만들고, 파일의 내용도 작성해 봤으니까
// 만든 파일의 내용을 읽어와보자
// readFile : 파일을 읽어온다
// 첫번째 매개변수 : 파일의 경로(이름)
// 두번째 매개변수 : 인코딩의 내용; 인코딩 내용을 작성을 안하면 null -> buffer 객체로 읽어온다.
// 세번째 매개변수 : 콜백 함수
// 콜백함수의 첫번째 매개변수 : 에러 내용 객체
// 콜백함수의 두번째 매개변수 : 읽어온 파일의 내용
// readFIle : 비동기적으로 실행
// fs.readFile("./Test/temp.txt","utf-8",(err,data)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log(data);
//     }
// })

// readFileSync : 동기적으로 실행
// 메소드의 반환값으로 파일에서 읽어온 data가 나온다.
let data = fs.readFileSync("./Test/temp.txt","utf-8");
// 위 동작이 끝날때까지 기다린다.
console.log(data);

// 폴더를 제거 해보자
// rm 메소드 : 폴더 삭제
// 첫번째 매개변수 : 삭제할 폴더의 경로(이름)
// 두번째 매개변수 : 옵션 객체 - {recursive : true}
// recursive 키의 값에 따라 true 혹은 false
// 폴더 안에 내용이 있는지, 그 내용까지 제거할 것인지 - true : 제거, false : 제거 안함
// 세번째 매개변수 : 콜백함수
// 콜백함수의 매개변수 : 에러 내용 객체
fs.rm("./Test",{recursive : true},(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Test folder removed");
    }
})