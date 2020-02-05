import React, { useState } from 'react';
import './App.css';

// Components
import { Stream } from './Components/Stream';
import { Panel } from './Components/Panel';
import { Hud } from './Components/Hud';

function App() {
  // State
  const [ start, setStart ] = useState(false);

  const setGameStart = () => {
    setStart(true);
  }

  const setGameEnd = () => {
    setStart(false);
  }

  return (
    <div className = 'main'>
      <Hud
        start = { start }
        setGameStart = { setGameStart }
        setGameEnd = { setGameEnd }
      />
      <Stream />
      <Panel start = { start } />
    </div>
  );
}

export default App;
