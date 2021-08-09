import React from 'react';

import cardBack from '../../../../images/card-back.jpg';

interface GameCardInterface {
	id: string;
	color: string;
	isVisible: boolean;
	onCardClick(cardNumber: string): void;
}

const GameCard: React.FC<GameCardInterface> = ({
	id,
	color,
	isVisible,
	onCardClick,
}) => {
	const cardClickHandler = () => {
		onCardClick(id);
	};

	return (
		<div className="game-card-container">
			{isVisible && (
				<div
					className={`front card ${isVisible ? 'flip-in' : 'flip-out'}`}
					style={{ backgroundColor: color }}
				></div>
			)}
			{!isVisible && (
				<div
					onClick={cardClickHandler}
					className={`back card ${isVisible ? 'flip-out' : 'flip-in'}`}
				>
					<img src={cardBack} alt="Card back" />
				</div>
			)}
		</div>
	);
};

export default GameCard;
