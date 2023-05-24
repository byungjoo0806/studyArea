const router = require("express").Router();
const {Signup} = require("../controllers/signupController");

router.get("/",(req,res)=>{
    res.render("signup");
});

router.post("/",Signup);

module.exports = router;