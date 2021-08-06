import { CounterActionType } from './../actions/action-types/counterActionsTypes';
import { CounterActions } from '../actions/actions-enums/counterActions';

const initialState = 0;

const counterReducer = (state = initialState, action: CounterActionType) => {
	switch (action.type) {
		case CounterActions.INCREMENT_COUNTER:
			return state + action.payload;
		case CounterActions.RESET_COUNTER:
			return 0;
		default:
			return state;
	}
};

export default counterReducer;
