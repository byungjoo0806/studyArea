const Sequelize = require("sequelize");

// User 클래스에 sequelize 안의 Model 클래스를 상속 시켜준다.
class User extends Sequelize.Model {
    static init(sequelize){
        // super : 상속받은 부모의 init 함수를 실행시키고 반환
        // init 메소드
        // 첫번째 매개변수 : column 설정
        // 두번째 매개변수 : 테이블의 자체 설정 (옵션)
        return super.init({
            // column
            name : {
                type : Sequelize.STRING(20), // STRING == VARCHAR
                allowNull : false, // null을 허용할지
                unique : true, // unique : 고유키로 사용할 것인지 중복되지 않는값
                // primaryKey : true // primaryKey : 고유키로 사용할 것인지
            },
            age : {
                type : Sequelize.INTEGER, // INTEGER == INT
                allowNull : false,
            },
            msg : {
                type : Sequelize.TEXT, // TEXT == TEXT
            }
        },{
            // 테이블 자체 설정 (옵션)
            // 매개변수로 전달받은 _sequelize 먼저 작성해주고
            sequelize,
            // timestamps : 테이블에 row를 추가 했을때 생성 시간과 업데이트 시간을 표기 해준다.
            // created_at, updated_at 이라는 column이 자동으로 추가된다.
            // 우리가 row를 추가했을때 시간을 기록해주고 수정했을때도 시간을 기록해준다.
            timestamps : true,
            // underscored : 표기법을 바꿔준다.
            // 기본적으로 스네이크 표기법으로 되어있는데 카멜 표기법으로 바꿔준다. ex) created_at -> createdAt
            underscored : false,
            modelName : "User", // 모듈의 이름을 설정; 노드 프로젝트에서 사용
            tableName : "users", // 웬만하면 추가될 테이블의 이름은 복수형으로 설정해주자
            paranoid : false, // paranoid : true 로 설정하면 deleted_at 이라는 column도 생성이 된다; row 가 삭제되는것이 아니라, 값을 남아있고 삭제된 시간을 보여주는 column이 추가된다.
            charset : "utf8", // charset : 인코딩 방식, 꼭 작성해야함
            collate : "utf8_general_ci", // collate : 인코딩 방식, 꼭 작성해야함
        });
    }

    static associate(db){
        // 1 : N 관계 - 하나의 유저가 여러개의 글을 작성하는 경우
        // 시퀄라이즈에서 1 : N 관계를 hasMany 메소드로 정의한다.
        // hasMany 메소드 : 테이블의 관계를 정의해준다.
        // 첫번째 매개변수 : foreignKey - 이름 : user_id
        // 두번째 매개변수 : sourceKey - user 테이블 안에 어떤 키를 foreignKey와 연결해줄지 지정
        db.User.hasMany(db.Post, {foreignKey : "user_id", sourceKey : "id"})
    }
};

module.exports = User;