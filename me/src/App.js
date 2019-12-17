import React from 'react';
import Typist from 'react-typist';
import '/home/galimijohn/me/me/node_modules/react-typist/dist/Typist.css';
import './App.css'

function App() {
	return (
		<React.Fragment>
			<div className = 'TypistWelcome'>
				<Typist cursor = {{ hideWhenDone: true }}>
					<h2>Hi, I'm John.</h2>
					<p>I'm a full stack engineer based in Boston.</p>
					<p>Check out my experience and projects below...</p>
				</Typist>
			</div>
		</React.Fragment>
	);
};

export default App;
