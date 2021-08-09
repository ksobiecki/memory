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

	const cardList: GameCardType[] = useSelector(
		(state: State) => state.gameboard,
	);

	const dispatch = useDispatch();

	const { incrementCounter } = bindActionCreators(
		counterActionCreators,
		dispatch,
	);

	const { toggleCardVisibility } = bindActionCreators(
		gameboardActionCreators,
		dispatch,
	);

	useEffect(() => {
		checkIfFinished();
		console.log(cardList);
	}, [cardsFlipped]);

	const checkIfFinished = () => {
		if (cardsFlipped === cardList.length) {
			history.push('/scoreboard');
		}
	};

	const cardClickHandler = (cardNumber: string) => {
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
				toggleCardVisibility(cardNumber);
				toggleCardVisibility(firstCardNumber);
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
