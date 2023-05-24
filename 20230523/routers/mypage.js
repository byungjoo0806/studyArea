const router = require("express").Router();
const {isLogin} = require("../middleware/login");

router.get("/",isLogin,(req,res)=>{
    res.render("mypage");
});

module.exports = router;