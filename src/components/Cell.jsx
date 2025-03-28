import React from "react";
import '../App.css';

function Cell(props) {
    const cell = props.cell

    function handleClick() {
        props.onClick(cell.id)
    }

    let className = "cell";
    if (cell.wasClicked) {
        className += " revealed"
    }
    let display = '';
    if (cell.wasClicked) {
        display = cell.id;
    }

    return (
        <div className={className} onClick={handleClick}>
            {display}
        </div>
    )
}

export default Cell