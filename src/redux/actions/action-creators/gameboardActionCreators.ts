import { Dispatch } from 'redux';

import { GameboardActionType } from '../action-types/gameboardActionTypes';
import { GameboardActions } from '../actions-enums/gameboardActions';

export const toggleCardVisibility = (cardNumber: string) => {
	return (dispatch: Dispatch<GameboardActionType>) => {
		dispatch({
			type: GameboardActions.TOGGLE_CARD_VISIBILITY,
			payload: cardNumber,
		});
	};
};
