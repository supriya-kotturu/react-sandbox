import React, { createContext, useContext } from 'react';

const users = [
	{ name: 'Ravi', age: 27 },
	{ name: 'Vidhya', age: 23 },
];

const usersContext = createContext(users);

export const UseContextHook = () => {
	const usersCtx = useContext(usersContext);
	return (
		<div>
			<h1>Users</h1>
			<ul>
				{usersCtx.map((user) => (
					<li>
						{user.name} - {user.age}
					</li>
				))}
			</ul>
		</div>
	);
};
