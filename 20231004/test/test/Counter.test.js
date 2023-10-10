const Counter = artifacts.require("Counter");

// contract 는 테스트 케이스를 정의하기위한 최상위 구조
contract("Counter", (account) => {
    // account : 
    console.log(account);
    // describe : 테스트 그룹 단위
    describe("counter contract", ()=>{
        let counter;
        // it : 테스트 단위
        it("counter 1", async()=>{
            // 테스트 내용
            // 배포한 컨트랙트를 조회
            // 컨트랙트의 인스턴스를 담아주고
            counter = await Counter.deployed();
        });

        it("counter 2", async ()=>{
            console.log(await counter.getValue.call());
        });

        it("counter 3", async ()=>{
            await counter.setValue(20);
            console.log(await counter.getValue.call());
        });
    });
});