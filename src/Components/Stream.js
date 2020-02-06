// Core
import React from 'react';

// Components
import './Stream.css';

const Stream = (props) => {
    const { gameType } = props;

    return (
        <div className = 'stream'>
            Stream {gameType}
        </div>
    );
};

export { Stream };
