const {userSelect,userInsert} = require("../models");
const bcrypt = require("bcrypt");

// 암호화 모듈 추가
// 강력한 암호화를 지원하고 쉽게 사용 가능하다.

// bcrypt 모듈 사용하자
// npm i bcrypt

// bcrypt 형태
// $2a$[cost]$[salt][hash]

// $2a$ : 사용 알고리즘 고정
// [cost] : 키 스트레칭 횟수; 입력한 값이 2의 ^으로 들어간다. ex) 10 -> 키 스트레칭 횟수 == 2^10
//        : 기본적으로 10을 많이 사용한다. 10보다 더 높으면 많이 느려질 수 있다. 10 -> 2^10 = 1024번
// [salt] : 인코딩된 salt값 문자열의 일부분을 알고리즘에서 salt 값으로 사용한다.
// [hash] : 비밀번호와 salt 값을 합하고 해시해서 인코딩된 값

// bcrypt : 보안에 집착하기로 유명한 OpenBSD에서 사용한다.
// 반복횟수를 늘려서 연산속도를 늦출 수 있기 때문에, 연산능력이 증가해도 공격에 대비 할 수 있다.
// 암호화된 문자열 중에서 일부분을 salt 값으로 사용하고 있다.

const createHash = (password)=>{
    return new Promise((resolve,reject)=>{
        // hash 메소드 : 해시값을 만들 수 있다.
        // 첫번째 매개변수 : 해싱을 하고싶은 문자열
        // 두번째 매개변수 : 키 스트레칭 횟수
        // 세번째 매개변수 : 콜백함수
        bcrypt.hash(password,10,(err,data)=>{
            if(err) reject(err);
            resolve(data);
        });
    });
};

const compare = (password,hash)=>{
    return new Promise ((resolve,reject)=>{
        // compare 메소드 : 전달받은 문자열과 해시값을 검증한다.
        // 첫번째 매개변수 : 비밀번호
        // 두번째 매개변수 : 해시
        // 세번째 매개변수 : 콜백함수
        bcrypt.compare(password,hash,(err,same)=>{
            resolve(same);
        });
    });
};

// 회원가입
exports.Signup = async (req,res)=>{
    const {username,password} = req.body;
    try {
        const hash = await createHash(password);
        await userInsert(username,hash);
        res.redirect("/login");
    } catch (error) {
        console.log("unable to add a new user in controller");
        console.log(error);
    };
};

// 로그인
exports.Login = async (req,res)=>{
    const {username,password} = req.body;
    try {
        const data = await userSelect(username);
        if(!data?.username){ // if such username does not exist
            return res.send("please check your username");
        };

        const comparePW = await compare(password,data.password);
        if(!comparePW){ // if password does not match
            return res.send("please check your password");
        };

        res.send("successfully logged in");
    } catch (error) {
        console.log("unable to log in user in controller");
        console.log(error);
    };
};