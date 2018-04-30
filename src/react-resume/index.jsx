import Timeline      from './../react-timeline/index.jsx';
import Qualification from './../react-qualification/index.jsx';
import PersonalInfo  from './../react-personal-info/index.jsx';
import resume        from './resume.json';
import React         from 'react';
import ReactDOM      from 'react-dom';

class App extends React.Component {

	render() {
	
		return (

			<div className="App">
				<PersonalInfo content={resume.personalInfo}/>
				<Qualification content={resume.qualifications}/>
				<Timeline lang={resume.lang} content={resume.timeline}/>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));