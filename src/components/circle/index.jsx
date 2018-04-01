import React from 'react';
import ReactDOM from 'react-dom';
import css from './style.css'

export default class Circle extends React.Component{

	render(){

		const divStyle = {
            "background-color" : this.props.color,
			"width"            : this.props.size,
			"height"           : this.props.size 
        };
		
		return (
			<div className="Circle" style={divStyle}></div>
		);
	}
}