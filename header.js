import React, { useState } from 'react';
import './body.css';

function Header(props) {
    const [input, setInput] = useState('');

    function onInputChange(event) {
        setInput(event.target.value);
    }

    function onAddClick() {
        // TASK 1 - Validate input
        let value = input.trim();
        if (value) {
            props.addName(input);
            setInput('');
        } else {
            alert('Please supply a valid value.');
        }
    }

    return (
        <div className="body-container">
            Insert any product:
			<input id="myInput"
                value={input}
                onChange={onInputChange}
                className="body-row"
            />
            <button
                onClick={onAddClick}
                className="body-row">
                ADD
			</button>
        </div>
    );
}

export default Header;
