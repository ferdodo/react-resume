import React       from 'react';
import ReactDOM    from 'react-dom';
import Circle      from '../react-circle/index.jsx';
import moment      from 'moment';
import style       from './style.css'

export default class Timeline extends React.Component{

	constructor(props){
		super(props);
		this.A = 18*8; // margin size
		this.B = 1*8;  // circle size
		this.C = 1*8;  // circle spacing
		this.D = 2;    // line size
	}


	renderAchievement(achievement, index, achievements){
		Timeline.checkInstance(this);
		const key = btoa(JSON.stringify(achievement)+index);
		const marginLeft = (this.A+this.C+(this.B/2)-(this.D/2))+"px";
		const borderLeft = this.D+"px solid #5c98ff";
		const isLast = (index+1) == achievements.length;
		if (isLast) achievement += "\n\n";

		return (
			<div 
				className="achievement"
				key={key}
				style={{marginLeft, borderLeft}}> 
				{achievement}
			</div>
		)
	}


	renderCircle(){
		Timeline.checkInstance(this);
        const circleStyle = {"margin" : "0px "+(this.C/2)+"px 0px "+this.C+"px"};

		return(
			<div 
				style={circleStyle} 
				className="circle">
				<Circle color="#5c98ff" size={this.B+"px"}/>
			</div> 
		)
	}


	renderTime(element){
		Timeline.checkInstance(this);
		const time = moment(element.timestamp).locale(this.props.lang).format('YYYY MMMM');
		const timeStyle = {"width" : this.A+"px"};

		return(
			<span 
				style={timeStyle} 
				className="time"> 
				{time} <br/> {element.duration}
			</span>
		)
	}


	renderHeader(element){
		return(
			<span className="location"> <b> {element.position} </b> - {element.location} </span>
		)
	}


	renderElement(element, index) {
		Timeline.checkInstance(this);
		const key = btoa(JSON.stringify(element)+index);

		return (
			<div className="element" key={key}>
				<div className="header">
					{ this.renderTime(element) }
					{ this.renderCircle() }
					{ this.renderHeader(element) }
				</div>
				
				{ element.achievements.map(this.renderAchievement, this) }
			</div>
		);
	}


	render(){
		return (
			<div className="Timeline">
				{ this.props.content.map(this.renderElement, this) }
			</div>
		);
	}

	static checkInstance(obj){
		if (!obj instanceof Timeline) throw new Error("Object is not an instance of Timeline !");
	}
}