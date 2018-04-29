import React    from 'react';
import ReactDOM from 'react-dom';

export default class Qualification extends React.Component{


	renderExperience(o, i){
		let key = btoa(JSON.stringify(o));

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

				<div class="popover-container">
			    <div class="card">
			      <div class="card-header" style={cardHeaderStyle}> {o.brief} </div>
			      <div class="card-body"> {o.detail} </div>
			    </div>
			  </div>
			</span>
		);
	}

	renderQualification(i) {
		let key = btoa(JSON.stringify(i));

		const qualificationStyle = {
			"margin" : "13mm"
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