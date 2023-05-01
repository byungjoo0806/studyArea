// 내장모듈 http, fs
const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res)=>{
    // createServer 메소드 : 서버 객체 만들기
    // 콜백함수의 매개변수
    // req : 요청 내용을 가지고 있는 객체 (클라이언트 -> 서버)
    // res : 응답 내용을 가지고 있는 객체 (서버 -> 클라이언트)

    // setHeader : 응답 헤더 내용 설정
    res.setHeader("Content-Type","application/json","charset=utf-8");

    // 클라이언트가 요청한 url을 변수로 받고
    const URL = req.url;

    // 요청한 url이 파비콘이면 그냥 무시
    if(URL === "/favicon.ico"){
        // end 메소드 : 내용을 응답하고 서버를 닫는 메소드
        res.end();
        // 서버가 응답을 안해주면 클라이언트가 계속 기다림
        return;
    }

    // 요청한 URL의 내용에 따라서 다른 응답
    switch (URL) {
        case "/":
            fs.readFile("./views/main.html",(err,data)=>{
                if(err){
                    // 파일을 못불러왔네?
                    // statusCode = 404 : 파일을 불러오지 못했어(파일 없음)
                    res.statusCode = 404;
                    res.end("file does not exist");
                }else{
                    // 파일 잘 불러옴
                    res.statusCode = 200;
                    // 전달하는 컨텐츠의 내용은 html 파일의 내용이야
                    res.setHeader("Content-Type","text/html");
                    res.end(data);
                }
            });
            break;
        case "/list":
            fs.readFile("./views/list.html",(err,data)=>{
                if(err){
                    res.statusCode = 404;
                    res.end("file does not exist");
                }else{
                    res.statusCode = 200;
                    res.setHeader("Content-Type","text/html");
                    res.end(data);
                }
            })
            break;
        case "/add":
            fs.readFile("./views/add.html",(err,data)=>{
                if(err){
                    res.statusCode = 404;
                    res.end("file does not exist");
                }else{
                    res.statusCode = 200;
                    res.setHeader("Content-Type","text/html");
                    res.end(data);
                }
            })
            break;
        default:
            break;
    }
});

// 서버 대기 상태 - 잘 열리는지 확인할때 사용하면 될듯
server.listen(4000,()=>{
    console.log("server open check");
});