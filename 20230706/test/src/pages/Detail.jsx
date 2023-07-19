import React from 'react'
import { Body, Header } from '../components';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';

// useLocation : hook 함수, 현재 브라우저의 url 위치 값을 가져오는데 사용
// useParams : hook 함수, url의 params 값을 접근하는데 사용; 객체 형태로 가져올 수 있다.
// useSearchParams : hook 함수, url의 쿼리값을 가져올때 사용; 문자열을 해석해서 쿼리 매개변수의 값을 가져온다.

const Detail = ({login}) => {
    let temp = [{num : 10, name : "shirt"},{num : 20, name : "pants"},{num : 30, name : "hats"},{num : 40, name : "gloves"}];
    const location = useLocation();
    console.log(location);
    const params = useParams();
    console.log(params);
    const [query, setQuery] = useSearchParams();
    // query.get 메소드 : 쿼리문의 키로 값을 가져올 수 있다.
    console.log(query.get("id"));
    console.log(query.get("num"));
    return (
        <div>
            <Header name={"detail page"} />
            <Body path={"/"} name={"main"} login={login} />
            <Body path={"/shop"} name={"shop"} login={login} />
            <div>
                # {temp && temp[params.id].num}
            </div>
            <div>
                name : {temp && temp[params.id].name}
            </div>
        </div>
    )
}

export default Detail;