let init = {
    id : "",
    pw : "",
    isLogin : false
};

function reducer(state = init, action){
    // reducer 함수는 무조건 반환값이 있어야한다.
    // reducer 함수에서 반환된 값을 store에 업데이트/최신화 시켜준다.
    // 값만 변경된다고 업데이트를 하는게 아니라, 주소값을 확인해서 주소가 변하면 업데이트를 해준다.
    // 새로운 주소를 만들어서 반환 해줘야함
    const {type,payload} = action;
    // payload = {id:"", pw:"", isLogin:false}
    // {
    //     id : "",
    //     pw : "",
    //     isLogin : false
    // };
    // ->
    // {
    //     id : payload.id,
    //     pw : payload.pw,
    //     isLogin : true
    // }
    switch (type) {
        case "LOGIN":
            return {...state,id : payload.id, pw : payload.pw, isLogin : true};
        case "LOGOUT":
            return {...state,id : "", pw : "", isLogin : false};
        default:
            return state;
    }
}

export default reducer;