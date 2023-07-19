import React from 'react';
import { Body, Header } from '../components';

const Main = ({login}) => {
  return (
    <div>
        <Header name={"main page"} />
        <Body path={"/shop"} name={"shop"} login={login}></Body>
        <Body path={"/login"} name={"login"} login={login}></Body>
        <Body path={"/mypage"} name={"mypage"} login={login}></Body>
    </div>
  )
}

export default Main;