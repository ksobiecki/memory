import { combineReducers } from 'redux';

import userReducer from './userReducer';
import counterReducer from './counterReducer';

const reducers = combineReducers({
	user: userReducer,
	counter: counterReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
