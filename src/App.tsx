import { useEffect, useRef, useState } from 'react';
import './App.css';

function App() {
	const userNameRef = useRef<HTMLInputElement>(null);
	const [userName, setUserName] = useState<String>('');

	useEffect(() => {
		const timer = setTimeout(() => {
			console.log('timer in typescript');
		}, 1000);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	const handleClick = () => {
		console.log(userNameRef?.current?.value);
		setUserName(userNameRef?.current?.value || '');
	};

	return (
		<div className='App'>
			<input type='text' ref={userNameRef} /> <br />
			<button onClick={handleClick}>getName</button>
			Check console to view the timer
			<br />
			user : {userName}
		</div>
	);
}

export default App;
