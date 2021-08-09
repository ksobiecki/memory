import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import GameCard from './GameCard';
import { counterActionCreators, gameboardActionCreators } from '../../../redux';
import { State } from '../../../redux/reducers';
// import { GameCardType } from './types';

const GameBoard = () => {
	const history = useHistory();

	const { cardList, isLocked, firstCard, cardsFlipped } = useSelector(
		(state: State) => state.gameboard,
	);

	const dispatch = useDispatch();

	const { incrementCounter } = bindActionCreators(
		counterActionCreators,
		dispatch,
	);

	const {
		toggleCardVisibility,
		// resetCards,
		setFirstCard,
		incrementCardsFlipped,
		lockCards,
	} = bindActionCreators(gameboardActionCreators, dispatch);

	const checkIfFinished = () => {
		if (cardsFlipped === cardList.length) {
			history.push('/scoreboard');
		}
	};

	// useEffect(() => {
	// 	resetCards(shuffleArray(cardList));
	// }, []);

	useEffect(() => {
		checkIfFinished();
	}, [cardsFlipped]);

	const cardClickHandler = (cardNumber: string) => {
		if (!isLocked) {
			toggleCardVisibility(cardNumber);
			if (!firstCard) {
				setFirstCard(cardList[parseInt(cardNumber)].id);
			} else {
				if (
					cardList[parseInt(cardNumber)].color ===
					cardList[parseInt(firstCard)].color
				) {
					incrementCardsFlipped(2);
					incrementCounter(1);
					setFirstCard('');
				} else {
					incrementCounter(1);
					setFirstCard('');
					lockCards(true);
					setTimeout(() => {
						toggleCardVisibility(cardNumber);
						toggleCardVisibility(firstCard);
						lockCards(false);
					}, 1000);
				}
			}
		}
	};

	return (
		<div className="game-board-container">
			{cardList.map((card) => (
				<GameCard
					key={card.id}
					id={card.id}
					color={card.color}
					isVisible={card.isVisible}
					onCardClick={(id) => cardClickHandler(id)}
				/>
			))}
		</div>
	);
};

export default GameBoard;
