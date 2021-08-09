import { Dispatch } from 'redux';

import { GameboardActionType } from '../action-types/gameboardActionTypes';
import { GameboardActions } from '../actions-enums/gameboardActions';

export const setUsername = (cardNumber: number) => {
	return (dispatch: Dispatch<GameboardActionType>) => {
		dispatch({
			type: GameboardActions.TOGGLE_CARD_VISIBILITY,
			payload: cardNumber,
		});
	};
};
