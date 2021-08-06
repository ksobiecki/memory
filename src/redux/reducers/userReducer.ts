import { UserActionType } from '../actions/action-types/userActionsTypes';

const initialState = '';

const userReducer = (state = initialState, action: UserActionType) => {
	switch (action.type) {
		case 'SET_USERNAME':
			return action.payload;
		default:
			return state;
	}
};

export default userReducer;
