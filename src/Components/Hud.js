// Core
import React from 'react';

// Components
import './Hud.css';

const Hud = (props) => {
    const { start, setGameStart, setGameEnd } = props;

    const _handleClick = () => {
        if (start) {
            setGameEnd();
        } else {
            setGameStart();
        }
    }
    return (
        <div className = 'hud'>
            <button onClick = { _handleClick }>
                { start ? 'End' : 'Start' }
            </button>
        </div>
    );
};

export { Hud };
