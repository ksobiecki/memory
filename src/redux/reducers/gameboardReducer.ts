import { GameCardType } from './../../components/Game/GameBoard/types';
import { GameboardActions } from '../actions/actions-enums/gameboardActions';
import { GameboardActionType } from './../actions/action-types/gameboardActionTypes';

const initialState = {
	cardList: [
		{ id: '0', color: 'red', isVisible: false },
		{ id: '1', color: 'red', isVisible: false },
		{ id: '2', color: 'blue', isVisible: false },
		{ id: '3', color: 'blue', isVisible: false },
		{ id: '4', color: 'green', isVisible: false },
		{ id: '5', color: 'green', isVisible: false },
		{ id: '6', color: 'yellow', isVisible: false },
		{ id: '7', color: 'yellow', isVisible: false },
		{ id: '8', color: 'orange', isVisible: false },
		{ id: '9', color: 'orange', isVisible: false },
		{ id: '10', color: 'gray', isVisible: false },
		{ id: '11', color: 'gray', isVisible: false },
		{ id: '12', color: 'purple', isVisible: false },
		{ id: '13', color: 'purple', isVisible: false },
		{ id: '14', color: 'brown', isVisible: false },
		{ id: '15', color: 'brown', isVisible: false },
	],
	cardsFlipped: 0,
	firstCard: '',
	isLocked: false,
};

const gameboardReducer = (
	state = initialState,
	action: GameboardActionType,
) => {
	switch (action.type) {
		case GameboardActions.TOGGLE_CARD_VISIBILITY:
			return {
				...state,
				cardList: state.cardList.map((card: GameCardType) => {
					if (card.id !== action.payload) {
						return card;
					}
					return {
						...card,
						isVisible: !card.isVisible,
					};
				}),
			};
		case GameboardActions.RESET_CARDS:
			return {
				...state,
				cardList: state.cardList.map((card: GameCardType, index) => {
					return {
						...card,
						id: index.toString(),
						isVisible: false,
					};
				}),
				cardsFlipped: 0,
			};
		case GameboardActions.LOCK_CARDS:
			return {
				...state,
				isLocked: action.payload,
			};
		case GameboardActions.SET_FIRST_CARD:
			return {
				...state,
				firstCard: action.payload,
			};
		case GameboardActions.INCREMENT_CARDS_FLIPPED:
			return {
				...state,
				cardsFlipped: state.cardsFlipped + action.payload,
			};
		default:
			return state;
	}
};

export default gameboardReducer;
