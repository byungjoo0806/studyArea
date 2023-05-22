// 시퀄라이즈 ORM (Object Relational Mapper : 객체 관계 매핑)
// 객체와 데이터베이스를 ORM 라이브러리가 매핑을 시켜주어서 자바스크립트 구문으로 SQL을 제어할 수 있다.
// 자바스크립트로만 sql 작업을 할 수 있도록 도와주는 라이브러리

// 프로젝트 시작

// 설치할 모듈
// express ejs sequelize mysql2 dotenv

const express = require("express");
const PORT = 5019;
const path = require("path");
const dot = require("dotenv").config();
const {sequelize,User,Post} = require("./models");

const app = express();

app.set("views",path.join(__dirname,"page"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended : false}));

// 시퀄라이즈 구성 연결 매핑
// sync 함수 : 데이터베이스를 동기화 시켜주는 메소드
// true : 테이블 초기화
// false : 테이블 초기화 안함
sequelize.sync({focus : true})
.then(()=>{
    // 연결 성공
    console.log("mysql database connected");
}).catch((err)=>{
    // 연결 실패
    console.log(err);
});

app.get("/",(req,res)=>{
    res.render("create");
});

app.post("/create",(req,res)=>{
    const {name,age,msg} = req.body;
    // create 메소드 : INSERT 문을 실행시켜주는 메소드
    // 매개변수로 column의 내용을 객체로 만들어서 전달
    User.create({
        // column : name, value : name
        name : name,
        // column : age, value : age
        age : age,
        // column : msg, value : msg
        msg : msg
    });
    res.send("values added");
});

app.get("/main",(req,res)=>{
    // 유저 전체 조회
    // findAll 메소드 : 검색 메소드
    // 매개변수로 검색 조건을 객체로 추가할 수 있다.
    User.findAll({})
    .then((e)=>{
        // 성공시
        res.render("main",{data : e});
    }).catch((e)=>{
        // 실패시
        res.send("failed to load the user list");
    });
})

app.post("/create_post",(req,res)=>{
    const {name,value} = req.body;
    console.log(name,value);
    // findOne 메소드 : 한개의 값을 조회
    User.findOne({
        // 검색 조건 추가
        where : {name : name}
    }).then((e)=>{
        Post.create({
            msg : value,
            user_id : e.id
        })
    })
    res.send();
})

app.get("/view/:name",(req,res)=>{
    // 유저를 조회하고 가지고 있는 글을 볼거임
    User.findOne({
        // 해당 이름의 유저를 조회하면서
        where : {name : req.params.name},
        // --------------------------------------------------
        // raw 속성 - 관계형으로 불러온 값을 다 풀어서 볼수가 있는데
        // raw : true,
        // --------------------------------------------------
        // 해당 유저의 id로 참조된 user_id가 있는 post 테이블의 값을 같이 조회한다.
        include : [
            // 조회 할 모델 - Post 모델
            {model : Post}
        ]
    }).then((e)=>{
        // console.log(e);
        e.dataValues.Posts = e.dataValues.Posts.map((i) => i.dataValues);
        const Posts = e.dataValues;
        console.log(e.dataValues);
        res.render("view",{data : Posts});
    })
})

app.listen(PORT,()=>{
    console.log("server open");
});