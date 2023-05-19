const {userModel,boardModel} = require("../models");

exports.Signup = async (req,res)=>{
    const {username,password} = req.body;
    try {
        const data = await userModel.userInsert(username,password);
        if(data !== undefined) res.send("username already in ues");
        res.redirect("/login");
    } catch (error) {
        console.log("error found in controller adding new user");
    }
};

exports.Login = async (req,res)=>{
    const {username,password} = req.body;
    try {
        const data = await userModel.userSelect(username);
        if(data.length == 0){
            res.send("please check your username");
        };
        if(password !== data[0].password){
            res.send("please check your password");
        }
        res.redirect("/main");
    } catch (error) {
        console.log("unable to log in controller");
    }
};

exports.Table = async (req,res)=>{
    try {
        const data = await boardModel.showTable();
        console.log(data);
        return data;
    } catch (error) {
        console.log("unable to show the board in controller");
    }
};

exports.Add = async (req,res)=>{
    const {title,content} = req.body;
    try {
        await boardModel.addItem(title,content);
        res.redirect("/main");
    } catch (error) {
        console.log("unable to add an item in controller");
    }
};

exports.Detail = async (req,res)=>{
    const {id} = req.params;
    try {
        const data = await boardModel.showOne(id);
        return data;
    } catch (error) {
        console.log("unable to show the selected item in controller");
    }
};

exports.Edit = async (req,res)=>{
    const {id} = req.params;
    const {title,content} = req.body;
    try {
        console.log(title,content);
        await boardModel.editItem(id,title,content);
    } catch (error) {
        console.log("unable to edit the selected item in controller");
    }
};

exports.Delete = async (req,res)=>{
    const {id} = req.params;
    try {
        await boardModel.deleteItem(id);
    } catch (error) {
        console.log("unable to delete the item in controller");
    }
};