// 로그인 회원가입을 만들 수 있다.

// crypto - 암호화 내장모듈

// 비밀번호를 만들때 단방향 암호화를 사용하는데
// 암호화 - 단방향, 양방향
// 단방향 암호화는 복호화가 불가능하다. (원본 값을 알 수 없다. 비밀번호를 만들때 사용하고 원본의 값을 알아낼수가 없기에 안전하다.)
// 양방향 암호화는 복호화가 가능하다. (데이터를 전송할때 암호화해서 안전하게 전달할때 사용)

// 우리가 사용하는 네이버 같은 사이트들이 비밀번호 찾기를 시도하면
// 비밀번호를 알려주거나 메일로 전송 해주지 않고, 비밀번호 변경을 시켜준다.
// 원본 비밀번호를 알 수가 없기 때문에

// 복호화는 암호문을 원본으로 변경 해주는것.

// 단방향 암호화는 원래 값을 알 수 없게 복잡한 알고리즘으로 암호화 시켜주기 때문에
// 원본 값을 복호화 할 수가 없다.

// crypto 모듈을 사용해서 암호화를 만들어보자
// 내장모듈이고 기본적인 암호화 알고리즘을 기능을 제공해준다.

const crypto = require("crypto");

// 임의의 비밀번호를 변수에 담아놓자
const pw = "admin1234";

// 해시화 : 알고리즘을 통해 데이터를 고정된 크기의 고유한 값으로 바꿔주는것.
// 해시 객체 생성
let hashA = crypto.createHash("sha256");
// 사용할 알고리즘은 sha256 암호 알고리즘 사용
// 데이터를 256비트의 고정 크기 해시 값으로 변환해주는 알고리즘
// 원본 데이터의 길이에 상관이 없이 항상 256비트(32바이트)의 해시 값을 생성한다.
// 64자리의 16진수로 표현
// 16진수 - 컴퓨터의 포토샵, 색상 코드, 암호화 등에서 사용한다.

// 16진수 구하기

// 10진수 - 1 2 3 4 5 6 7 8 9 10

// 16진수 - 1 2 3 4 5 6 7 8 9 A B C D E F 10

// 10진수를 16으로 나누고 나머지를 16진수로 표현
// 나눈 몫을 0이 될때까지 반복

// 10진수 30
// 30 / 16 == 몫 1, 나머지 14
// 16진수 1 -> 1
// 16진수 14 -> E
// 16진수 1E

// 비밀번호를 해시객체에 넣어주자
let hashing = hashA.update(pw); // crypto.createHash("sha256").update - 매개변수로 암호화 시킬 문자열

console.log(hashing);

// 객체를 확인해보면 false 값이 있는데, 아직 인코딩이 완료되지 않은 상태
// digest 메소드를 사용해서 해시값을 반환 - 매개변수로 반환받을 인코딩 방식 지정
let hashString = hashing.digest("hex"); // hex - 16진수 인코딩
// 해시값을 16진수의 문자열로 반환

console.log(hashString);

// 같은 문자열을 해시화를 하면 일정한 값이 나오는데
// salt 값을 사용해서 예측이 불가한 데이터를 만들어주자
// 랜덤한 값을 우리가 만들어서 원본의 데이터에 추가해서 암호화 시켜주는것.

// salt 값은 지정을 했으면 .env 파일에 넣어두면 될듯?
// 그러나 지정할 일은 없을듯

// salt 값을 만들어보자
// 난수 생성 메소드를 사용해서 salt 값을 만들어보자

// randomBytes 메소드
// 첫번째 매개변수 - 만들고 싶은 바이트 사이즈
// 두번째 매개변수 - 콜백함수
crypto.randomBytes(32,(err,result)=>{
    // 32bit 길이의 랜덤한 byte가 생성
    if(err){
        console.log(err);
    }else{
        // toString 메소드 - 결과값을 문자열로 변경; 매개변수 - 16진수
        console.log(result.toString("hex"));
    }
});

