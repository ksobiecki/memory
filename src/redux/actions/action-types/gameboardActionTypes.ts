import { GameCardType } from '../../../components/Game/GameBoard/types';
import { GameboardActions } from '../actions-enums/gameboardActions';

interface ResetCards {
	type: GameboardActions.RESET_CARDS;
	payload: GameCardType[];
}

interface ToggleCardVisibility {
	type: GameboardActions.TOGGLE_CARD_VISIBILITY;
	payload: string;
}

interface LockCards {
	type: GameboardActions.LOCK_CARDS;
	payload: boolean;
}

interface SetFirstCard {
	type: GameboardActions.SET_FIRST_CARD;
	payload: string;
}

interface incrementCardsFlipped {
	type: GameboardActions.INCREMENT_CARDS_FLIPPED;
	payload: number;
}

export type GameboardActionType =
	| ResetCards
	| ToggleCardVisibility
	| LockCards
	| SetFirstCard
	| incrementCardsFlipped;
