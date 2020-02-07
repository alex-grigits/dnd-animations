// Core
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-use-gesture';
import * as easings from 'd3-ease'

// Components
import './Card.css';

function getStyles ({ offset: { y, deg }, drag}) {
    const transform =
        `translate3d(0px, ${y}px, 0) rotate(${drag ? '0' : deg}deg) scale(${drag ? 1.2 : 1})`;

    return {
        transform,
        WebkitTransform: transform,
    };
}

const transformStyles = (i, cardsCount) => {
    const positions = {
        1: [ { y: 0, deg: 0 } ],
        2: [ { y: 0, deg: -2.5 }, { y: 0, deg: 2.5 } ],
        3: [
            { y: 8, deg: -5 },
            { y: 0, deg: 0 },
            { y: 8, deg: 5 }
        ],
        4: [
            { y: 8, deg: -5 },
            { y: 0, deg: -2 },
            { y: 0, deg: 2 },
            { y: 8, deg: 5 }
        ],
        5: [
            { y: 16, deg: -10 },
            { y: 4, deg: -5 },
            { y: 0, deg: 0 },
            { y: 4, deg: 5 },
            { y: 16, deg: 10 }
        ],
        6: [
            { y: 24, deg: -12.5 },
            { y: 8, deg: -7.5 },
            { y: 0, deg: -2.5 },
            { y: 0, deg: 2.5 },
            { y: 8, deg: 7.5 },
            { y: 24, deg: 12.5 }
        ],
        7: [
            { y: 36, deg: -15 },
            { y: 16, deg: -10 },
            { y: 4, deg: -5 },
            { y: 0, deg: 0 },
            { y: 4, deg: 5 },
            { y: 16, deg: 10 },
            { y: 36, deg: 15 }
        ],
        8: [
            { y: 47, deg: -17.5 },
            { y: 24, deg: -12.5 },
            { y: 8, deg: -7.5 },
            { y: 0, deg: -2.5 },
            { y: 0, deg: 2.5 },
            { y: 8, deg: 7.5 },
            { y: 24, deg: 12.5 },
            { y: 47, deg: 17.5 }
        ],
    };
    
    return i >= 0
        ? { y: positions[cardsCount][i].y, deg: positions[cardsCount][i].deg }
        : { y: 0, deg: 0 };
};

const Card = (props) => {
    // Props
    const { title, id, gameType, cardsCount, index } = props;
    const [{ x, y }, set] = useSpring(() => ({
        x: 0,
        y: 0,
    }));
    // State
    const [ drag, setDrag ] = useState(false);
    const [ flipped, setFlipped ] = useState(false);

    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(1000px) rotateY(${flipped ? -180 : 0}deg)`,
    });

    const bind = useGesture({
        onDrag: ({ args: [originalIndex], down, movement: [mx, my], dragging }) => {
            setDrag((x.value !== 0 || y.value !== 0) && dragging);
            set({
                x: down ? mx : 0,
                y: down ? my : 0,
                config: {
                    mass: 0.1,
                    tension: down ? 500 : 240,
                    friction: down ? 5 : 50,
                    easing: easings.easePolyIn,
                    duration: down ? 0 : 400
                }
            });
        },
    });

    const _handleMouseUp = () => {
        if (!drag) {
            setFlipped(state => !state)
        }
    }

    return (
        <animated.div
            {...bind()}
            style={{ x, y, margin: '0 5px' }}
            onMouseUp={ _handleMouseUp }
            className = { `draggable ${ drag ? 'moved' : ''}` }
        >
            <div style={{
                transition: 'all 0.2s ease-in',
                ...getStyles({
                    offset: transformStyles(index, cardsCount),
                    drag
                })
            }}>
                <animated.div
                    style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
                    className = {`card front`}
                >
                    { title }<br/>{gameType}
                </animated.div>
                <animated.div
                    style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(-180deg)`) }}
                    className = {`card back`}
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit
                </animated.div>
            </div>
        </animated.div>
    );
};

export { Card };
