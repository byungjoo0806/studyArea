const {User,Post} = require("../models");

exports.borderMain = async (req,res)=>{
    // 해당 유저의 마이페이지
    const {acc_decoded} = req;
    // console.log(acc_decoded);
    const user = await User.findOne({where : {name : acc_decoded.name}});
    // console.log(user);
    res.render("main",{data : user});
};

exports.createBorder = async (req,res)=>{
    const {acc_decoded} = req;
    const {user_post} = req.body;
    // Post 테이블에 글 추가
    await Post.create({
        msg : user_post,
        user_id : acc_decoded.id
    });
    // 해당 유저가 작성한 글들을 볼수있는 페이지로
    res.redirect(`/border/view/${acc_decoded.id}`);
};

exports.borderView = (req,res)=>{
    User.findOne(
        {
            where : {id : req.params.id},
            include : [{model : Post}]
        }
    ).then((e)=>{
        // 화살표 함수는 {} 가 빠지면 바로 값을 반환한다; return 생략 가능
        e.dataValues.Posts = e.dataValues.Posts.map((i)=> i.dataValues);
        const Posts = e.dataValues;
        console.log(Posts);
        res.render("border",{data : Posts});
    });
};

exports.updateBorder = async (req,res)=>{
    const {acc_decoded} = req;
    const {msg} = req.body;
    const {id} = req.params;
    // 수정 메소드 : update 메소드
    // 퀴리문에서 UPDATE ... SET ... 
    // 첫번째 매개변수 : 수정할 값을 객체로
    // 두번째 매개변수 : 수정할 내용이 있는 위치(조건)
    await Post.update({msg},{where : {id}});
    res.redirect(`/border/view/${acc_decoded.id}`);
};

exports.deleteBorder = async (req,res)=>{
    // 삭제 메소드 사용
    await Post.destroy({where : {id : req.params}});
    res.redirect("/border");
}