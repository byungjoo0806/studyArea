const Sequelize = require("sequelize");

class Post extends Sequelize.Model {
    static init(sequelize){
        // super.init
        // 첫번째 매개변수 : column 내용
        // 두번째 매개변수 : table 내용
        return super.init({
            msg : {
                type : Sequelize.STRING(100),
                allowNull : false,

            }
        },{
            sequelize,
            timestamps : true,
            modelName : "Post",
            tableName : "posts",
            charset : "utf8",
            collate : "utf8_general_ci"
        })
    }

    static associate(db){
        // 1 : N 관계 - 하나의 유저가 여러개의 글을 작성하는 경우
        // 시퀄라이즈에서 1 : N 관계를 hasMany 메소드로 정의한다.
        // hasMany 메소드 : 테이블의 관계를 정의해준다.
        // 첫번째 매개변수 : foreignKey - 이름 : user_id
        // 두번째 매개변수 : sourceKey - user 테이블 안에 어떤 키를 foreignKey와 연결해줄지 지정

        // belongsTo 메소드 :
        // 첫번째 매개변수 : foreignKey - user에 id를 연결
        // 두번째 매개변수 : targetKey - 유저의 id가 따라갈 키/참조키는 user_id
        db.Post.belongsTo(db.User, {foreignKey : "user_id", targetKey : "id"});
    }
};

module.exports = Post;