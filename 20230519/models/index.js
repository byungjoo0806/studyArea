const Sequelize = require("sequelize");
const config = require("./config");
const User = require("./users");
const Post = require("./posts");

// 시퀄라이즈 객체 생성
const sequelize = new Sequelize(
    config.dev.database,
    config.dev.username,
    config.dev.password,
    config.dev
);

// 내보낼 빈 객체
const db = {};
db.sequelize = sequelize;
db.User = User;
db.Post = Post;

// console.log(db);

// 테이블을 초기화하는 부분
User.init(sequelize);
Post.init(sequelize);
User.associate(db);
Post.associate(db);

module.exports = db;