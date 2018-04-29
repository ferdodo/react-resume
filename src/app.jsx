import spectre       from './css-spectre/index.jsx'
import customFont    from './css-customFont/index.jsx';
import Timeline      from './react-timeline/index.jsx';
import Qualification from './react-qualification/index.jsx';
import resume        from './thomas-riffard.json';
import React         from 'react';
import ReactDOM      from 'react-dom';

class App extends React.Component {

	render() {
	
		return (

			<div className="App">
				<Qualification content={resume.qualifications}/>
				<Timeline lang={resume.lang} content={resume.timeline}/>
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.getElementById('app'));