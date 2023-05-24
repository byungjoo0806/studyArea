const Sequelize = require("sequelize");

class Post extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            // column setting
            title : {
                type : Sequelize.STRING(64),
                allowNull : false
            },
            content : {
                type : Sequelize.STRING(255),
                allowNull : false
            }
        },{
            // table setting
            sequelize,
            charset : "utf8",
            collate : "utf8_general_ci",
            modelName : "Post",
            tableName : "posts",
            // 
            timestamps : true,
            paranoid : false,
            underscored : false,
        })
    }

    static associate(db){
        db.Post.belongsTo(db.User, {foreignKey : "writer",targetKey : "username"});
    }
}

module.exports = Post;