import React    from 'react';
import ReactDOM from 'react-dom';

export default class Qualification extends React.Component{


	renderElement(i) {
		let key = btoa(JSON.stringify(i));

		return (
			
			<div key={key}>
				<span> {i.job} </span>
			</div>
		);
	}

	render(){
		
		return (
			<div className="Qualification">
				{ this.props.content.map(this.renderElement) }
			</div>
		);
	}
}