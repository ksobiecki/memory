import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Routes = () => (
	<Suspense>
		<Switch>
			<Route path="/" exact>
				Main
			</Route>
			<Route path="/game">Game</Route>
			<Route path="/scoreboard">Scoreboard</Route>
			<Route path="*">404</Route>
		</Switch>
	</Suspense>
);

export default Routes;
