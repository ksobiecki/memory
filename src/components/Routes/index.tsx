import { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Landing from '../../pages/Landing';
import Game from '../../pages/Game';
import Scoreboard from '../../pages/Scoreboard';
import NotFound from '../../pages/NotFound';
import { useSelector } from 'react-redux';
import { State } from '../../redux/reducers';

const Routes = () => {
	const username = useSelector((state: State) => state.user);

	return (
		<Suspense fallback={<div>Loading ...</div>}>
			<Switch>
				<Route path="/" exact>
					<Landing />
				</Route>
				<Route path="/game">{username ? <Game /> : <Redirect to="/" />}</Route>
				<Route path="/scoreboard">
					{username ? <Scoreboard /> : <Redirect to="/" />}
				</Route>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</Suspense>
	);
};
export default Routes;
