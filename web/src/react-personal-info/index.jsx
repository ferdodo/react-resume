import React      from 'react';
import ReactDOM   from 'react-dom';
import style      from './style.css';
import profilePic from './../profile.jpg'; 

export default class PersonalInfo extends React.Component{

	renderInfo(i) {
		let key = btoa(JSON.stringify(i));

		return (			
			<p className="PersonalInfo" key={key}> {i} </p>
		);
	}

	render(){
		
		const imageStyle={
			backgroundImage: "url(" + profilePic + ")"
		}

		return (
			<div className="Personal">
				<div style={imageStyle} className="PersonalPicture"></div>

				<p className="PersonalInfoName"> {this.props.content.name} </p>
				{ this.props.content.infos.map(this.renderInfo.bind(this)) }
			</div>
		);
	}
}