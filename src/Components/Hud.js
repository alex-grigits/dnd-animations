// Core
import React from 'react';

// Components
import './Hud.css';

const Hud = (props) => {
    const {
        start,
        setGameStart,
        setGameEnd,
        gameType,
        setPreGameType,
        setInGameType
    } = props;

    const _handleClick = () => {
        if (start) {
            setGameEnd();
        } else {
            setGameStart();
        }
    };

    const _handleGameType = () => {
        if (gameType === 'IN_GAME') {
            setPreGameType();
        } else {
            setInGameType();
        }
    };

    return (
        <div className = 'hud'>
            <button onClick = { _handleClick }>
                { start ? 'End' : 'Start' }
            </button>
            <button onClick = { _handleGameType }>
                { gameType }
            </button>
        </div>
    );
};

export { Hud };
