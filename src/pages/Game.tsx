import GameBoard from '../components/Game/GameBoard';

const Game = () => {
	const NUMBER_OF_TRIES = 20;

	return (
		<div className="game-container">
			<GameBoard />
			<div className="counter">Number of tries: {NUMBER_OF_TRIES}</div>
		</div>
	);
};

export default Game;
