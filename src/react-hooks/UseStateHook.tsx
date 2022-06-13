import { useState } from 'react';
import { User } from '../interfaces';

export const UseStateHook = () => {
	const [users, setUsers] = useState<User[]>();

	return (
		<>
			{users?.map((user) => (
				<p>
					Hi! I'm {user.name}. I work as a freelancer. Here's my contact
					{user.email}, {user.phone}
				</p>
			))}
		</>
	);
};
