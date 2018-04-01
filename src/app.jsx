import React         from 'react';
import ReactDOM      from 'react-dom';
import Circle        from './components/circle/index.jsx';
import Timeline      from './components/timeline/index.jsx';
import resumeContent from './resume.json';

class App extends React.Component {

	render() {
	
		return (

			<div className="App">
				<Timeline content={resumeContent.timeline}/>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));