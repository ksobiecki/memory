import cardBack from '../../../../images/card-back.jpg';

const GameCard = () => {
	return (
		<div className="game-card-container">
			<div className="front card">red</div>
			<div className="back card">
				<img src={cardBack} alt="Card back" />
			</div>
		</div>
	);
};

export default GameCard;
