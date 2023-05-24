const router = require("express").Router();
const {isLogin} = require("../middleware/login");
const {Board,Add,View,Edit,editView,Delete} = require("../controllers/boardController");

// board main page
router.get("/",isLogin,Board);

// board add page
router.get("/add",(req,res)=>{
    res.render("add");
});

router.post("/add",isLogin,Add);

// board detail page
router.get("/detail/:id",isLogin,View);

// board edit page
router.get("/edit/:id",isLogin,editView);

router.post("/edit/:id",isLogin,Edit);

// board delete
router.get("/delete/:id",isLogin,Delete);

module.exports = router;