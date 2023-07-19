function login(id,pw){
    return (dispatch)=>{
        // 백엔드까지 합치게되면
        // 이 부분에 데이터베이스 요청 응답 과정이 들어가면된다.
        // async await
        // 비동기 작업을 할때 dispatch를 딜레이 시키기 위해서
        dispatch({
            type : "LOGIN",
            payload : {
                id,
                pw
            }
        })
    }
};

function logout(){
    return (dispatch)=>{
        dispatch({
            type : "LOGOUT"
        })
    }
};

// 새로운 방식으로 내보냄
export const logins = {login, logout};
// logins = {
//     login : function,
//     logout : function
// }

// import {logins} from "./"