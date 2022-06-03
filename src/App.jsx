import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
	const [count, setCount] = useState(0);

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

	return <div className='App'>Check the console for Timer</div>;
}

export default App;
