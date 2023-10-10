// 빌드 폴더안에 컴파일된 Counter.json을 가져온다.
const Counter = artifacts.require("Counter");

module.exports = (deployer) => {
    // deployer.deploy 메소드를 통해서
    // 가져온 json 파일 내용으로 배포 진행
    deployer.deploy(Counter);
}