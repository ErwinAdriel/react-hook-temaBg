import { useState } from 'react';
import './App.css';

function App() {
  const [tema, setTema] = useState(false)
  return (
    <div className='body'>
      <h1>Fondo</h1>
      <button>Tema</button>
    </div>
  );
}

export default App;
