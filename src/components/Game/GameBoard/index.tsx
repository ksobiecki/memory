import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import GameCard from './GameCard';
import { counterActionCreators, gameboardActionCreators } from '../../../redux';
import { State } from '../../../redux/reducers';
import { GameCardType } from './types';

const GameBoard = () => {
	const history = useHistory();

	const [cardsFlipped, setCardsFlipped] = useState(0);
	const [firstCardNumber, setFirstCardNumber] = useState('');
	const [isLocked, setIsLocked] = useState(false);

	const cardList: GameCardType[] = useSelector(
		(state: State) => state.gameboard,
	);

	const dispatch = useDispatch();

	const { incrementCounter } = bindActionCreators(
		counterActionCreators,
		dispatch,
	);

	const { toggleCardVisibility, resetCards } = bindActionCreators(
		gameboardActionCreators,
		dispatch,
	);

	const checkIfFinished = () => {
		if (cardsFlipped === cardList.length) {
			history.push('/scoreboard');
		}
	};

	// Fisher-Yates algorithm for shuffling array of cards
	const shuffleArray = (array: GameCardType[]) => {
		for (let i = array.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[array[i], array[j]] = [array[j], array[i]];
		}
		return array;
	};

	useEffect(() => {
		resetCards(shuffleArray(cardList));
	}, []);

	useEffect(() => {
		checkIfFinished();
	}, [cardsFlipped]);

	const cardClickHandler = (cardNumber: string) => {
		if (!isLocked) {
			toggleCardVisibility(cardNumber);
			if (!firstCardNumber) {
				setFirstCardNumber(cardList[parseInt(cardNumber)].id);
			} else {
				if (
					cardList[parseInt(cardNumber)].color ===
					cardList[parseInt(firstCardNumber)].color
				) {
					setCardsFlipped((prev) => prev + 2);
					incrementCounter(1);
					setFirstCardNumber('');
				} else {
					incrementCounter(1);
					setFirstCardNumber('');
					setIsLocked(true);
					setTimeout(() => {
						toggleCardVisibility(cardNumber);
						toggleCardVisibility(firstCardNumber);
						setIsLocked(false);
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
