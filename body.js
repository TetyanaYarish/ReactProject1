import React from 'react';
import './body.css';
import Row from './row';


function Body(props) {
    //console.log(props);

    function renderData() {
        let items = [];
        //loop: for forEach map
        for (let i = 0; i < props.data.length; i++) {
            function onRowDelete() {
                props.deleteName(i);
            }
            // TASK 3 - Add row number: {i+1}
            items.push(
                <Row
                    index={i}
                    value={props.data[i]}
                    onRowDelete={onRowDelete}
                />
            );
        }
        return items;
    }

    return (
        <div className="body-container">
            <h1>List of product</h1>
            <div className="body-list">             
                {renderData()}
            </div>     
                
        </div> 
    );
}

export default Body;
