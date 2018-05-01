import React       from 'react';
import ReactDOM    from 'react-dom';
import Circle      from '../react-circle/index.jsx';
import moment      from 'moment';
import style       from './style.css'

export default class Timeline extends React.Component{


	renderElement(i) {
		let key = btoa(JSON.stringify(i));
		let time = moment(i.timestamp).locale(this.props.lang).format('YYYY MMMM');

		var marginSize        = 18*8;
		var circleSize        = 1*8;
		var circleSpacingSize = 1*8;
		var lineSize          = 2;

		const timeStyle = {
			"width"      : marginSize+"px",
			"display"    : "inline-block",
			"textAlign" : "right"
        };

        const circleStyle = {
        	"margin"      : "0px "+(circleSpacingSize/2)+"px 0px "+circleSpacingSize+"px",
        	"display"     : "inline-block"
        };

        const achievementStyle = {
			"marginLeft"     : (marginSize+circleSpacingSize+(circleSize/2)-(lineSize/2))+"px",
			"marginBottom"   : "-12px",
			"marginTop"      : "-12px",
			"borderLeft"     : lineSize+"px solid #5c98ff",
			"display"        : "inline-block",
			"padding"        : "6mm"
        };

        const locationStyle = {
        	"whiteSpace" : "nowrap"
        };

		return (
			
			<div key={key}>
				
				<div style={locationStyle}>					
					<span style={timeStyle}> {time} </span> 
					<div  style={circleStyle}><Circle size={circleSize+"px"} color="#5c98ff"/></div> 
					<span style={locationStyle}> {i.location} </span>
				</div>
				
				<div style={achievementStyle}> {i.achievement} </div>
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