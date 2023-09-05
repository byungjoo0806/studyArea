// 함수형 컴포넌트 사용하기
import React from 'react'
import { useState } from 'react'

const Cdays = ({day}) => {
    let eachDayBox = null;
    if(day === "Sun"){
        eachDayBox = <div className="eachDayBox textRed">{day}</div>
    }else if(day === "Sat"){
        eachDayBox = <div className="eachDayBox textBlue">{day}</div>
    }else{
        eachDayBox = <div className="eachDayBox textBlack">{day}</div>
    }
    return (
        <>
            {eachDayBox}
        </>
    )
}

const Cheader = ({showCbody, showCfooter}) => {
    const [visible, setVisible] = useState(false);
    const showHide = ()=>{
        setVisible(!visible);
        showCbody();
        showCfooter();
    };

    return (
        <div className="calendarHeader">
            <div className="emptyDiv"></div>
            <h2>July 2023</h2>
            <button className="hamburgerBtn" onClick={showHide}>
                <img src="https://cdn.icon-icons.com/icons2/2596/PNG/512/hamburger_button_menu_icon_155296.png" alt="" />
            </button>
            {visible && (<div className="daysBox">
                <Cdays day="Sun"/>
                <div className="vertLine"></div>
                <Cdays day="Mon"/>
                <div className="vertLine"></div>
                <Cdays day="Tue"/>
                <div className="vertLine"></div>
                <Cdays day="Wed"/>
                <div className="vertLine"></div>
                <Cdays day="Thu"/>
                <div className="vertLine"></div>
                <Cdays day="Fri"/>
                <div className="vertLine"></div>
                <Cdays day="Sat"/>
            </div>)}
        </div>
    )
}

const Oneday = ({day}) => {
    let dayNumber = null;
    let bottomLine = null;
    if(day%7 === 2){
        dayNumber = <div className={"dayNum numRed"}>{day}</div>;
        bottomLine = <div className={"bottomLine sundayRed"}></div>;
    }else if(day%7 === 1){
        dayNumber = <div className={"dayNum numBlue"}>{day}</div>;
        bottomLine = <div className={"bottomLine saturdayBlue"}></div>;
    }else if(day === undefined){
        bottomLine = <div className="bottomLine"></div>;
    }else{
        dayNumber = <div className={"dayNum numBlack"}>{day}</div>;
        bottomLine = <div className={"bottomLine weekdayBlack"}></div>;
    }

    return(
        <div className="oneDayBox">
            {dayNumber}
            {bottomLine}
        </div>
    )
}

const Cbody = () => {
    const days = Array.from({length:31},(_, index) => index + 1);
    return (
        <div className="calBody">
            <Oneday />
            <Oneday />
            <Oneday />
            <Oneday />
            <Oneday />
            <Oneday />
            {days.map((day)=> (
                <Oneday key={day} day={day}/>
            ))}
            <Oneday />
            <Oneday />
            <Oneday />
            <Oneday />
            <Oneday />
        </div>
    )
}

const Cfooter = () => {
    return (
        <div className="calFooter">
            <div className="emptyDiv"></div>
            <h2 className="footerTitle">Kyungil Game Academy</h2>
            <i className="footerSignature">Byungjoo Park</i>
        </div>
    )
}

export {Cheader,Cbody,Cfooter};