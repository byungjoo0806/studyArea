import React from 'react';
import { LoginBoxWrap, LoginBoxInput } from './Login.styled';

const LoginBox = () => {
    // width={"1000px"}를 props값으로 width는 키로 넘어가는데 "1000px" 같은 값을 어떻게 넘겨주지
    // 동적으로 스타일 값을 주고싶으면 어떻게하지?
  return (
    <div>
        <LoginBoxWrap width={"500px"} backgroundColor={"gray"}>
            <p className='login-title'>login box</p>
            <LoginBoxInput>login</LoginBoxInput>
        </LoginBoxWrap>
    </div>
  )
}

export default LoginBox;