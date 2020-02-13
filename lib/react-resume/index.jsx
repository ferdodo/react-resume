import Timeline      from './../react-timeline/index.jsx';
import Qualification from './../react-qualification/index.jsx';
import PersonalInfo  from './../react-personal-info/index.jsx';
import Contact       from './../react-contact/index.jsx';
import resume        from './resume.json';
import React         from 'react';
import ReactDOM      from 'react-dom';
import style         from './style.css';

class App extends React.Component {

	render() {
	
		return (

			<div className="App">
				<div className="container">
  					<div className="columns">
						<div className="col-6">
							<PersonalInfo content={resume.personalInfo}/>
						</div>
						<div className="col-6">
							<Contact content={resume.contact}/>
						</div>
					</div>
				</div>

				<Qualification content={resume.qualifications}/>
				<Timeline lang={resume.lang} content={resume.timeline}/>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.body);