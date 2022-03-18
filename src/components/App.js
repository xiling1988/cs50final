import React from 'react';
import '../App.css';
import Button from 'react-bootstrap/Button';
import NitsModal from './NitsModal';
import { useState } from 'react';




function App() {

  const [started, setStarted] = useState(false);

  return (
  <div className="App bg-image">
    <header className="App-header">
      <div className='container'>
        <h1 className='title'>NITS BRIEFING</h1>
        <Button className='start-btn' variant='danger' onClick={() => setStarted(true)}>Start</Button>
        <NitsModal className='modal' show={started} onHide={() => setStarted(false)}/>
      </div>
    </header>
  </div>
  );
}

// const starter = () => {
//   setStart(!start);
// };

export default App;
