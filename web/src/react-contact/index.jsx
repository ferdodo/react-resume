import React    from 'react';
import ReactDOM from 'react-dom';
import css      from './style.css';

export default class Contact extends React.Component{

	renderContactItem(i){
		let key = btoa(JSON.stringify(i));
		const iconClasses = "icon " + i.iconClass;

		return (

			<tr key={key}>
			
				<td>				
					<div className="icon-container">
						<span className={iconClasses}> {String.fromCharCode(i.icon)} </span>
					</div>
				</td>
				
				<td>{i.content}</td>
			</tr> 
		);
	}

	render(){

		let items = [
			{"content" : this.props.content.phone,   "icon" : 0xF10B, "iconClass" : "icon-phone"},
			{"content" : this.props.content.mail,    "icon" : 0xE800},
			{"content" : this.props.content.website, "icon" : 0xF018},
			{"content" : this.props.content.github,  "icon" : 0xF09B}
		].filter(o=>!!o.content);
		
		return (
			<table className="contact"><tbody>{items.map(this.renderContactItem)}</tbody></table>
		);
	}
}