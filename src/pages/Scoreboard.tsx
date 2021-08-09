import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { counterActionCreators } from '../redux';
import { State } from '../redux/reducers';

const Scoreboard = () => {
	const history = useHistory();

	const username = useSelector((state: State) => state.user);
	const counter = useSelector((state: State) => state.counter);

	const dispatch = useDispatch();

	const { resetCounter } = bindActionCreators(counterActionCreators, dispatch);

	const restartButtonHandler = () => {
		resetCounter();
		history.push('/');
	};

	return (
		<div className="scoreboard-container">
			<h1 className="header">You win {username}!</h1>
			<p className="subheader">Number of turns:</p>
			<p className="score">{counter}</p>
			<button onClick={restartButtonHandler} className="shared-button">
				Restart Game
			</button>
		</div>
	);
};

export default Scoreboard;
