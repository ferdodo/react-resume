import React         from 'react';
import ReactDOM      from 'react-dom';
import Timeline      from './components/timeline/index.jsx';
import Qualification from './components/qualification/index.jsx';
import resumeContent from './resume.json';

class App extends React.Component {

	render() {
	
		return (

			<div className="App">
				<Qualification content={resumeContent.qualifications}/>
				<Timeline lang={resumeContent.lang} content={resumeContent.timeline}/>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));