const multer = require("multer");
const path = require("path");

// multer 함수 안에 매개변수로 객체 형태의 인자를 전달
// storage 속성을 통해서 업로드된 파일을 어디에 저장시킬지 지정 할 수 있다.
exports.Upload = multer({
    // diskstorage 메소드 : 서버 컴퓨터의 하드 디스크에 업로드 파일을 저장한다; 객체로 인자값을 전달
    storage : multer.diskStorage({
        // destination 속성 : 파일이 저장될 폴더를 설정 할 수 있다.
        destination : (req,file,done) =>{
            // done : 콜백 함수의 두번째 인자값으로 폴더의 이름을 설정해주면 된다.
            // 첫번째 매개변수 : 에러처리의 부분
            // 두번째 매개변수 : 파일이 저장될 폴더의 이름
            // 서버 컴퓨터 폴더명
            // 오류 내용이 있으면 작성해주면 된다.
            done(null,"uploads/");
        },
        // filename 속성값에서 매개변수 file.originalname은 클라이언트가 업로드한 파일의 이름을 나타낸다.
        filename : (req,file,done)=>{
            // file.originalname : 사용자가 업로드한 파일 원래 이름
            // extname 메소드 : 파일의 경로를 매개변수로 받고, 파일의 확장자를 추출해준다.
            const ext = path.extname(file.originalname);

            // 파일을 저장하는데 이름이 전부 같으면 (1),(2),(3)과 같은게 붙을텐데 파일관리가 힘들어진다.
            // 시간을 같이 이름에 포함시켜서 저장을 시켜주면, 겹칠 일이 없어 지겠죠?
            // 1이라는 이미지 이름을 저장하는데 20230530 이런식으로 날짜와 시간을 추가해주면
            // basename 메소드 : 확장자를 추가,제거 할 수 있다.
            // 1.js => 1
            // 첫번째 매개변수로 파일의 경로
            // 두번째 매개변수로 옵션
            const filename = path.basename(file.originalname,ext,) + "_" + Date.now() + ext;
            done(null,filename); // null : 에러처리의 부분, filename : 서버 컴퓨터에 실제로 저장할 파일명
        }
    }),
    // 파일의 사이즈를 결정 (최대 파일 사이즈 결정)
    limits : {fileSize : 5 * 1024 * 1024}, // 5MB
});