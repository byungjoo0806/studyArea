// 경로를 폴더까지만 지정을 하면 index.js를 기본적으로 찾는다.
// 경로에 파일이 아닌 폴더 경로까지만 작성을 하면 기본 설정이 index.js를 찾는다.
const {posts} = require("../models");

// 전체 글 조회 메소드
exports.ViewPostAll = async function(req,res){ // req,res : 요청과 응답을 뜻하는 변수가 아닌 그저 일반적인 매개변수
    try {
        const data = await posts.viewPostAll();
        return data;
    } catch (error) {
        console.log("error found in controller ViewPostAll");
    }
}

// 글 하나 조회 메소드
exports.SelectPost = async function(req,res){
    // req 요청 객체를 매개변수로 전달 해줄 예정
    const {id} = req.params;
    try {
        const data = await posts.selectPost(id);
        return data;
    } catch (error) {
        console.log("error found in controller SelectPost");
    }
}

// 게시글 등록 메소드
exports.Insert = async function(req,res){
    const {title,content} = req.body;
    try {
        await posts.insert(title,content);
    } catch (error) {
        console.log("error found in controller Insert")
    }
}

// 게시글 수정 메소드
exports.Update = async function(req,res){
    const {id} = req.params;
    const {title,content} = req.body;
    try {
        await posts.update(id,title,content);
    } catch (error) {
        console.log("error found in controller Update");
    }
}

exports.Delete = async function(req,res){
    const {id} = req.params;
    try {
        await posts.delete(id);
    } catch (error) {
        console.log("error found in controller Delete");
    }
}