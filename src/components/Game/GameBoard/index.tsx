import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import GameCard from './GameCard';
import { counterActionCreators } from '../../../redux';

const simplifiedCardList = [
	'red',
	'red',
	'blue',
	'blue',
	'green',
	'green',
	'yellow',
	'yellow',
	'orange',
	'orange',
	'gray',
	'gray',
	'purple',
	'purple',
	'brown',
	'brown',
];

const GameBoard = () => {
	const history = useHistory();

	const [cardsFlipped, setCardsFlipped] = useState(0);
	const [firstCardColor, setFirstCardColor] = useState('');

	const dispatch = useDispatch();

	const { incrementCounter } = bindActionCreators(
		counterActionCreators,
		dispatch,
	);

	useEffect(() => {
		checkIfFinished();
	}, [cardsFlipped]);

	const checkIfFinished = () => {
		if (cardsFlipped === simplifiedCardList.length) {
			console.log('you win');
			history.push('/scoreboard');
		}
	};

	const cardClickHandler = (cardColor: string) => {
		//odkrywamy pierwszą kartę
		if (!firstCardColor) {
			setFirstCardColor(cardColor);
			console.log('first card');
		} else {
			// karty mają ten sam kolor
			if (cardColor === firstCardColor) {
				console.log('second card matched');
				setCardsFlipped((prev) => prev + 2);
				incrementCounter(1);
				setFirstCardColor('');
			} else {
				console.log('second card wrong');
				incrementCounter(1);
				setFirstCardColor('');
			}
		}
	};

	return (
		<div className="game-board-container">
			{simplifiedCardList.map((card, index) => (
				<GameCard
					key={index}
					color={card}
					onCardClick={cardClickHandler}
					isSolved={false}
				/>
			))}
		</div>
	);
};

export default GameBoard;
