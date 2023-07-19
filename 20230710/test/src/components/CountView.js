import React from 'react';
import { useSelector } from 'react-redux';
import CountView2 from './CountView2';

const CountView = () => {
    // store 값을 가져와보자
    // useSelector - 전역 상태 값을 조회할때 사용하는 react hook 함수 (react-redux 라이브러리에서 제공)
    // state를 받고, state에서 count를 주시하고 있는 상황
    // count 값이 변경 되었을때 리렌더링 된다.
    const count = useSelector(state => state.count);
    return (
      <div>
        {count}
        <CountView2 />
      </div>
    )
}

export default CountView;