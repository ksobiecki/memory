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

export const lockCards = (isLocked: boolean) => {
	return (dispatch: Dispatch<GameboardActionType>) => {
		dispatch({
			type: GameboardActions.LOCK_CARDS,
			payload: isLocked,
		});
	};
};

export const setFirstCard = (firstCard: string) => {
	return (dispatch: Dispatch<GameboardActionType>) => {
		dispatch({
			type: GameboardActions.SET_FIRST_CARD,
			payload: firstCard,
		});
	};
};

export const incrementCardsFlipped = (iterator: number) => {
	return (dispatch: Dispatch<GameboardActionType>) => {
		dispatch({
			type: GameboardActions.INCREMENT_CARDS_FLIPPED,
			payload: iterator,
		});
	};
};
