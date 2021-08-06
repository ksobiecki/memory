import { Dispatch } from 'redux';

import { CounterActionType } from '../action-types/counterActionsTypes';
import { CounterActions } from '../actions-enums/counterActions';

export const incrementCounter = (amount: number) => {
	return (dispatch: Dispatch<CounterActionType>) => {
		dispatch({
			type: CounterActions.INCREMENT_COUNTER,
			payload: amount,
		});
	};
};

export const resetCounter = () => {
	return (dispatch: Dispatch<CounterActionType>) => {
		dispatch({
			type: CounterActions.RESET_COUNTER,
		});
	};
};
