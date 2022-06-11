import React, { useReducer } from 'react';

const inititalState = { userName: 'Bella' };
function reducer(state, action) {
	switch (action.type) {
		case 'ADD_NAME':
			return { ...state, userName: action.payload };
		case 'RESET_NAME':
			return inititalState;
		default:
			return state;
	}
}

const UseReducerHook = () => {
	const [state, dispatch] = useReducer(reducer, inititalState);
	return <div>{state.userName}</div>;
};

export default UseReducerHook;
