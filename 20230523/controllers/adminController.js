const {User} = require("../models");

exports.userView = (req,res)=>{
    User.findAll()
    .then(users=>{
        // console.log({data : users});
        const user = users.map(user => user.get({plain : true}));
        // console.log(user);
        res.render("admin",{user});
    }).catch((err)=>{
        console.log(err);
        console.log("unable to load the users table in controller");
    })
};

exports.userAuthorize = async (req,res)=>{
    await User.update({loginAllow : true},{where : {loginAllow : false}});
    res.redirect("/admin");
};