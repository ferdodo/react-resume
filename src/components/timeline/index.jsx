import React    from 'react';
import ReactDOM from 'react-dom';
import Circle   from '../circle/index.jsx';
import css      from './style.css'

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
        	"margin"  : "1cm",
        	"display" : "inline-block"
        };

		return (
			
			<div key={key}>
				<span style={timeStyle}> {month} {year} </span> 
				<div style={circleStyle}><Circle size="3mm" color="red"/></div> 
				<span> {i.location} </span>
				<br/> 
				<span> {i.achievement} </span>
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