import { Dispatch } from 'redux';

import { UserActionType } from '../action-types/userActionsTypes';
import { UserActions } from '../actions-enums/userActions';

export const setUsername = (username: string) => {
	return (dispatch: Dispatch<UserActionType>) => {
		dispatch({
			type: UserActions.SET_USERNAME,
			payload: username,
		});
	};
};
