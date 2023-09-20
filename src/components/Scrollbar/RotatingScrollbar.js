import React, { useState, useEffect } from 'react';
import './RotatingScrollbar.css';

const RotatingScrollbar = () => {
    const [rotation, setRotation] = useState(0);
    const [position, setPosition] = useState(0);

    const handleScroll = () => {
        const scrollY = window.scrollY || window.pageYOffset;
        const contentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const rotation = (scrollY / contentHeight) * 360;
        const position = (scrollY / contentHeight) * 100;

        setRotation(rotation);
        setPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="rotating-scrollbar">
            <div className="scroll-indicator-bar" style={{ top: `${position}%` }}>
                <img className="scroll-indicator" src="/assets/Scrollbar/scrollbar-icon.png" style={{ transform: `rotate(${rotation}deg)` }}/>
            </div>
        </div>
    );
};

export default RotatingScrollbar;