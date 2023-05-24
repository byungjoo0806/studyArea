const {User,currentUser} = require("./users");
const Post = require("./posts");
const Sequelize = require("sequelize");
const config = require("../config")

const sequelize = new Sequelize(
    config.dev.database,
    config.dev.username,
    config.dev.password,
    config.dev
);

const db = {};
db.sequelize = sequelize;
db.User = User;
db.Post = Post;
User.init(sequelize);
Post.init(sequelize);
currentUser.init(sequelize);
User.associate(db);
Post.associate(db);

module.exports = db;