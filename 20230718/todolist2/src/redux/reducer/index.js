let init = {
    todolist : []
}

const reducer = (state = init,action)=>{
    const {type,payload} = action;
    switch (type) {
        case "NEW":   
            return {...state, todolist : [...state.todolist,payload]};
        default:
            return state;
    }
};

export default reducer;