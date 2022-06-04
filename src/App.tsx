import { useEffect } from 'react';
import './App.css';

function App() {
	useEffect(() => {
		const timer = setTimeout(() => {
			console.log('timer in typescript');
		}, 1000);

		return () => {
			clearTimeout(timer);
		};
	}, []);
	return <div className='App'>Check console to view the timer</div>;
}

export default App;
