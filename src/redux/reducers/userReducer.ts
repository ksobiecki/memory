import { UserActionType } from '../actions/action-types/userActionsTypes';
import { UserActions } from '../actions/actions-enums/userActions';

const initialState = '';

const userReducer = (state = initialState, action: UserActionType) => {
	switch (action.type) {
		case UserActions.SET_USERNAME:
			return action.payload;
		default:
			return state;
	}
};

export default userReducer;
