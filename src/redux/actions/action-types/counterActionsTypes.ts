import { CounterActions } from './../actions-enums/counterActions';

interface IncrementAction {
	type: CounterActions.INCREMENT_COUNTER;
	payload: number;
}

interface ResetAction {
	type: CounterActions.RESET_COUNTER;
}

export type CounterActionType = IncrementAction | ResetAction;
