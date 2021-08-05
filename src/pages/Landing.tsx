import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Landing = () => {
	const history = useHistory();
	const [username, setUsername] = useState('');

	const userInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value);
		console.log(username);
	};

	const startButtonHandler = () => {
		if (username) {
			history.push('/game');
		}
	};

	return (
		<div className="landing-container">
			<h1 className="title">Memory Game</h1>
			<div className="input-container">
				<label className="label" htmlFor="username">
					Username
				</label>
				<input
					className="input"
					type="text"
					id="username"
					value={username}
					onChange={userInputHandler}
				/>
			</div>
			<button onClick={startButtonHandler}>Start Game</button>
		</div>
	);
};

export default Landing;
