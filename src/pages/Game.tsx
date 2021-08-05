import { useSelector } from 'react-redux';

import { State } from '../redux/reducers';

const Game = () => {
	const username = useSelector((state: State) => state.user);

	return <div>{username}</div>;
};

export default Game;
