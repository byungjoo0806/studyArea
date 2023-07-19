import { useState } from 'react';
import './App.css';
import Board from './components/Board';

function App() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="App">
      <Board setChecked={setChecked}/>
    </div>
  );
}

export default App;
