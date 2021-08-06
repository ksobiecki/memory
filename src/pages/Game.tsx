import { useSelector } from 'react-redux';

import GameBoard from '../components/Game/GameBoard';
import { State } from '../redux/reducers';

const Game = () => {
	const counter = useSelector((state: State) => state.counter);

	return (
		<div className="game-container">
			<GameBoard />
			<div className="counter">
				Number of tries: <strong>{counter}</strong>
			</div>
		</div>
	);
};

export default Game;
