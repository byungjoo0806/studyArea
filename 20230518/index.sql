-- 데이터베이스
-- 단순하게 데이터를 저장하는 공간으로 보면되고,

-- sql 명령어를 사용해서
-- 구현된 기능을 실행시키기 위해 사용하는 특정한 언어이다.
-- 데이터를 보관하거나 저장하거나 삭제 또는 수정을 할 수 있다.

-- 관계형 데이터베이스
-- mysql, oracle, mariaDB

-- 비관계형 데이터베이스
-- MongoDB

-- CLI로 mysql 접속 방법
-- mysql -u root -p
-- 비밀번호 입력

-- 스키마 전부 확인
-- show databases;

-- sql 문은
-- 데이터 정의어(DDL : Data Definition Language)
-- 데이터 조작어(DML : Data Manipulation Language)
-- 데이터 제어어(DCL : Data Control Language)

-- 데이터 정의어 (DDL)
-- CREATE
-- SHOW
-- DROP
-- ALTER

-- 데이터베이스 만들어 보자
CREATE DATABASE testmysql;

-- 데이터베이스들 확인하는 명령어
SHOW DATABASES;

-- 데이터베이스르 삭제하는 명령어
DROP DATABASE testmysql;

-- 사용할 데이터베이스 지정
USE testmysql;

-- 데이터베이스 안에 있는 테이블 확인
SHOW TABLES;

-- 테이블 생성
-- 테이블에 PRIMARY KEY : 고유키는 한개만 들어갈수 있고 중복이 되지 않는 값
CREATE TABLE store2 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tel VARCHAR(20)
);

CREATE TABLE store2 (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tel VARCHAR(20)
);

-- 테이블에서 필드명과 타입을 확인할 수 있는 명령어
DESC store;

-- 데이터 타입
-- 숫자형, 문자형, 날짜형, 이진데이터 타입

-- 숫자형
-- INT : 4 byte - 21억

-- 문자형
-- VARCHAR : 255 byte - 가변데이터 (우리가 선언한 범위보다 작으면 자기가 알아서 맞춰준다.)
-- CHAR : 255 byte - 고정데이터 (우리가 선언한 범위를 다 먹는다.)
-- TEXT : 65535 byte

-- 날짜형
-- DATE : 년 월 일
-- TIME : 시간
-- DATETIME : 년 월 일 시간 (YYYY-MM-DD-HH:MM:SS)
-- TIMESTAMP : 년 월 일 시간 (INTEGER) - 4 byte

-- 이진데이터
-- BLOB : 이미지
-- KEY
-- PRIMARY KEY : 중복 입력 안됨, 테이블에 하나만 넣을 수 있다. null 값도 안됨. (고유키)
-- UNIQUE : 중복입력 불가인데, 키를 여러개 줄 수 있다. null 값도 됨.ADD

CREATE TABLE user(
    user_id VARCHAR(20) PRIMARY KEY,
    -- NOT NULL : 빈값이 들어가면 안됨.
    user_pw VARCHAR(20) NOT NULL,
    user_name VARCHAR(20) NOT NULL,
    -- DEFAULT : 따로 추가한 값이 없으면 기본 값을 지정해준다.
    gender CHAR(4) DEFAULT "M",
    -- now() : 현재 시간을 만들어주는 함수
    date DATETIME DEFAULT now()
);

DESC user;


-- 데이터 조작어
-- SELECT
-- INSERT
-- UPDATE
-- DELETE


-- 테이블에 값을 추가
INSERT INTO user (user_id,user_pw,user_name,gender) VALUES ("muyo","qwe123","andy","M");
INSERT INTO user (user_id,user_pw,user_name,gender) VALUES ("biggs","qwe123","hyun","M");



SELECT * FROM user;

INSERT INTO user (user_id,user_name) VALUES ("biggs","ben");

-- 테이블 검색
-- WHERE 문으로 테이블을 조회해서 해당 필드가 muyo 인 값을 찾아서 조회
SELECT * FROM user WHERE user_id = "muyo";
SELECT * FROM user WHERE gender = "M";

-- 테이블 수정
-- SET : 해당 값을 수정할때 사용
-- UPDATE 문과 짝으로 사용한다.
UPDATE user SET gender = "F" WHERE user_id = "biggs";

UPDATE user SET user_pw = "0000", user_name = "pbj", gender = "M" WHERE user_id = "biggs";

-- 테이블 열 삭제
DELETE FROM user WHERE user_id = "biggs";

-- 게시판 테이블 만들기
-- columns : id, content, writer, date, likes
-- id : INT 11자리, 자동으로 증가 고유키
-- content : TEXT 타입, null이 어도 추가 가능하게
-- writer : VARCHAR 40자, null 이면 안되게
-- likes : int 11자, 기본값 0
CREATE TABLE board (
    id INT AUTO_INCREMENT PRIMARY KEY,
    content TEXT,
    writer VARCHAR(40) NOT NULL,
    date DATETIME DEFAULT now(),
    likes INT DEFAULT 0
);

DESC board;

