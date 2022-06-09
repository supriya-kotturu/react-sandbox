import { useState, useRef } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
	let userName = '';
	const userNameRef = useRef('');
	const handleClick = () => {
		userName = userNameRef.current.value;
		console.log(userNameRef.current?.value);
	};

	useEffect(() => {
		const timer = setTimeout(() => {
			console.log(
				'Timeout is run after 1000 milliseconds. But will be cleared by the return function',
			);
			console.warn(
				'This will run only one time, since the dependancy array is empty.',
			);
		}, 1000);

		return () => {
			console.log(
				'this will run when this component unmounts. Since this is the main component, you might never see this log',
			);
			clearTimeout(timer);
		};
	}, []);

	return (
		<div className='App'>
			<input type='text' ref={userNameRef} />
			<br />
			<button onClick={handleClick}>get name</button>
			<br />
			Check the console for Timer and user name
		</div>
	);
}

export default App;
