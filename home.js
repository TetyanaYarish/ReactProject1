import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Body from './body';
import Header from './header';
import './body.css';

function Home() {
    const history = useHistory();
    const [names, setNames] = useState(['Milk', 'Butter', 'Bread']);
    function addName(name) {
      
        if (names.length < 5) {
            let new_array = Array.from(names);
            new_array.push(name);
            setNames(new_array);
        } else {
            alert('Maximum of 5 reached.');
        }
    }

    // TASK 5 - Add delete button
    function deleteName(index) {
        let new_array = Array.from(names);
        new_array.splice(index, 1);
        setNames(new_array);
    }

    function onBack() {
        history.goBack();
    }


    return (
        <div className="page">
          <Body data={names} deleteName={deleteName} />
            <h1>
            <Header addName={addName} />
                <button onClick={onBack}>Back to previous page</button> </h1>
           
        </div>

    );
}

export default Home;
