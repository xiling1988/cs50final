import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import NitsModal from './NitsModal';
import { useState } from 'react';




function App() {

  const [started, setStarted] = useState(false);

  return (
  <div className="App">
    <header className="App-header">
      <div className='container'>
        <Button variant='primary' onClick={() => setStarted(true)}>Start</Button>
        <NitsModal show={started} onHide={() => setStarted(false)}/>
      </div>
    </header>
  </div>
  );
}

// const starter = () => {
//   setStart(!start);
// };

export default App;
