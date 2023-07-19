import React, { createContext, useState, useMemo } from 'react';
import { Addbtnbox, List, Listheader, Listtitle, Listwriter } from './Listbox.styled';
import Listitem from '../Listitem/Listitem';
import { useDispatch } from 'react-redux';
import { useCallback } from 'react';

const Global = createContext();

const Listbox = () => {
    const dispatch = useDispatch();
    
    const [title,setTitle] = useState("What to do");
    const [isEditing, setIsEditing] = useState(false);

    const editTitle = useCallback(()=>{
        setIsEditing(true);
    },[]);

    const saveTitle = useCallback(()=>{
        setIsEditing(false);
    },[]);

    const setTitleCallback = useCallback((e)=>{
        setTitle(e.target.value);
    },[]);

    const Titlestate = ()=>{
        if(isEditing === false){
            return (
                <div style={{marginRight : "20px"}}>{title}</div>
            );
        }else{
            return (
                <input key={title} style={{height : "30px"}} placeholder={title} onBlur={setTitleCallback}></input>
            )
        }
    };

    const Titlebtn = ()=>{
        if(isEditing === false){
            return (
                <button onClick={editTitle}>edit</button>
            )
        }else{
            return (
                <button onClick={saveTitle}>save</button>
            )
        }
    };

    const Totaltitle = useMemo(()=>{
        return(
            <>
                <Titlestate />
                <Titlebtn />
            </>
        )
    },[title,isEditing]);

    const [writer,setWriter] = useState("andy");
    const [writerEdit, setWriterEdit] = useState(false);

    const editWriter = ()=>{
        setWriterEdit(true);
    };
    const saveWriter = ()=>{
        setWriterEdit(false);
    };

    const Writerstate = ()=>{
        if(writerEdit === false){
            return(
                <div style={{marginRight : "20px"}}>{writer}</div>
            )
        }else{
            return (
                <input key={writer} style={{height : "30px"}} placeholder={writer} onBlur={(e)=>setWriter(e.target.value)} />
            )
        }
    };

    const Writerbtn = ()=>{
        if(writerEdit === false){
            return (
                <button onClick={editWriter}>edit</button>
            )
        }else{
            return (
                <button onClick={saveWriter}>save</button>
            )
        }
    };

    const [popup,setPopup] = useState(false);
    const [newList, setNewList] = useState("");

    const showPopup = ()=>{
        setPopup(true);
    };
    const closePopup = ()=>{
        setPopup(false);
    };

    const Addpopup = ()=>{
        const addNewList = ()=>{
            setTimeout(() => {
                dispatch({
                    type : "NEW",
                    payload : newList
                });
                closePopup();
                setNewList("");
            }, 50);
        };

        if(popup === false){
            return (
                <div style={{display : 'none'}}></div>
            )
        }else{
            return (
                <div style={{width : "100vw", height : "100vh", backgroundColor : "rgba(169,169,169,0.8)", position : "absolute", left : "0", top : "0", display : "flex", justifyContent : "center", alignItems : "center"}}>
                    <div style={{border : "1px solid black", backgroundColor : "rgba(255,255,255,1)", width : "400px", height : "400px"}}>
                        <label style={{width : "100%"}}>content</label> <br/>
                        <textarea rows={20} cols={40} style={{resize : "none"}} onBlur={(e)=>setNewList(e.target.value)}></textarea> <br/>
                        <button onClick={addNewList}>add</button>
                    </div>
                </div>
            )
        }
    };

    return (
        <>
            <List>
                <Listheader>
                    <Listtitle>
                        {Totaltitle}
                        {/* <Titlebtn /> */}
                    </Listtitle>
                    <Listwriter>
                        <Writerstate />
                        <Writerbtn />
                    </Listwriter>
                </Listheader>
                <Listitem />
                <Addbtnbox>
                    <button style={{marginRight : "50px"}} onClick={showPopup}>add</button>
                </Addbtnbox>
                <Addpopup />
            </List> 
        </>
    )
}

export default Listbox;