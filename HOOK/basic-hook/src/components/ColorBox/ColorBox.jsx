import { useState } from "react";

import './ColorBox.scss';

import React from 'react';
import PropTypes from 'prop-types';

ColorBox.propTypes = {

};

function getRandomColor() {
    const COLOR_LIST = ['blue', 'green', 'yellow', 'orange'];
    let randomIndex = Math.floor(Math.random() * COLOR_LIST.length);
    return COLOR_LIST[randomIndex];
}

function ColorBox() {
    const [color, setColor] = useState(() => {
        let inintColor = localStorage.getItem('box_color') || 'deeppink';
        return inintColor
    })

    function onColorBoxClick() {
        // get random color ---> set color

        const newColor = getRandomColor();
        setColor(newColor);

        localStorage.setItem('box_color', newColor);
    }

    return (
        <div>
            <div
                className="color-box"
                style={{
                    backgroundColor: color,
                    width: 150,
                    height: 150,
                    margin: 'auto'
                }}
                onClick={onColorBoxClick}
            >
            </div>
            <p style={{ textAlign: 'center' }}>Click box to change color</p>
        </div>

    );
}

export default ColorBox;