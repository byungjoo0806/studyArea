const express = require("express");
const router = express.Router();

router.get("/",(req,res)=>{
    console.log("first page open");
    res.render("page");
})

module.exports = router;