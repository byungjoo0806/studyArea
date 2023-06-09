// mysql 설치를 미리 해둘게요~
// -----------------------------------
// brew install mysql
// -----------------------------------

// workbench 편하게 gui로 조작해서 추가가 가능하다.

// cli 로 작성을 해보고 넘어가자

// mysql 접속
// mysql -u root -p : 비밀번호 입력하고 접속
// 환경변수가 등록이 안되어있으면 위 명령어 사용 불가
// c드라이브 -> 프로그램 파일 -> mysql -> mysql server -> bin
// 이 경로까지 가야하는 이유 : exe 파일이 위 경로에 있기 때문

// 환경변수 설정을 해보자
// mysql 을 path에 추가하기
// 그러면 어디서든 mysql을 접속 할 수 있다.

// 쿼리문은 데이터베이스에 추가,수정,삭제를 할 수 있는 명령어
// 쿼리문을 사용하면 데이터베이스에서 원하는 데이터를 가져오기 위해서 사용하는 명령어다.

// 현재 있는 데이터 베이스들을 확인하는 쿼리문
// -----------------------------------
// show DATABASES;
// -----------------------------------

// 데이터 베이스를 추가 해주는 쿼리문
// -----------------------------------
// create DATABASE (데이터베이스 이름) CHARACTER SET utf8
// -----------------------------------

//  사용할 데이터베이스 선택하는 쿼리문
// -----------------------------------
// use (데이터베이스의 이름);
// -----------------------------------

// 테이블이라는 곳에 저장을 합니다.
// 유저의 테이블도 있을것이고,
// 게시판에 대한 테이블이 있을것이다.
// 이거는 유저의 내용만 담을 객체야.

// 테이블 추가
// -----------------------------------
// create TABLE (데이터베이스 이름).(테이블 이름)(
//     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
//     content VARCHAR(255) NOT NULL
// )
// -----------------------------------

// 테이블의 리스트 확인
// -----------------------------------
// show TABLES;
// -----------------------------------

// 테이블 확인 쿼리문
// -----------------------------------
// select * FROM (테이블 이름)
// -----------------------------------

// 테이블에 내용을 추가해보자
// -----------------------------------
// insert INTO (데이터베이스 이름).(테이블 이름) ('id','content') VALUES ('1','안녕')
// -----------------------------------