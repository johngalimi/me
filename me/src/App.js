import React from 'react';
import Typist from 'react-typist';
import '../node_modules/react-typist/dist/Typist.css';
import './App.css'

function App() {
	return (
		<React.Fragment>
			<div className = 'TypistWelcome'>
				<Typist cursor = {{ hideWhenDone: true }}>
					<h1>Hi, I'm John</h1>
					<strong>I'm a full stack engineer based in Boston</strong>
				</Typist>
			</div>
		</React.Fragment>
	);
};

export default App;
