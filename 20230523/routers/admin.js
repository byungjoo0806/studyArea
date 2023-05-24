const {userView,userAuthorize} = require("../controllers/adminController");
const {isLogin} = require("../middleware/login");
const router = require("express").Router();

router.get("/",isLogin,userView);

router.post("/",isLogin,userAuthorize);

module.exports = router;