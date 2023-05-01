// HTTP 프로토콜
// 우리가 브라우저에서 url을 입력하고 엔터를 누르면

// HTTP 요청을 보내게 되는데
// TCP 3-way handshaking 과정을 거친다.

// 3-way handshaking : 클라이언트와 서버가 데이터 통신을 하기전에 통신 준비가 되었다는 것을 확인하는 것.

// 클라이언트가 서버에 연결 요청을 하고
// 서버는 연결 요청을 받아서 클라이언트에게 연결 요청 수락을 응답한다.
// 클라이언트는 서버로부터 수락 확인을 보내면 연결이 된다.
// SYN(synchronize sequence numbder), ACK(acknowledgement)

// 클라이언트가 SYN을 서버에 요청하고 - SYN : 연결 요청
// 서버는 SYN + ACK 를 클라이언트에 연결 요청 수락을 응답한다. - SYN + ACK : 연결 요청 수락
// 클라이언트가 서버로 ACK를 보내면 연결이 된다. - ACK : 연결 요청 확인

// 서버에 요청과 응답을 한다.
// 클라이언트가 요청을 보내면 서버가 응답을 하고

// 4-way handshake : TCP 연결을 종료 수행하는 것.
// 연결을 종료하기 위해 클라이언트와 서버의 상태를 서로 확인한다.
// 서버가 FIN 메시지를 받고
// 클라이언트는 데이터가 없다는것을 의미하는 메시지인 ACK를 보내고
// 서버는 데이터가 더 없으면 자신이 보내지지 않은 데이터를 확인하고 전송한 후 클라이언트에게 FIN 메시지 전송
// 클라이언트는 서버가 더이상 전송할 데이터가 없다는 것을 확인하는 ACK 메시지를 보낸다.
// 클라이언트와 서버의 연결이 종료되는 것.

// HTTP 프로토콜을 사용해서
// 네트워크 통신을 수행하는 모듈을 가지고 웹서버 개발을 해보자

// 요청과 응답을 처리하는 기능을 제공하는 모듈
// 내장모듈 : http 모듈
const http = require("http");

const server = http.createServer((req,res)=>{
    // createServer 메소드 : 서버 객체를 만들어준다.
    // 콜백함수의 매개변수로는 req,res를 전달해준다

    // 첫번째 매개변수
    // req(request) : http 요청의 정보 URL, 메소드 (GET, POST 등) 요청 헤더 정보, 바디의 내용이 있다.

    // 두번째 매개변수
    // res(response) : http 응담의 정보를 가지고있는 객체 상태코드는 statusCode 응답 헤더, 바디의 내용이 있다.
    // statusCode == 200 : 성공
    res.statusCode = 200;
    // setHeader : 응답 헤더의 내용을 설정할 수 있다.
    res.setHeader("Content-Type","application/json","charset=utf-8");
    // Content-Type : 응답의 내용
    // application/json : 응답의 내용을 JSON 형식의 데이터로 전송
    // charset=utf-8 : 응답의 문자를 인코딩 utf-8로 설정

    // 요청한 URL은 뭐지?
    const URL = req.url;

    // / : main 페이지의 경로
    // /list : 글의 목록 페이지 혹은 게시판
    // /add : 글을 추가하는 페이지

    // 내용을 응답하고 종료하는 메소드
    // 응답하는 내용은 매개변수로 전달하면 된다.

    // 브라우저에 요청을 보내면 자동으로 웹사이트의 아이콘인 파비콘 URL이 자동으로 요청된다.
    // 무시 처리를 해주자
    if(URL === "/favicon.ico"){
        res.end();
        return;
    }
    // res.end("here is your response"); // 클라이언트가 웹서버에서 보는 내용

    switch (URL) {
        case "/":
            res.end("main page");
            break;
        case "/list":
            res.end("list page");
            break;
        case "/add":
            res.end("add page");
            break;
        default:
            break;
    }
    console.log(URL);
})

// listen 메소드 : 첫번째 매개변수 - PORT
// PORT를 전달해서 서버를 대기상태로 만들어 놓자
server.listen(4000, ()=>{
    console.log("server open");
})
