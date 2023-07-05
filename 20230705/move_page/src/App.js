import './App.css';
import { Main, Shop, Login } from './pages';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* Routes => switch */}
      {/* 조건부 렌더링 Routes가 Route 들의 부모 컴포넌트 */}
      {/* Route 컴포넌트는 페이지를 정의 해준다. */}
      {/* Route 컴포넌트는 속성을 두개 준다. */}
      {/* 속성 1. path : 브라우저의 경로 (컴포넌트 페이지를 바꿔서 보여줄 경로) */}
      {/* 속성 2. element : 보여줄 컴포넌트 페이지; path 경로에 브라우저 경로가 맞으면 이 속성에 넣은 컴포넌트를 보여준다. */}
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='login' element={<Login />} />
        <Route path='shop' element={<Shop />} />
      </Routes>
    </div>
  );
}

export default App;
