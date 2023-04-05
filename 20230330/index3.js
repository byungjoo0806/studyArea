// promise 객체
// 비동기 처리를 가능하게 해주는 객체

// nodejs에서 사용을 많이하게 될텐데
// 비동기처리를 할때 promise 객체를 사용한다.

function testPromise(num){
    // new 키워드로 빈 객체를 만들고
    // Promise 객체를 생성
    return new Promise(function(res,rej){
        // 전달하는 함수값에 resolve, reject 두가지 매개변수를 받는데
        // resolve() 함수 : 처리가 완료되면 반환
        // reject() 함수 : 처리가 오류나면 반환
        try {
            if(num > 10)
            rej({data : "숫자큼"});
            // if문에 중괄호가 없으면 바로 밑코드까지
            // console.log(num);
            // 데이터를 받아온다고 가정을 하자.
            // 데이터를 가져오는 시간이 좀 걸리는데, 데이터를 다 가져오고 작업을 진행시켜야할때
            setTimeout(() => {
                res(num);
            }, num * 1000);
        } catch (error) {
            rej(error);
        }
    })
}

// testPromise(5).then(function(data){
//     console.log(data);
//     // 데이터를 가져오고 처리할 구문을 여기에 작성하면 된다.
//     // 데이터를 가지고 처리해야할 작업
//     return testPromise(data);
//     // res를 실행하면 then() 메소드가 실행되고
//     // rej를 실행하면 carch() 메소드가 실행된다
// }).then(function(data){
//     // 성공
//     console.log(data);
// }).catch(function(err){
//     // 실패
//     console.log(err);
// })

// (then, catch) 구문 혹은 (async, await) 구문
// 두 세트를 같이써도 작업은 잘돌아가겠지만,
// 안좋은 버릇이니까 절대로 같이 사용하지말자
// 두 세트를 같이 사용한다는건 Promise 객체를 잘 이해하지 못했다는 뜻

async function asyncFun(){ // async, await는 짝이다; 항상 같이 다닌다.
    // 이제 웬만하면 try-catch문으로 작업의 오류를 예외상황을 잡으면서 작업하자
    try {
        let temp = await testPromise(11); // await 뒤에 promise 객체
        // promise 객체의 res나 rej이 처리될때까지 기다리다가
        console.log(temp);
        temp = await testPromise(temp);
        console.log(temp);
        // await + promise = promise를 기다리고 resolve 값을 반환한다.
    } catch (error) {
        console.log(error);
    }
}
asyncFun();