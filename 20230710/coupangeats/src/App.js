import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Main, Login, Mypage, Order } from './pages';
import { useSelector } from 'react-redux';

function App() {
  const loginStat = useSelector(state => state.isLogin);
  // order to login
  const RedirectOrder = ()=>{
    return loginStat === true ? <Order /> : <Navigate to={"/login"} />;
  };
  // mypage to login
  const RedirectMypage = ()=>{
    return loginStat === true ? <Mypage /> : <Navigate to={"/login"} />;
  };


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path="/order" element={<RedirectOrder />}></Route>
        <Route path="/mypage" element={<RedirectMypage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
