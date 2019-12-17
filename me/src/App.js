import React from 'react';
import Typist from 'react-typist';
import '/home/galimijohn/me/me/node_modules/react-typist/dist/Typist.css';

function App() {
	return (
		<div className = 'TypistWelcome'>
			<Typist
				className = 'TypistWelcome-main'
			>
				<span>Hi, my name is John.</span>
				<br />
				<div className = 'container'>
					<p>I'm a full stack engineer based in Boston.</p>
				</div>
				Welcome to my website!	
			</Typist>
		</div>

	);
};

export default App;
