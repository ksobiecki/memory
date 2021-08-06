import GameCard from './GameCard';

const GameBoard = () => {
	const cardList = [
		{ id: 1, color: 'red' },
		{ id: 2, color: 'red' },
		{ id: 3, color: 'blue' },
		{ id: 4, color: 'blue' },
		{ id: 5, color: 'green' },
		{ id: 6, color: 'green' },
		{ id: 7, color: 'yellow' },
		{ id: 8, color: 'yellow' },
		{ id: 9, color: 'orange' },
		{ id: 10, color: 'orange' },
		{ id: 11, color: 'gray' },
		{ id: 12, color: 'gray' },
		{ id: 13, color: 'purple' },
		{ id: 14, color: 'purple' },
		{ id: 15, color: 'brown' },
		{ id: 16, color: 'brown' },
	];

	return (
		<div className="game-board-container">
			{cardList.map((card) => (
				<GameCard key={card.id} />
			))}
		</div>
	);
};

export default GameBoard;
