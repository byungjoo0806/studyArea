// 웹 서비스를 개발을 하고 완료되면 배포를 해서 사용자에게 소프트웨어를 전달 해야하는데
// 배포를 하기 위해 필요한게 제3자가 접속할 수 있는 서버 컴퓨터가 필요하다.
// 서버 컴퓨터는 365일 내내 24시간 켜져있어야하는데

// 서버 컴퓨터를 대여해주는 호스팅 업체를 통해 배포를 진행한다.
// 호스팅에는 두가지로 나뉜다 - 서버 호스팅, 웹 호스팅
// 서버 호스팅 : 물리 서버를 단독으로 임대 및 구매
// 웹 호스팅 : 서버의 일부 공간을 임대 (컴퓨터를 잘게 쪼갠거라고 보면 됨)

// 웹 호스팅의 장점 : 서버나 인프라 구축이 필요없고 비용이 저렴하다.
// 웹 호스팅의 단점 : 단독 서버에 비해 사용량이 제한적이고, 자원이 한정적이다.

// 웹 호스팅 업체중 하나인 AWS를 통해서 서버를 배포할 것.

// IaaS : 컴퓨터 자원만 제공하는 형태 (AWS) - Infrastructure as a Service
// PaaS : 헤로쿠 등 넷플리파이 등등 기존 환경에서 서비스를 올려주는 형태

// AWS
// 인스턴스 만들기 전에 오른쪽 상단에 리전 확인 - 서버 컴퓨터가 가깝게 설정
// 인스턴스의 사용 운영 체제 선택 - Ubuntu 22.04 (free tier eligible)
// 키페어는 잘 보관 해놓자 - 혹시나 전달해야할 경우 저장매체 사용 (USB 등)
// Network Settings - Security group rule 1 - Type : ssh. Protocol : TCP, Port range : 22 (Default)
// 인스턴스에 접근을 하기 위해서 가지고 있는 기본 포트라고 생각하면 된다.
// Security group rule settings - HTTP,HTTPS,MYSQL/Aurora

// 인스턴스에 mysql 설치

// 업데이트
// sudo apt-get update

// mysql 설치 명령어
// sudo apt-get install mysql-server

// mysql 실행 명령어
// sudo mysql -u root -p

// 데이터베이스 세팅
// 우리가 사용할 데이터베이스 하나 만들어보자
// 쿼리문 그대로 사용해서 만들자
// create database [name];

// 데이터베이스 확인
// show databases;

// 데이터베이스를 사용할때 우리가 사용할 유저를 만들어주자
// 사용할 유저 생성
// create user [username]@"%" identified by [password]
// create user 'admin'@'%' identified by 'admin1234';

// 만든 유저에게 권한 설정
// grant all on [데이터베이스 이름].* to '유저 이름'@'%'
// grant all on test.* to 'admin'@'%';

// 권한이 주어졌는지 확인
// show grants for 'username'
// show grants for 'admin'

// 외부에서 인스턴스의 mysql에 접속을 해보자

// mysql 서버 재시작
// sudo service mysql restart;

// mysql -u admin -p
// admin1234

// 보안그룹에 mysql을 이미 허용 해놓음
// mysql 외부 접근 허용
// sudo vi /etc/mysql/mysql.conf.d/mysqld.cnf;

// vi - 파일을 열고
// i - 수정모드 진입
// esc - 수정모드 해제
// :wq! - 저장 후 종료
// q! - 종료 (저장x)
// :w! - 강제 저장

// 프로젝트 시작
// git에 올린 프로젝트를 설치

// nodejs 설치

// sudo apt-get update
// sudo apt-get install -y build-essential
// sudo apt-get install curl
// curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash --

// sudo apt-get install -y nodejs

// node 버전확인 : node -v
// npm 버전 확인 : npm -v

// 파일 확인
// vi [file_name]
// vi package.json
// :q! - quit view mode

// 포트 포워딩을 해서 포트80 http로 접속했을때 8080포트로 재 매핑 시켜주자
// sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 8080;\
// --dport 80 접속 했을때 --to-port 8080 포트로 재 매핑

// 포트 포워딩 확인 명령어
// sudo iptables -t nat -L --line-numbers

// 포트 포워딩 삭제 명령어
// sudo iptables -t nat -D PREROUTING

// http://ec2-3-35-27-252.ap-northeast-2.compute.amazonaws.com/login

// http : 포트 80번
// https : 포트 443번

// 터미널에서 서버대기를 종료시켜도
// 백그라운드에서 서버를 대기시켜서 계속 동작하게
// pm2 설치
// npm i pm2
// package.json 부분에서 실행 스크립트 명령어를 node app.js로 실행했을텐데
// pm2 start app.js 수정하면 된다.
// 서버가 종료되어도 백그라운드에서 노드 서버 실행
// npx pm2 kill : 종료
// npx pm2 list : 리스트