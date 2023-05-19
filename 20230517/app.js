// new project

const express = require("express");
const PORT = 5050;
const path = require("path");

const app = express();

app.set("views",path.join(__dirname,"page"));
app.set("view engine","ejs");
app.use(express.urlencoded({extended : false}));

app.get("/",(req,res)=>{
    res.redirect("/login");
})

const allRouter = require("./routers/router");
app.use("/",allRouter);

app.listen(PORT,()=>{
    console.log("server open");
})