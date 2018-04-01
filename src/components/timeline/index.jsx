import React from 'react';
import ReactDOM from 'react-dom';
import css from './style.css'

export default class Timeline extends React.Component{

	renderElement(i) {
		let date = new Date(i.timestamp);

		let month = ['January','February','March','April',
			'May','June','July','August','September','October',
			'November','December'][date.getMonth()];

		let year = date.getFullYear(); 

		return (
			<div>{month} {year} {i.location} {i.achievement} </div>
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