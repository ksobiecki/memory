import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../../pages/Landing';
import Game from '../../pages/Game';
import Scoreboard from '../../pages/Scoreboard';
import NotFound from '../../pages/NotFound';

const Routes = () => (
	<Suspense fallback={<div>Loading ...</div>}>
		<Switch>
			<Route path="/" exact>
				<Landing />
			</Route>
			<Route path="/game">
				<Game />
			</Route>
			<Route path="/scoreboard">
				<Scoreboard />
			</Route>
			<Route path="*">
				<NotFound />
			</Route>
		</Switch>
	</Suspense>
);

export default Routes;
