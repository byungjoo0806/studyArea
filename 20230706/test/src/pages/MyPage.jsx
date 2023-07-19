import React from 'react'
import { Body, Header } from '../components';

const MyPage = ({login}) => {
  return (
    <div>
        <Header name={"mypage"} />
        <Body path={"/"} name={"main"} login={login} />
    </div>
  )
}

export default MyPage;