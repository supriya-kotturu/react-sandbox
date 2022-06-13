import { useReducer } from 'react';
import { User } from '../interfaces';

type stateType = { users: User[] };
type AddUserType = {
	type: 'ADD_USER';
	payload: User;
};
type RemoveUserType = {
	type: 'REMOVE_USER';
	payload: string;
};
type ActionType = AddUserType | RemoveUserType;

const initialState: stateType = {
	users: [
		{ id: '34', name: 'red', email: 'red@gmail.com', phone: '7784596328' },
	],
};

type Reducer<stateType, ActionType> = (
	state: stateType,
	action: ActionType,
) => stateType;
const reducer: Reducer<stateType, ActionType> = (
	state: stateType,
	action: ActionType,
): stateType => {
	switch (action.type) {
		case 'ADD_USER':
			return { ...state, users: [action.payload, ...state.users] };
		case 'REMOVE_USER':
			return {
				...state,
				users: state.users.filter((user) => user.id !== action.payload),
			};
		default:
			return state;
	}
};

export const UseReducerHook = () => {
	const [state, dispatch] = useReducer<ActionType, stateType>(
		reducer,
		initialState,
		null,
	);

	return (
		<div>
			{state.users.map((user: User) => (
				<p key={user.id}>{user.name} </p>
			))}
		</div>
	);
};
