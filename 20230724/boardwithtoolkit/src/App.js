import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Main,Login,Add,Signup } from './pages';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/main' element={<Main />}></Route>
        <Route path='/add' element={<Add />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </div>
  );
}

export default App;
