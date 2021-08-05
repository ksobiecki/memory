import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { State } from '../redux/reducers';
import * as userActionCreators from '../redux/action-creators/userActionCreators';

const Landing = () => {
	const history = useHistory();

	const dispatch = useDispatch();
	const { setUsername } = bindActionCreators(userActionCreators, dispatch);

	const username = useSelector((state: State) => state.user);

	console.log('username', username);

	const userInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value);
		console.log(username);
	};

	const startButtonHandler = () => {
		if (username) {
			history.push('/game');
		}
	};

	return (
		<div className="page-layout landing-container">
			<h1 className="title">Memory Game</h1>
			<div className="input-container">
				<label className="label" htmlFor="username">
					Username
				</label>
				<input
					className="input"
					type="text"
					id="username"
					value={username}
					onChange={userInputHandler}
				/>
			</div>
			<button onClick={startButtonHandler} disabled={username.length === 0}>
				Start Game
			</button>
		</div>
	);
};

export default Landing;
