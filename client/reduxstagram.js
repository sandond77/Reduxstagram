import React from 'react';
import { render } from 'react-dom';

//Import CSS
import css from './styles/style.styl';

//import components
import Main from './components/Main';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

//react router
import { Router, Route, IndexRoute, BrowserHistory } from 'react-router';

const router = (
	<Router history={BrowserHistory}>
		<Route path="/" component={Main}>
			<IndexRoute component={PhotoGrid}></IndexRoute>
			<Route path="/view/:postId" component={Single}></Route>
		</Route>
	</Router>
)

render(
	router,
	document.getElementById('root')
);