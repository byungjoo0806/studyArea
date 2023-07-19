import React from 'react'
import { Body, Header } from '../components';

const Shop = ({login}) => {
  return (
    <div>
        <Header name={"shop page"} />
        <Body name={"main"} path={"/"} login={login} />
        <Body name={"detail"} path={"/detail"} login={login} />
        <Body name={"shop"} path={"/shop"} login={login}/>

        <Body name={"item 1"} path={"/detail/0/10/shirt"} item={{id: 1, num : 10, name : "shirt"}} />
        <Body name={"item 2"} path={"/detail/1/10/pants"} item={{id: 1, num : 10, name : "pants"}}/>
        <Body name={"item 3"} path={"/detail/2/10/hats"} item={{id: 1, num : 10, name : "hats"}}/>
        <Body name={"item 4"} path={"/detail/3/10/gloves"} item={{id: 1, num : 10, name : "gloves"}}/>
    </div>
  )
}

export default Shop;