// Core
import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring'
import { useGesture } from 'react-use-gesture'

// Components
import './Card.css';

const Card = (props) => {
    // Props
    const { title, id } = props;
    const [{ x, y }, set] = useSpring(() => ({ x: 0, y: 0 }));
    // State
    const [ drag, setDrag ] = useState(false);

    const bind = useGesture({
        onDrag: ({ down, movement: [mx, my], dragging }) => {
            set({ x: down ? mx : 0, y: down ? my : 0 });
        },
        onDragStart: ({ dragging }) => setDrag(dragging),
        onDragEnd: ({ dragging }) => setDrag(dragging),
    });

    return (
        <animated.div {...bind()} style={{ x, y }}>
            <div
                className = {`card ${ drag ? 'moved' : ''}`}
            >{ title }</div>
        </animated.div>
    );
};

export { Card };
