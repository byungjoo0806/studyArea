const router = require("express").Router();
const {Signup,Login,Table,Add,Detail,Edit,Delete} = require("../controllers/controller");

// register page
router.get("/join",(req,res)=>{
    res.render("join");
});

router.post("/join",Signup);

// login page
router.get("/login",(req,res)=>{
    res.render("login");
});

router.post("/login",Login);

// main page
router.get("/main",async (req,res)=>{
    const data = await Table();
    console.log(data)
    res.render("main",{data});
})

// add page
router.get("/add",(req,res)=>{
    res.render("add");
})

router.post("/add",Add);

// detail page
router.get("/detail/:id", async (req,res)=>{
    const data = await Detail(req,res);
    res.render("detail",{data});
})

// edit page
router.get("/edit/:id", async (req,res)=>{
    const data = await Detail(req,res);
    res.render("edit",{data});
})

router.post("/edit/:id", async (req,res)=>{
    await Edit(req,res);
    res.redirect("/main");
})

// delete
router.get("/delete/:id", async (req,res)=>{
    try {
        await Delete(req,res);
        res.redirect("/main");
    } catch (error) {
        console.log("unable to delete the item in router");
    }
})

module.exports = router;