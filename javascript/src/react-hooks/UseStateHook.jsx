import { useState } from 'react';

const UseStateHook = () => {
	const [message, setMessage] = useState('');

	return (
		<>
			<h2>Hello! we have a message for you.</h2>
			<code>{message}</code>
		</>
	);
};

export default UseStateHook;
