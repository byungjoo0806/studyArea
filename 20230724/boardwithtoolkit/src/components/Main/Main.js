import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Mainbox = () => {
    const stateValue = useSelector(state => state);
    console.log(stateValue);

    const ContentNum = ()=>{
        const id = useSelector(state => state.addCount.id);

        return (
            <div style={{borderRight : "1px solid", borderLeft : "1px solid", borderBottom : "1px solid", width : "100px"}}>
                {id.map((item,index)=>(
                    <div key={index}>{item}</div>
                ))}
            </div>
        )
    }

    const ContentTitle = ()=>{
        const title = useSelector(state => state.addTitle.title);

        return (
            <Link to={"/"}>
                <div style={{borderRight : "1px solid", borderBottom : "1px solid", width : "300px"}}>
                    {title.map((item,index)=>(
                        <div key={index}>{item}</div>
                    ))}
                </div>
            </Link>
        )
    };

    const ContentWriter = ()=>{
        const writer = useSelector(state => state.addWriter.writer);

        return(
            <div style={{width : "100px", borderRight : "1px solid", borderBottom : "1px solid"}}>
                {writer.map((item,index)=>(
                    <div key={index}>{item}</div>
                ))}
            </div>
        )
    };

    return (
        <>
            <div style={{display : "flex", justifyContent : "center"}}>
                <div style={{border : "1px solid", width : "100px"}}>no.</div>
                <div style={{borderRight : "1px solid", borderBottom : "1px solid", borderTop : "1px solid", width : "300px"}}>title</div>
                <div style={{borderRight : "1px solid", borderBottom : "1px solid", borderTop : "1px solid", width : "100px"}}>writer</div>
            </div>
            <div style={{display : "flex", justifyContent : "center"}}>
                <ContentNum />
                <ContentTitle />
                <ContentWriter />
            </div>
            <div>
                <Link to={"/add"}>add new</Link>
            </div>
            <div>
                <Link to={"/"}>logout</Link>
            </div>
        </>
    )
}

export default Mainbox;