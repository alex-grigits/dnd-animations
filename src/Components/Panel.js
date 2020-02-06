// Core
import React, { useEffect, useState } from 'react';

// Components
import './Panel.css';
import { Hand } from './Hand';
import { PreGameBets } from './PreGameBets';

// Data
const data = [
    { id: 1, title: 'First' },
    { id: 2, title: 'Second' },
    { id: 3, title: 'Third' },
    { id: 4, title: 'Fourth' },
    { id: 5, title: 'Fifth' }
];

const Panel = (props) => {
    // Props
    const { start, gameType } = props;
    // State
    const [ cards, setCards ] = useState([]);

    useEffect(() => {
        if (start) {
            setCards(data);
        } else {
            setCards([]);
        }

    }, [ start ]);

    return (
        <div className = 'panel'>
            <Hand
                gameType = { gameType }
                cards = { cards }
            />
            <PreGameBets />
        </div>
    );
};

export { Panel };
