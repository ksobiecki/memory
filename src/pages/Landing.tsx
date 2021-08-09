import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { GameCardType } from '../components/Game/GameBoard/types';

import UserInput from '../components/Landing/UserInput';
import { gameboardActionCreators } from '../redux';
import { State } from '../redux/reducers';

// Fisher-Yates algorithm for shuffling array of cards
const shuffleArray = (array: GameCardType[]) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};

const Landing = () => {
	const history = useHistory();

	const username = useSelector((state: State) => state.user);
	const cardList = useSelector((state: State) => state.gameboard.cardList);

	const dispatch = useDispatch();

	const { resetCards } = bindActionCreators(gameboardActionCreators, dispatch);

	const startButtonHandler = () => {
		if (username) {
			resetCards(shuffleArray(cardList));
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
