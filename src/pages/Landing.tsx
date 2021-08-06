import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import UserInput from '../components/Landing/UserInput';
import { State } from '../redux/reducers';

const Landing = () => {
	const history = useHistory();

	const username = useSelector((state: State) => state.user);

	const startButtonHandler = () => {
		if (username) {
			history.push('/game');
		}
	};

	return (
		<div className="landing-container">
			<h1 className="title">Memory Game</h1>
			<UserInput />
			<button
				onClick={startButtonHandler}
				disabled={username.length === 0}
				className="shared-button"
			>
				Start Game
			</button>
		</div>
	);
};

export default Landing;
