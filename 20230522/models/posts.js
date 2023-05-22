const Sequelize = require("sequelize");

class Post extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            // column 내용
            msg : {
                type : Sequelize.STRING(20),
                allowNull : false,
            }
        },{
            // table 내용
            sequelize,
            timestamps : true,
            modelName : "Post",
            tableName : "posts",
            paranoid : false,
            charset : "utf8",
            collate : "utf8_general_ci",
        })
    }

    static associate(db){
        db.Post.belongsTo(db.User,{foreignKey : "user_id",targetKey : "id"});
    }
}

module.exports = Post;