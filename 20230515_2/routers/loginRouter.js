const router = require("express").Router();
const {Login,verifyLogin} = require("../controllers/usersController");

router.get("/",(req,res)=>{
    res.render("login");
});

router.post("/",Login);

// 로그인 상태에서 요청해야하는 작업은
router.get("/mypage",verifyLogin,(req,res)=>{
    // console.log('THIS IS ENDGAME');
    const {refreshToken} = req.body;
    const currentTime = Math.floor(Date.now() / 1000);
    // const expire = refreshToken.expires
    res.send("make your way to mypage");
});

module.exports = router;