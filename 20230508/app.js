// 게시판을 만들었었는데
// MVC 패턴으로 만들어보여고 합니다.
// 많이 사용하고, 표준 기본적인 디자인 패턴
// 패턴으로 작업을 하는 이유 : 유지보수와 확장성을 고려해서 개발할 수 있다.
// 협업간의 코드의 표준화도 용이하다.

// mvc 패턴 : model-view-controller

// model : 데이터를 다루는 로직
// 글 선택, 글 작성, 등등의 기능들 어플리케이션의 동작을 관리하는 폴더

// view : 사용자가 볼 수 있는 화면의 데이터를 표시해주는 역할

// controller : model과 view의 사이에서 동작을 제어해주는 역할
// model의 상태를 가지고 view에 반영 시켜주는 것

// 이런 패턴으로 작업을 하면 유지보수와 코드의 표준화를 유지할 수 있다.

// package.json 부터 만들자
// 기본값으로 설정해서 만들어보세요
// ----------------------------------------------------
// npm init -y
// ----------------------------------------------------

// express까지 만들기
// ----------------------------------------------------
// npm i express
// ----------------------------------------------------

// view 엔진으로 ejs 사용할 예정
// ----------------------------------------------------
// npm i ejs
// ----------------------------------------------------

// mysql2 사용할 예정
// ----------------------------------------------------
// npm i mysql2
// ----------------------------------------------------

// 한번에 설치하는 명령어
// ----------------------------------------------------
// npm i express ejs mysql2
// ----------------------------------------------------

// 서버 인스턴스 생성하고 대기 상태로 만들자

const express = require("express");
const postRoute = require("./routes/posts");
const path = require("path");
const app = express();
const PORT = 8080;

// view 엔진으로 보여줄 파일들의 경로 설정
app.set("views", path.join(__dirname, "page"));

// view 엔진으로 ejs 사용하도록 설정
app.set("view engine", "ejs");

// body 객체 사용하기 위해 미들웨어 추가
// 깊은 객체 사용할지 말지 -> extended : false - 사용안함 / extended : true - 사용함
app.use(express.urlencoded({extended : false}));

// 정적인 파일을 사용하기위해 미들웨어 추가
// 정적인 파일을 모아놓은 경로를 public 폴더로 지정
// "express.static" 앞에 매개변수로 경로를 지정하지 않았을 경우에는 기본적으로 / 루트 경로로 지정한다.
app.use(express.static(path.join(__dirname, "public")));

// 이렇게 경로를 지정한 경우에는 ejs 단에 /css/파일명으로 접근을 하면 된다.
// 정적 파일 경로도 나눌수있다.
// app.use("/css",express.static(path.join(__dirname, "public")));

// postRoute 객체에 get 메소드로 / 루트경로를 지정했을때
app.use("/posts",postRoute);
// "/posts" 경로가 앞에 추가되서 라우팅 된다.
// 게시글은 "/posts"가 붙어야 루트경로로 요청이된다.

app.listen(PORT,()=>{
    console.log("server open");
})