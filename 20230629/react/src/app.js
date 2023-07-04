// nodejs에서 사용하던 require가 아니라
// ES6 문법
// export {LoginBtn} 으로 내보냈을때
// import {LoginBtn} from "./components/LoginBtn";
// export default LoginBtn 으로 내보냈을때
import {LoginBtn} from "./components/LoginBtn"; // 가져와서 변수처럼 새로운 이름 설정 가능
console.log(LoginBtn);
// 루트 요소 가상 DOM으로 생성
// 루트 설정
// const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(<LoginBtn></LoginBtn>);
ReactDOM.render(<LoginBtn />, document.querySelector("#root"));