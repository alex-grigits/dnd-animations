// Core
import React from 'react';

// Components
import './Card.css';

const Card = (props) => {
    const { title, id } = props;

    return (
        <div className = 'card'>
            { title }
        </div>
    );
};

export { Card };
