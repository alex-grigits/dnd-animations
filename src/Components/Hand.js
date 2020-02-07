// Core
import React from 'react';
import { useTrail, animated } from 'react-spring';

// Components
import './Hand.css';
import { Card } from './Card';

const config = { mass: 10, tension: 1200, friction: 150 };

const Hand = (props) => {
    // Props
    const { cards, gameType } = props;

    const trail = useTrail(cards.length, {
        config,
        opacity: cards.length > 0 ? 1 : 0,
        x:       cards.length > 0 ? 0 : 400,
        from:    { opacity: 0, x: 400 },
    });

    const renderCardGroup = (cardList) => {
        return trail.map(({ x, ...rest }, index) => {
            return index < cardList.length
                ? <animated.div
                    key = { index }
                    style = { { ...rest, transform: x.interpolate((x) => `translate3d(0,${x}px,0)`) } }>
                    <Card
                        gameType = { gameType }
                        title = { cardList[index].title }
                        key = { cardList[index].id }
                        id = { cardList[index].id }
                        cardsCount = { cardList.length }
                        index = { index }
                    />
                </animated.div>
                : null;
        });
    };

    return (
        <div className = 'hand'>
            {
                renderCardGroup(cards)
            }
        </div>
    );
};

export { Hand };
