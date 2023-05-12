const mysql = require("./config"); // config.js에서 export 한 모듈을 가져온다

// 글의 내용 작성
// 수정 추가 삭제
// 게시판의 기능들이 작성될 공간

const posts = {
    // 테이블을 초기화해주는 함수
    initTable : async function(){
        // 에러가 뜨더라도 서버가 종료되지 않게끔 try-catch 문을 쓰는 습관을 들이자
        try{
            // 배열의 스프레드 연산자 : 0 1 2 3 4 이런식으로 순서대로 담긴다
           const [result] =  await mysql.query("select * from posts");
           console.log(result);
        }catch(error){
            // console.log(error);
            await mysql.query("create table posts (id int auto_increment primary key, title varchar(20), content varchar(100))");
        }
    },

    // 글의 리스트를 조회하는 함수
    viewPostAll : async function(){
        try {
            const [result] = await mysql.query("select * from posts");
            // posts 테이블의 데이터 전부 조회
            return result;
        } catch (error) {
            console.log("unable to read data");
        }
    },

    // async-await를 사용하던지, then을 사용하던지, 둘 중에 하나만 쓰자
    // 같이쓰면 절대 안됩니다.
    // 글을 선택했을때 글 하나를 보여줄 함수
    selectPost : async function(id){
        try {
            const [result] = await mysql.query("select * from posts where id = ?",[id]);
            console.log(result);
            console.log("selected data : ",result[0]);
            console.log(result[0].title);
            return result[0];
        } catch (error) {
            console.log("unable to find the selected data");
        }
    },

    // 글을 추가해주는 메소드
    insert : async function(title,content){
        try {
            await mysql.query("insert into posts (title, content) values (?,?)",[title,content]);
            console.log("data added");
        } catch (error) {
            console.log("unable to add data");
        }
    },

    // 글을 수정하는 메소드
    update : async function(id,title,content){
        try {
            await mysql.query("update posts set title = ?, content = ? where id = ?",[title,content,id]);
            console.log("data updated")
        } catch (error) {
            console.log(error);
        }
    },

    // 글을 삭제하는 메소드
    delete : async function(id){
        try {
            await mysql.query("delete from posts where id = ?; set @CNT = 0; update posts set posts.id = @CNT:=@CNT+1; alter table posts auto_increment = 0",[id]);
            console.log("data deleted");
        } catch (error) {
            console.log(error);
        }
    }
}

// posts.initTable();
// posts.selectPost(2);
// posts.insert("food","pizza");
// posts.update("bank","NH",1);
// posts.update(2,"laptop","mac");
// posts.selectPost(1);
// posts.insert("travel","hawaii");
// posts.update(2,"food","burger");
posts.initTable();
// posts.delete(2);
// posts.update(1,"bank","NH");
// posts.insert("food","mint");

module.exports = posts;