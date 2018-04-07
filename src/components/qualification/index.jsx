import React    from 'react';
import ReactDOM from 'react-dom';

export default class Qualification extends React.Component{


	renderExperience(i){
		let key = btoa(JSON.stringify(i));

		return (
			<span key={key}> {i} </span>
		);
	}

	renderQualification(i) {
		let key = btoa(JSON.stringify(i));

		const qualificationStyle = {
			"margin" : "13mm"
	    };

		return (
			
			<div key={key} style={qualificationStyle}>
				<div><span><b> {i.job} </b></span></div> 
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