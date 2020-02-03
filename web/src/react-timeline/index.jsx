import React       from 'react';
import ReactDOM    from 'react-dom';
import Circle      from '../react-circle/index.jsx';
import moment      from 'moment';
import style       from './style.css'

export default class Timeline extends React.Component{


	renderElement(i) {
		let key = btoa(JSON.stringify(i));
		let time = moment(i.timestamp).locale(this.props.lang).format('YYYY MMMM');

		var a = 18*8; // margin size
		var b = 1*8;  // circle size
		var c = 1*8;  // circle spacing
		var d = 2;    // line size

		const timeStyle = {"width" : a+"px"};

        const circleStyle = {
        	"margin"      : "0px "+(c/2)+"px 0px "+c+"px",
        	"display"     : "inline-block"
        };

        const achievementStyle = {
			"marginLeft"     : (a+c+(b/2)-(d/2))+"px",
			"borderLeft"     : d+"px solid #5c98ff"
        };

		return (
			
			<div key={key}>
				
				<div className="TimelineHeader">					
					
					<span 
						style={timeStyle} 
						className="TimelineTime"> 
						{time} 
					</span> 
					
					<div 
						style={circleStyle} 
						className="TimelineCircle">
						<Circle size={b+"px"} color="#5c98ff"/>
					</div> 
					
					<span 
						className="TimelineLocation"> 
						{i.location} 
					</span>
				</div>
				
				<div 
					style={achievementStyle} 
					className="TimelineAchievement"> 
					{i.achievement}
				</div>
			</div>
		);
	}

	render(){
		
		return (
			<div className="Timeline">
				{ this.props.content.map(this.renderElement.bind(this)) }
			</div>
		);
	}
}