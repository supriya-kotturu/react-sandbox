import React, { createContext, useContext } from 'react';
const users = [
	{ name: 'Ravi', age: 27 },
	{ name: 'Vidhya', age: 23 },
];

const usersContext = createContext(users);

const UseContextHook = () => {
	const userCtx = useContext(usersContext);
	return (
		<div>
			<h1>Users</h1>
			<ul>
				{userCtx.map((user) => (
					<li>
						{user.name} - {user.age}
					</li>
				))}
			</ul>
		</div>
	);
};

export default UseContextHook;
