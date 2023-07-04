import React, { Component } from "react";

class Mycom extends Component {
    // 컴포넌트의 구조는 같은데 내용이 다른경우
    // 재사용성이 용이해서 컴포너트를 만든다고 했는데
    // props라는 값을 받아서 그려주면 된다.
    constructor(props){
        super(props)
        // super : 부모의 생성자 함수를 호출 해줘야 this를 사용할 수 있다.
        // this
        this.state = {
            num : 0
        }
    }
    // 컴포넌트가 초기에 생성되면
    // constructor -> render -> componentDidMount
    componentDidMount(){
        console.log("I'm created");
    }

    // 컴포넌트의 상태에 변화가 생기면
    // 상태 변환 후 -> componentDidUpdate
    componentDidUpdate(){
        console.log(this.props.name + " : My state has changed");
    }

    render(){
        return(
            <div className={"com " + this.props.Cname}>
                {this.props.name}
                <button onClick={()=>{
                    this.setState(prevstate => ({
                        num : prevstate.num + 1}));
                    console.log(this.state.num);
                }}>change state</button>
            </div>
        )
    }
}

class Mycom2 extends Component {
    render(){
        return(
            <div>
                hello, i am component #2
            </div>
        )
    }
}

// 다수의 컴포넌트를 내보낼 경우
export {Mycom, Mycom2};

// 하나의 컴포넌트를 내보낼 경우
// export default Mycom;