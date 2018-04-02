import React    from 'react';
import ReactDOM from 'react-dom';
import Circle   from '../circle/index.jsx';

export default class Timeline extends React.Component{


	renderElement(i) {
		let key = btoa(JSON.stringify(i));
		let date = new Date(i.timestamp);

		let month = ['January','February','March','April',
			'May','June','July','August','September','October',
			'November','December'][date.getMonth()];

		let year = date.getFullYear(); 

		const timeStyle = {
			"width"      : "4cm",
			"display"    : "inline-block",
			"text-align" : "right"
        };

        const circleStyle = {
        	"margin"      : "0px 1mm 0px 2.5mm",
        	"display"     : "inline-block"
        };

        const achievementStyle = {
        	"margin-left"    : "4.36cm",
        	"margin-bottom"  : "-5px",
        	"margin-top"     : "-5px",
        	"border-left"    : "1mm solid #5c98ff",
        	"display"        : "inline-block",
        	"padding"        : "6mm"
        };

		return (
			
			<div key={key}>
				<span style={timeStyle}> {month} {year} </span> 
				<div style={circleStyle}><Circle size="3mm" color="#5c98ff"/></div> 
				<span> {i.location} </span>
				<br/>
				<div style={achievementStyle}> {i.achievement} </div>
			</div>
		);
	}

	render(){
		
		return (
			<div className="Timeline">
				{ this.props.content.map(this.renderElement) }
			</div>
		);
	}
}