INSERT INTO board (content,writer) VALUES ("When I see your face","zerohoney");
INSERT INTO board (content,writer) VALUES ("There's not a thing that I would change","zerohoney");
INSERT INTO board (content,writer) VALUES ("Cuz you're amazing","zerohoney");
INSERT INTO board (content,writer) VALUES ("Just the way you are","zerohoney");

SELECT * FROM board;
SELECT id,likes FROM board WHERE id=1;

ALTER TABLE user2 RENAME user3;
SHOW TABLES;


-------------------------------- 명령어 정리 --------------------------------
-- mysql -u root -p : CLI 환경에서 mysql 접속
-- create database [database_name] : 데이터베이스 생성 (멕셀파일 생성 같은 의미)
-- drop databse [database_name] : 데이터베이스 삭제
-- create table [table_name] : ([field1_name data_type],[field2_name data_type]) - 테이블 생성
-- show databases : 모든 데이터베이스 조회
-- show tables : 모든 테이블 조회
-- use [database_name] : 사용할 데이터베이스 선택 (멕셀파일 열기 같은 느낌)
-- desc [table_name] : 테이블의 필드를 한줄로 확인 (엑셀과 비교)
-- SELECT [field1_name],[field2_name] FROM [table_name] : 필드1과 필드2에 대한 테이블 전체 확인
-- DELETE FROM [table_name] WHERE [field_name]="[value]" : 테이블에서 필드값이 "[value]"인 줄 삭제
-- SELECT * FROM [table_name] : 테이블 전체 값을 조회
-- INSERT INTO [table_name] (field1_name, field2_name) VALUES (field1_value, field2_value) : 테이블의 필드에 값 추가
-- UPDATE [table_name] SET [field1_name]=[field1_value], [field2_name]=[field2_value] WHERE [field_name]=[field_value]
-- : 테이블 명에서 필드명을 새로운 값으로 필드명1과 필드명2를 새로운값1 과 새로운값2 로 바꾼다.
-- SELECT * FROM [table_name] WHERE [field_name] LIKE "%AB" : 필드에서 해당되는 내용중 AB~로 시작하는 데이터 조회
-- SELECT * FROM [table_name] WHERE [field_name] LIKE "AB%" : 필드에서 해당되는 내용중 ~AB로 끝나는 데이터 조회
-- ALTER TABLE [original_table_name] RENAME [new_table_name] : 테이블 이름 변경
-- ALTER TABLE [table_name] CHANGE [original_column_name] [new_column_name] [type] : 테이블 안의 column 의 이름 바꾸기
-- ALTER TABLE [table_name] MODIFY [column_name] [type] : column의 타입을 변경
-- DELETE FROM [table_name] WHERE [field_name] = [field_value] : 조건에 맞는 모든 값 삭제
-- ALTER TABLE [table_name] DROP [field_name] : 해당 필드(column)를 테이블에서 제거한다.
-- ALTER TABLE [table_name] AUTO_INCREMENT = 0(or 1) : 해당 테이블의 AUTO_INCREMENT를 초기화 시켜준다.
-- ALTER TABLE [table_name] ADD [field_name] [type] : 해당 테이블 맨 뒤에 필드(column)를 추가한다.
-- ALTER TABLE [table_name] ADD [field_name] [type] FIRST : 해당 테이블 맨 앞에 필드(column)를 추가한다.
-- SELECT * FROM [table_name] ORDER BY [field_name] DESC | ASC : ORDER BY 밀드명 기분으로 DESC가 내림차순, ASC가 오름차순

DESC user3;
SELECT * FROM user3;

ALTER TABLE user3 CHANGE user_pw newcol VARCHAR(20);
ALTER TABLE user3 MODIFY newcol VARCHAR(50);
SELECT * FROM board;
DELETE FROM board WHERE writer = "zerohoney";



CREATE TABLE user (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20)
);

CREATE TABLE post(
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(20)
);

SHOW TABLES;

SELECT * FROM post;
-- post 테이블에 userID 필드 추가, 타입은 INT
ALTER TABLE post ADD COLUMN userID INT;
-- ADD CONSTRAINT : 제약 조건 명령어 (오류가 나면 확인하기 위해서; 임의로 지정할 수 있다.)
-- FOREIGN KEY : 참조키를 지정
-- REFERENCES : 참조하는 테이블의 열을 지정
-- 참조할 테이블 지정
ALTER TABLE post ADD CONSTRAINT fk_user FOREIGN KEY (userID) REFERENCES user (id);

INSERT INTO user (name) VALUES ("Drogba");
INSERT INTO post (title,userID) VALUES ("123","3");

-- INNER JOIN : 테이블을 조회하는데 참조키를 가지고 관계가 맺어져있는 테이블 조회
SELECT * FROM user INNER JOIN post ON user.id = post.userID WHERE user.id = "3";

SELECT user.id, post.title FROM user INNER JOIN post ON user.id = post.userID WHERE user.id = "3";

-- 오늘 잠시 간단하게 만들어볼것.
-- 게시판 만들었는데, 유저가 글을 등록하고
-- 해당 유저가 작성한 글을 볼 수 있는 페이지