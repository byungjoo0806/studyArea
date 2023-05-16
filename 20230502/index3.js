// express와 템플릿 엔진을 같이 사용해서
// 게시판 만들어보자.
// ejs : 템플릿 엔진

// 템플릿 엔진은 서버측에서 html을 만들어서 브라우저에 보여주는 것.
// 서버사이드 렌더링

// 나중에는 분리할 예정
// html과 동일하고 js를 같이 추가해서 동적인 웹페이지를 만들수 있는 템플릿 엔진

// express에서 ejs를 기본적으로 지원한다.
// 서버사이드 렌더링 : 서버측에서 html 템플릿을 그려주는 방법
// 장점 : 페이지 로딩이 빠르다 / 검색 기능 활용

// body-parser 모듈 : express 모듈의 미들웨어
// 요청으로 받은 body의 내용을 req(요청) 객체 안에 있는 body 객체를 담아준다.
// req.body 로 호출이 가능해진다.
// 미들웨어 : 쉽게 요청과 응담을 하는 사이/중간에 동작하는 함수

// 사용할 모듈 : express, ejs, mysql2, body-parser, path

// ejs 설치 명령어
// ----------------------------------------------------
// npm i ejs
// ----------------------------------------------------

// mysql2 설치 명령어
// ----------------------------------------------------
// npm i mysql2
// ----------------------------------------------------

// 이 두가지를 둘다 설치 한번에 명령 하는법
// ----------------------------------------------------
// npm i ejs mysql2
// ----------------------------------------------------

// 사용할 모듈 불러오기
const express = require("express");
const mysql2 = require("mysql2");
const ejs = require("ejs");
const path = require("path");
const bodyParser = require("body-parser");

// 서버 인스턴스 생성
const app = express();

// express에 set 메소드와 use 메소드가 있다.
// set 메소드 : express의 view 등등 설정을 할 수 있다;
// 그려줄 파일이 있는 폴더의 경로 같은 설정을 할 수 있다.

// use 메소드 : 요청 또는 응답시 실행되는 미들웨어를 추가 할 수 있다.

// express의 view 속성을 경로로 지정
// express view 로 사용할 파일들의 경로
// express 도 서버사이드 렌더링을 지원해주기 때문에 view 엔진을 사용한다.
// view 엔진 : html 등의 템플릿 파일을 보여주는 역할을 하는데
app.set("views",path.join(__dirname,"views"));

// view 엔진을 ejs로 사용하겠다고 설정
// ejs 설치 필수
// view 엔진으로 ejs를 사용하겠다고 설정을 했기 때문에, 파일 확장자를 ejs로 변경해주자
app.set("view engine","ejs");

app.use(
    bodyParser.urlencoded({ // urlencoded : from 데이터를 파싱을 도와주는 미들웨어
        extended : false,
    })
    // extended의 옵션
    // true : 쿼리 스트링 모듈의 기능이 좀 더 확장된 qs 모듈을 사용한다. (깊은 객체를 지원)
    // false : express에 기본으로 내장된 쿼리 스트링 모듈을 사용한다. (깊은 객체 지원 X)
    // 권장사항은 false
    // 복잡한 데이터를 다루게 되면 true를 쓸수도 있겠는데, 웬만하면 없으니 false로 고정이라 생각하자.
)

// express 버전이 올라가면서 bodyParser를 지원해준다.
app.use(express.urlencoded({extended : false}));

// mysql 연결부터 하자
const _mysql = mysql2.createConnection({
    user : "root",
    password : "",
    database : "test6"
})

_mysql.query("select * FROM products",(err,res)=>{
    if(err){
        console.log("table not found");
        // 테이블이 없으니 만들어보자
        const sql = "create TABLE products (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20), number VARCHAR(20), series VARCHAR(20))";
        _mysql.query(sql);
    }else{
        console.log(res);
    }
});

app.get("/",(req,res)=>{
    // 루트 경로로 요청시 처리
    // 메인 페이지
    _mysql.query("select * FROM products",(err,result)=>{
        // render 메소드 : view 엔진이 문자열을 html로 브라우저에 반환해서 렌더링 해준다
        // 첫번째 매개변수 : view로 설정한 폴더 경로에 파일의 이름을 문자열로 전달
        // 두번째 매개변수 : 템플릿 엔진에서 사용할 데이터
        res.render("main",{data : result});
    });
})

// 추가하는 페이지로 가자
// 리스트를 추가하는 페이지

// get 방식의 요청인지
app.get("/insert",(req,res)=>{
    res.render("insert");
})

// post 방식의 요청인지
app.post("/insert",(req,res)=>{
    // req (요청)의 내용이 들어있다 했는데 혹시..?
    const data = req.body;
    // body 객체 안에 form에서 요청으로 보낸 데이터가 객체로 들어있따.
    // 객체 안에 있는 키값들은 
    // input들의 name으로 정해준 키로 값이 들어있다.
    // 우리가 요청한 데이터의 내용을 데이터 베이스에 추가하자.
    const sql = "insert INTO products (name,number,series) VALUES (?,?,?)";
    console.log(data);
    // query 메소드
    // 두번째 매개변수 : 배열의 형태로 value를 전달할 수 있다.
    _mysql.query(sql, [data.name,data.number,data.series], ()=>{
        // redirect 메소드 : 매개변수로 전달한 URL로 페이지를 전환 시킨다 (경로로 이동시킨다)
        res.redirect("/");
    });
})

// 삭제를 해보자
app.get("/delete/:id",(req,res)=>{
    // :id - url 요청에서 파라메터(parameter) 값이라고 한다.
    // 1이라는 값을 가져올수가 있다.

    // ex) http://localhost:4000/delete/1 -> {id : 1} 이렇게 요청 객체에 들어간다.; req.params.id
    // req.params.id === 1

    const sql = "delete FROM products WHERE id=?";
    _mysql.query(sql,[req.params.id],()=>{
        res.redirect("/");
    })
})

app.listen(4000,()=>{
    console.log("server open");
})