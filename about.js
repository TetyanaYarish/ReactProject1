import React from 'react';
import { useHistory } from 'react-router-dom';
import Back from './back.jpg';
import '../App.css';


function Add_Note() {
    const history = useHistory();


	function onBack() {
		history.goBack();
	}
	return (
		<div className ="container">
		<div  className="page" style={{ backgroundColor: "lightblue" }}>
				<h1>If you want to go to previous page, click on the image below</h1>
				<img className="body-row" onClick={onBack} src={Back} alt="back" style={{
				resizeMode: "cover",
				height: 200,
				width: 500
			}} />
			<br/>
			<button className="body-row" onClick={onBack}>BACK</button>		
			</div>	  
			</div>
	);
}


export default Add_Note;
