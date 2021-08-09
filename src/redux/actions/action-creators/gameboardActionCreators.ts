import { Dispatch } from 'redux';

import { GameCardType } from './../../../components/Game/GameBoard/types';
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

export const resetCards = (shuffledCardList: GameCardType[]) => {
	return (dispatch: Dispatch<GameboardActionType>) => {
		dispatch({
			type: GameboardActions.RESET_CARDS,
			payload: shuffledCardList,
		});
	};
};
