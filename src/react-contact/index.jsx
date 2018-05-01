import React    from 'react';
import ReactDOM from 'react-dom';
import css      from './style.css';

export default class Contact extends React.Component{

	render(){
		
		return (
			<table className="contact">
				{ this.props.content.phone && 
					<tr>
						<td> <div class="icon-container"> <span class="icon icon-phone">&#xF10B;</span> </div> </td>
						<td> {this.props.content.phone} </td> 
					</tr> 
				}

				{ this.props.content.mail && 
					<tr>
						<td> <div class="icon-container"> <span class="icon">&#xE800;</span> </div> </td>
						<td>  {this.props.content.mail} </td> 
					</tr>  
				}

				{ this.props.content.website && 
					<tr>
						<td> <div class="icon-container"> <span class="icon">&#xF018;</span> </div> </td>
						<td> {this.props.content.website} </td> 
					</tr>  
				}

				{ this.props.content.github && 
					<tr>
						<td> <div class="icon-container"> <span class="icon">&#xF09B;</span> </div> </td>
						<td> {this.props.content.github} </td> 
					</tr>  
				}
			</table>
		);
	}
}