// 이렇게 난수를 만들어서 회원가입할때 계정마다 salt 값을 주고 사용하는 방법도 있다. (salt 값을데이터 베이스에 같이 저장)
// 모든 패스워드가 고유의 salt 값을 가지고 있게 만들 수 있다.

// salt 값을 만들어주는 함수
const createSalt = ()=>{
    // 암호화에 처리시간이 좀 걸리기 때문에 promise로 비동기 처리
    return new Promise((resolve,reject)=>{ // Promise 객체 - 성공했을때 resolve, 실패했을때 reject
        crypto.randomBytes(64,(err,result)=>{  // 랜덤 바이트 길이는 64바이트
            // 실패시 err 객체 reject 메소드로 반환
            if(err) reject(err);
            // 성공하면 resolve 메소드로 결과를 16진수로 변환해서 반환
            resolve(result.toString("hex")) // toString("hex") - 16진수
        }); 
    });
};

// salt 값도 사용을 하고
// 키 스트레칭 기법
// 키 스트레칭 기법은 해시함수를 여러번 반복시켜서 시간을 일부러 오래 걸리게 만드는 기법
// 해킹을 시도할때 비밀번호들을 대입해서 해킹을 시도하는 경우, 암호화 작업을 일부러 오래 걸리게 만들어서 해킹을 어렵게 만든다.
// 무차별로 비밀번호를 대입하는 공격을 힘들게 만든다.
// 해킹법 짜증나게 하자

// pbkdf2 (password-based key derivation function 2) 메소드를 사용해서 키 스트레칭 기법 사용

const createHash = (password,salt)=>{
    return new Promise((resolve,reject)=>{
        crypto.pbkdf2(
            password, // 해싱할 값을 문자열로 전달
            salt, // salt 값
            165165, // 키 스트레칭 반복 횟수
            64, // 해시값의 바이트 - 64바이트
            "sha256", // 해시화 알고리즘
            (err,hash)=>{
                if(err) reject(err);
                resolve(hash.toString("hex"));
            }
        );
    });
};

const test = async ()=>{
    const salt = await createSalt();
    const hash = await createHash(pw,salt);
    console.log(hash);
};
test();

// 간단하게 회원강비 만들어보자
// 이번 방식은 각각의 회원마다 고유의 salt 값을 가지게 만들자

// 프로젝트 시작
// 설치 모듈 - express ejs mysql2

const express = require("express");
const PORT = 3040;
const path = require("path");

const mysql2 = require("mysql2/promise");

const app = express();

app.set("views",path.join(__dirname,"page"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended : false}));

const mysql = mysql2.createPool({
    user : "root",
    password : "",
    database : "20230516",
    multipleStatements : true
});

// 테이블 초기화
const usersInit = async ()=>{
    try {
        await mysql.query("SELECT * FROM users");
    } catch (error) {
        await mysql.query("CREATE TABLE users (user_key INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(50), password VARCHAR(128), salt VARCHAR(128))");
    }
}
// usersInit();

app.get("/",(req,res)=>{
    res.render("join");
});

app.get("/login",(req,res)=>{
    res.render("login");
});

app.post("/join", async (req,res)=>{
    const {username,password} = req.body;
    const salt = await createSalt();
    const hash = await createHash(password,salt);
    await mysql.query("INSERT INTO users (username,password,salt) VALUES (?,?,?)",[username,hash,salt]);
    res.redirect("/login");
});

app.post("/login", async (req,res)=>{
    const {username,password} = req.body;
    const [result] = await mysql.query("SELECT * FROM users WHERE username = ?",[username]);
    if(result[0]?.salt){
        const salt = result[0].salt;
        const hash = await createHash(password,salt);
        if(hash == result[0].password){
            res.send("successfully logged in");
        }else{
            res.send("please check your password");
        };
    }else{
        res.send("please check your username");
    };
});

app.listen(PORT,()=>{
    console.log("server open");
});