import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
	const [count, setCount] = useState(0);

	useEffect(() => {
		const timer = setInterval(() => {
			console.log('Timer is ticking every 30000 milliseconds');
		}, 30000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	return <div className='App'>Check the console for Timer</div>;
}

export default App;
