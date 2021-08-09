import { combineReducers } from 'redux';

import userReducer from './userReducer';
import counterReducer from './counterReducer';
import gameboardReducer from './gameboardReducer';

const reducers = combineReducers({
	user: userReducer,
	counter: counterReducer,
	gameboard: gameboardReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
