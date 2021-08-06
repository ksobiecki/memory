import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';

import { State } from '../../../redux/reducers';
import { userActionCreators } from '../../../redux/index';

const UserInput = () => {
	const dispatch = useDispatch();
	const { setUsername } = bindActionCreators(userActionCreators, dispatch);

	const username = useSelector((state: State) => state.user);

	const userInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUsername(e.target.value);
	};

	return (
		<div className="user-input-container">
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
	);
};

export default UserInput;
