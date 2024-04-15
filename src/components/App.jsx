import { useState } from 'react';
import './App.css';

function App() {
  const [tema, setTema] = useState(false);
  const cambiartema = () => {
    setTema(true)
    
    if(setTema === true){
      setTema(false)
    }

    console.log(tema);
  };
  return (
    <div className='body'>
      <h1>Fondo</h1>
      <button onClick={cambiartema}>Tema</button>
    </div>
  );
}

export default App;
