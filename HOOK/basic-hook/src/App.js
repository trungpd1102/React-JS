//import './App.scss';
import { useState } from 'react';

import ToDoList from './components/ToDoList/ToDoList';
import ColorBox from './components/ColorBox/ColorBox';

function App() {
  const [color, setColors] = useState('gray');

  function handleColor() {
    setColors('tomato');
  }

  return (
    <ColorBox />
    // <div className="app">
    //   <h1
    //     style={{color: color}}
    //   >
    //     Hello React Hook
    //   </h1>
    //   <button onClick={handleColor}>Change Color</button>
    // </div>
  );
}

export default App;
