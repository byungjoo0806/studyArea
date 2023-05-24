const {User,Post} = require("../models");

// main page
exports.Board = async (req,res)=>{
    Post.findAll()
    .then(posts=>{
        // console.log({data : users});
        const post = posts.map(user => user.get({plain : true}));
        // console.log(post);
        res.render("board",{post});
    }).catch((err)=>{
        console.log(err);
        console.log("unable to load the users table in controller");
    })
};

// add board
exports.Add = async (req,res)=>{
    const {title,content} = req.body;
    await Post.create({
        title : title,
        content : content,
        writer : req.acc_decoded.username
    });
    res.redirect("/board");
};

// view detail board
exports.View = (req,res)=>{
    const id = req.params.id;
    console.log(id);
    User.findOne(
        {
            where : {id : req.params.id},
            include : [{model : Post}]
        }
    ).then((e)=>{
        // console.log(e);
        e.dataValues.Posts = e.dataValues.Posts.map((i)=> i.dataValues);
        const Posts = e.dataValues;
        // console.log(Posts.Posts);
        console.log(Posts.Posts[id-1]);
        // return post;
        res.render("detail",{data : Posts});
    });
};

// edit page render
exports.editView = (req,res)=>{
    const id = req.params.id;
    User.findOne(
        {
            where : {id : req.params.id},
            include : [{model : Post}]
        }
    ).then((e)=>{
        // console.log(e.dataValues);
        e.dataValues.Posts = e.dataValues.Posts.map((i)=> i.dataValues);
        const Posts = e.dataValues;
        // console.log(Posts);
        const post = Posts.Posts[0];
        // console.log(post);
        // return post;
        res.render("edit",{post});
    });
};

// edit board
exports.Edit = async (req,res)=>{
    const {title,content} = req.body;
    await Post.update({title : title, content : content},{where : {id : req.params.id}});
    res.redirect(`/board/detail/${req.params.id}`)
};

// delete board
exports.Delete = async(req,res)=>{
    await Post.destroy({where : {id : req.params.id}});
    res.redirect("/board");
};