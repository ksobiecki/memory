import { GameboardActions } from '../actions/actions-enums/gameboardActions';
import { GameboardActionType } from './../actions/action-types/gameboardActionTypes';

interface GameCardType {
	id: number;
	color: string;
	isVisible: boolean;
}

const initialState = [
	{ id: 0, color: 'red', isVisible: false },
	{ id: 1, color: 'red', isVisible: false },
	{ id: 2, color: 'blue', isVisible: false },
	{ id: 3, color: 'blue', isVisible: false },
	{ id: 4, color: 'green', isVisible: false },
	{ id: 5, color: 'green', isVisible: false },
	{ id: 6, color: 'yellow', isVisible: false },
	{ id: 7, color: 'yellow', isVisible: false },
	{ id: 8, color: 'orange', isVisible: false },
	{ id: 9, color: 'orange', isVisible: false },
	{ id: 10, color: 'gray', isVisible: false },
	{ id: 11, color: 'gray', isVisible: false },
	{ id: 12, color: 'purple', isVisible: false },
	{ id: 13, color: 'purple', isVisible: false },
	{ id: 14, color: 'brown', isVisible: false },
	{ id: 15, color: 'brown', isVisible: false },
];

const gameboardReducer = (
	state = initialState,
	action: GameboardActionType,
) => {
	switch (action.type) {
		case GameboardActions.TOGGLE_CARD_VISIBILITY:
			return {
				state: state.map((card: GameCardType) => {
					if (card.id !== action.payload) {
						return card;
					}
					return {
						...card,
						isVisible: !card.isVisible,
					};
				}),
			};
		default:
			return state;
	}
};
