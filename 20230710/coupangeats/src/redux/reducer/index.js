// login status
let initial = {
    isLogin : false,
    orders : []
}

const reducer = (state = initial, action)=>{
    switch (action.type) {
        // login controller
        case "LOGIN":
            return {...state, isLogin : action.payload};
        case "LOGOUT":
            return {...state, isLogin : action.payload};

        // order controller
        case "ORDER":
            return {...state, orders : [...state.orders,action.payload]};
        case "EMPTY":
            return {...state, orders : []};
        default:
            return {...state}
    }
};

export default reducer;