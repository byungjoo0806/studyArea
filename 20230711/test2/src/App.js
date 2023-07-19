import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import LoginBox from './components/layout/loginBox';
import { weather, logins } from './middleware';
import { useEffect, useState } from 'react';

function App() {
  console.log(logins);
  const dispatch = useDispatch();
  const [city,setCity] = useState(""); // 날씨 정보
  const [id,setId] = useState(""); // 아이디
  const [pw,setPw] = useState(""); // 패스워드
  const isLogin = useSelector(state => state.loginReducer.isLogin);
  const userName = useSelector(state => state.loginReducer.id);
  const weatherData = useSelector(state => state.weatherReducer.weatherData);

  const login = ()=>{
    dispatch(logins.login(id,pw));
  };
  const logout = ()=>{
    dispatch(logins.logout());
  };
  const getWeather = ()=>{
    dispatch(weather.getWeather(city));
  }

  useEffect(()=>{
    console.log(isLogin);
    console.log(userName);
  },[isLogin,userName]);

  useEffect(()=>{
    console.log(id);
    console.log(pw);
  },[id,pw]);

  useEffect(()=>{
    console.log(weatherData);
  },[weatherData]);

  return (
    <div className="App">
      {/* <LoginBox /> */}
      <label>city name</label> <br/>
      <input onChange={(e)=>{setCity(e.target.value)}}></input> <br/>
      <button onClick={getWeather}>search</button> <br/>

      <div>
        여기는 {weatherData && weatherData.data?.name}<br/>
        현재 날씨는 {weatherData && weatherData.data?.weather[0]?.main}
      </div> <br/>

      <label>username</label> <br/>
      <input onChange={(e)=>{setId(e.target.value)}}></input> <br/>
      <label>password</label> <br/>
      <input onChange={(e)=>{setPw(e.target.value)}}></input> <br/>
      <button onClick={login}>login</button>

      <div>logged in?</div> {isLogin ? <>{userName} logged in <button onClick={logout}>logout</button></> : <>no one's logged in</>}
    </div>
  );
}

export default App;


// api를 가져와서 store의 상태 값을 바꿀때 비동기 처리를 하기위해서 미들웨어를 추가해야한다.

// 스타일 컴포넌트
// 클래스명이 겹치지 않는다.
// 스타일에 관련되어서 props로 값을 전달해서 스타일 값을 적용시킬 수 있다.
// scss
// styled-components
// npm i styled-components

// redux 설치
// npm i redux
// npm i react-redux

// store 구성

// redux-thunk
// api를 요청하고 처리가 된 뒤에 상태를 변경/업데이트하기 위해서
// dispatch를 지연시킨다. actions라는 함수를 만들거임

// redux-thunk 미들웨어로 추가하는 방법

// dispatch 함수를 실행할때 매개변수로 객체를 넘기느냐 함수를 넘기느냐의 차이

// 날씨 api를 가지고와서 사용해보자
// https://openweathermap.org/current

// API key : 3c5fef0dacf87c72039436e6a426e8f4

// thunk가 해주는 역할은 Action Creators라는 함수를 만들어주는것
// Action Creators 함수는 함수를 반환한다.
// thunk의 정확한 역할은 dispatch를 딜레이 시켜주는 것
// npm i redux-thunk

// npm start - 개발할때 사용하는 개발 환경
// npm run build - 빌드된 파일을 배포하는것

// 게시판 구현
// 글 추가, 삭제, 수정, 
// express 사용해서 서버 구축 게시판 CRUD
// 로그인 jwt 사용해서 로그인 인증까지
// 개인 프로젝트
// 빌드까지
// 내가 어디까지 알고있는지, 할 수 있는지