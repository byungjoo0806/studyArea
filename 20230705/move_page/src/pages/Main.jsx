import React from 'react'
import { Link } from 'react-router-dom';

const Main = () => {
  return (
    <>
        <div>main page</div>
        <div>
            <Link to={"shop"}>to Shop</Link>
        </div>
    </>
  )
}

export default Main;