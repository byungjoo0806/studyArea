// ES6 문법을 사용

// require로 파일을 가져왔는데 모듈을 가져왔는데
// ES6에서는 import가 생김
class LoginBtn extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLogin : false
        }
    }

    render(){
        return(
            // JSX 문법 : 중괄호 - JS 문법을 쓰겠다는 의미
            <button onClick={
                ()=>{this.setState({isLogin : !this.state.isLogin})}
            }>
                {this.state.isLogin ? "Logout" : "Login"}
            </button>
        )
    }
}

// nodejs에서는 module.exports
// 여기서는
// export {LoginBtn} // 내보낼 컴포넌트가 여러개일 경우
// 혹은
export {LoginBtn} // 단일, 한개만 내보낼 경우