import React from 'react'
import { Cbody, Cfooter, Cheader } from '../components/Mycom';
import { useState } from 'react';

const Main = () => {
    const [CbodyShow, setCbodyShow] = useState(false);
    const [CfooterShow, setCfooterShow] = useState(false);

    const showCbody = ()=>{
        setCbodyShow(!CbodyShow);
    };

    const showCfooter = ()=>{
        setCfooterShow(!CfooterShow);
    };

    return (
        <>
            <Cheader showCbody={showCbody} showCfooter={showCfooter} />
            {CbodyShow && <Cbody />}
            {CfooterShow && <Cfooter />}
        </>
    )
}

export default Main;