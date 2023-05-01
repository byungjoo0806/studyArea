// mysql에 연결 해볼거임

// 외부모듈 설치 받아서 사용할것
// npm 모듈을 설치받는 방법

// 이번에 설치받아서 사용할 모듈은 mysql2 모듈을 설치받아서 사용할 예정

// mysql2 설치 명령어
// ------------------------------------------------
// npm install mysql2
// npm i mysql2
// ------------------------------------------------

// npm i mysql2 를 설치한지 다른 사용자는 모를텐데
// 프로젝트가 실행이 안될텐데...
// 우리는 일일이 npm i mysql2 이런식으로 설치를 받을 필요가 없이
// package.json에 있는 dependecies 내용의 모듈을 다 설치받는법
// ------------------------------------------------
// npm install
// npm i
// ------------------------------------------------

// "dependencies": {
//     "mysql2": "^3.2.4"
// }
// ^3.2.4 - 이거 버전인건 알겠는데 왜 웃지?
// ^ : 이게 왜 있음?
// 이 버전이 없으면 다른 버전을 찾아서 설치받는다는 내용

// 실제 설치된 버전은 lock.json 파일에 있음

// mysql 모듈도 있어요. 근데 왜 mysql2를 쓰냐?
// 둘의 차이점 : 
// mysql 모듈 : 콜백 기반으로 promise 기반으로 사용하기가 힘듬..
// 그래서 mysql2 모듈을 사용
// mysql2 모듈 : promise 기반을 지원하기 때문에 사용하기 편하다.
// 공식문서에서도 mysql2를 사용하라고 권장을 한다.

// mysql2 모듈 가져오기
const mysql = require("mysql2");

// mysql을 연결해보자
// createConnection 메소드로 : mysql을 연결시켜준다.
// 매개변수 : 연결하는 mysql의 옵션을 전달해줘야한다.
// host : 연결할 호스트를 나타냄; ex) root
// port : 연결한 포트; 기본적으로 3306 포트로 열림
// user : 사용자의 이름
// password : 사용자 비밀번호
// database : 어떤 데이터베이스를 연결 시킬건지

const temp = mysql.createConnection({
    user : "root",
    password : "DIGI0408as^^",
    database : "test6",
});
// temp에 연결한 mysql 객체를 반환
// 이 객체 안에는 쿼리문을 작성해서 데이터베이스 쿼리 작업을 시켜줄 수 있는 메소드가 있다.

// query 메소드 : 쿼리문을 매개변수로 전달해서 데이터베이스의 쿼리 작업을 시킬 수 있다.
// "select * FROM products" : products 이름을 가진 테이블이 있는지 확인하고, 없으면 테이블을 만들고, 있으면 값을 가져온다.
// 콜백함수의 첫번째 매개변수 : 
// 콜백함수의 두번째 매개변수 : 
temp.query("select * FROM products",(err,res)=>{
    if(err){
        // 테이블이 없다
        console.log("table not found");
        const sql = "CREATE TABLE products(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20), number VARCHAR(20),series VARCHAR(20))"
        // 쿼리문 내용
        // products 이름의 테이블을 만드는데
        // id 컬럼 :
        // INT : 숫자형
        // AUTO_INCREMENT : 자동으로 숫자 값이 증가할 수 있도록 설정 (주로 PRIMARY KEY에 사용한다.)
        // PRIMARY KEY : 고유한 값을 설정한다. (테이블에는 고유한 값을 가지고 있는 컬럼이 하나 무조건 필요하다.)
        // name, number, series : 
        // VARCHAR() : 문자열; 괄호 안에는 최대 글자 수를 정해줄수 있다. (20자 까지 허용 시켜놓았다)
        temp.query(sql);
        console.log("table not found, so created a new one");
    }else{
        console.log(res);
        console.log("table exists");
    }
});