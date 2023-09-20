import { useState } from 'react';

import './TextDrop.css';

export default function TextDrop({title, text}) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);

    const dropdownStyle = {
        width: "100%",
        textAlign: "left",
        border: "none",
        borderRadius: "0.5vw",
        background: dropdownOpen ? "white" : "#F0F0F0"
    }

    return (
        <div className='text-drop'>
            <button onClick={toggle} style={dropdownStyle} >
                {dropdownOpen ? '\u25B2' : '\u25BC'} {title} 
            </button>
            {dropdownOpen && 
                text
            }
        </div>
    )
}
