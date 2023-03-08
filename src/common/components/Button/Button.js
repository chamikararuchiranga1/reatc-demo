import React from "react";
import './style.css';

function Button ({name, onClick}) {
    return (
        <button className="button" onClick={()=>onClick(name)}>
            {name}
        </button>
    )
}

export default Button;