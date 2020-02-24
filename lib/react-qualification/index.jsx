import React    from 'react';
import ReactDOM from 'react-dom';
import style    from './style.css';
import { v4 as uuidv4 } from 'uuid';

export default class Qualification extends React.Component{


	renderExperience(o, i){
		let key = uuidv4();

		const cardHeaderStyle = {
	    	"fontWeight" : "bold" 
	    };

	    const briefStyle = {
	    	"marginRight" : "3mm" 
	    };

		return (
			<span 
				className={"popover popover-"+ (i>3?"bottom":"right")} 
				key={key} 
				style={briefStyle}> 
				{o.brief} 

				<div className="popover-container">
			    <div className="card">
			      <div className="card-header" style={cardHeaderStyle}> {o.brief} </div>
			      <div className="card-body"> {o.detail} </div>
			    </div>
			  </div>
			</span>
		);
	}

	renderQualification(i) {
		let key = uuidv4();

		const qualificationStyle = {
			"margin" : "7mm 13mm 7mm 5mm"
	    };

	    const jobStyle = {
	    	"fontWeight" : "bold" 
	    };

		return (
			
			<div key={key} style={qualificationStyle}>
				<div><span style={jobStyle}> {i.job} </span></div> 
				{ i.experiences.map(this.renderExperience) } 
			</div>
		);
	}

	render(){
		
		return (
			<div className="Qualification">
				{ this.props.content.map(this.renderQualification.bind(this)) }
			</div>
		);
	}
}