import React from 'react'
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <div>
        welcome <br/>
        <Link to={"/login"}>to login</Link> <br/>
        <Link to={"/order"}>order page</Link> <br/>
        <Link to={"/mypage"}>mypage</Link>
    </div>
  )
}

export default Main;