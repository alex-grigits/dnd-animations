// Core
import React from 'react';

// Components
import './Hand.css';
import { Card } from './Card';

const Hand = (props) => {
    // Props
    const { cards } = props;
    
    return (
        <div className = 'hand'>
            {
                cards.map(card => (
                    <Card
                        title = { card.title }
                        key = { card.id }
                        id = { card.id }
                    />
                ))
            }
        </div>
    );
};

export { Hand };
