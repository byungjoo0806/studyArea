import { Component } from "react";
import Mycom3 from "../components/Mycom3";

export default class Main extends Component{
    render(){
        return(
            <>
                main page <br/>
                
                <Mycom3 newNum={1} newNum2={2} newNum3={3}/>
            </>
        )
    }
}