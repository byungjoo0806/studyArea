import React from 'react';
import { Link } from 'react-router-dom';

const Signupbox = () => {
  return (
    <>
        <div>Signup</div>
        <label>username</label> <br/>
        <input type='text' /> <br/>
        <label>password</label> <br/>
        <input type='text'></input> <br/>
        <button>register</button>
        <br/>
        <Link to={"/"}>already a member?</Link>
    </>
  )
}

export default Signupbox;