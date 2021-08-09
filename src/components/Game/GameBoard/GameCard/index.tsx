import React from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import cardBack from '../../../../images/card-back.jpg';
import { gameboardActionCreators } from '../../../../redux';

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
	const dispatch = useDispatch();

	const { toggleCardVisibility } = bindActionCreators(
		gameboardActionCreators,
		dispatch,
	);

	const cardClickHandler = () => {
		onCardClick(id);
		toggleCardVisibility(id);
	};

	return (
		<div className="game-card-container">
			<div
				className={`front card ${isVisible ? 'visible' : ''}`}
				style={{ backgroundColor: color }}
			>
				{color}
			</div>
			<div
				onClick={cardClickHandler}
				className={`back card ${!isVisible ? 'visible' : ''}`}
			>
				<img src={cardBack} alt="Card back" />
			</div>
		</div>
	);
};

export default GameCard;
