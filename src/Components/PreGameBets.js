// Core
import React from 'react';

// Components
import './PreGameBets.css';

const PreGameBets = (props) => {
    return (
        <div className = 'pre-game-bets'>
            <div id = 'first-bet'>Bet 1</div>
            <div id = 'second-bet'>Bet 2</div>
        </div>
    );
};

export { PreGameBets };
