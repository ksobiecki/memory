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

export type GameboardActionType = ResetCards | ToggleCardVisibility;
