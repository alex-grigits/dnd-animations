import React, { useState } from 'react';
import './App.css';

// Components
import { Stream } from './Components/Stream';
import { Panel } from './Components/Panel';
import { Hud } from './Components/Hud';

function App() {
  // State
  const [ start, setStart ] = useState(false);
  const [ gameType, setGameType ] = useState('IN_GAME');

  const setGameStart = () => {
    setStart(true);
  };

  const setGameEnd = () => {
    setStart(false);
  };

    const setInGameType = () => {
        setGameType('IN_GAME');
    };
    const setPreGameType = () => {
        setGameType('PRE_GAME');
    };

  return (
    <div className = 'main'>
      <Hud
          gameType = { gameType }
          setPreGameType = { setPreGameType }
          setInGameType = { setInGameType }
        start = { start }
        setGameStart = { setGameStart }
        setGameEnd = { setGameEnd }
      />
      <Stream
          gameType = { gameType }
      />
      <Panel
          gameType = { gameType }
          start = { start }
      />
    </div>
  );
}

export default App;
