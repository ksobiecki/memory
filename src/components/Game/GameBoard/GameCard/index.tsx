import React, { useState } from 'react';

import cardBack from '../../../../images/card-back.jpg';

interface GameCardInterface {
	onCardClick(color: string): void;
	color: string;
	isSolved: boolean;
}

const GameCard: React.FC<GameCardInterface> = ({
	onCardClick,
	color,
	isSolved,
}) => {
	const [isFlipped, setIsFlipped] = useState(false);

	const cardClickHandler = () => {
		//do flip
		if (!isSolved) {
			onCardClick(color);
		}
	};

	return (
		<div className="game-card-container">
			<div
				className={`front card ${isFlipped ? 'flipped' : ''}`}
				style={{ backgroundColor: color }}
			>
				{color}
			</div>
			<div
				onClick={cardClickHandler}
				className={`back card ${isFlipped ? 'flipped' : ''}`}
			>
				<img src={cardBack} alt="Card back" />
			</div>
		</div>
	);
};

export default GameCard;
