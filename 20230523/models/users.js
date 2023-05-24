const Sequelize = require("sequelize");

class User extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            // column settings
            name : {
                type : Sequelize.STRING(50),
                allowNull : false
            },
            nickname : {
                type : Sequelize.STRING(50),
                allowNull : false
            },
            username : {
                type : Sequelize.STRING(50),
                allowNull : false
            },
            password : {
                type : Sequelize.STRING(128),
                allowNull : false
            },
            level : {
                type : Sequelize.INTEGER,
                defaultValue : 1
            },
            postNum : {
                type : Sequelize.INTEGER,
                defaultValue : 0
            },
            loginAllow : {
                type : Sequelize.BOOLEAN,
                defaultValue : false
            }
        },{
            // table setting
            sequelize,
            modelName : "User",
            tableName : "users",
            charset : "utf8",
            collate : "utf8_general_ci",
            //
            timestamps : true,
            underscored : false,
            paranoid :false,
            //
            indexes : [
                {
                    unique : true,
                    fields : ["username"]
                }
            ]
        })
    }

    static associate(db){
        db.User.hasMany(db.Post, {foreignKey : "writer", sourceKey : "username"});
    }
};

class currentUser extends Sequelize.Model {
    static init(sequelize){
        return super.init({
            username : {
                type : Sequelize.STRING(50),
                allowNull : false
            }
        },{
            sequelize,
            tableName : "currentUser",
            modelName : "currentUser",
            paranoid : false,
            timestamps : false,
            underscored : false,
            charset : "utf8",
            collate : "utf8_general_ci"
        })
    }
}

module.exports = {User,currentUser};