import React from 'react';
import './row.css';
// TASK 6 - create row component

function Row(props) {
    return (
        <div key={"name" + props.index} className="body-row">
            {props.index + 1}. <span>{props.value}</span>
            <button onClick={props.onRowDelete}> Remove </button>
        </div>
    );
}

export default Row;
