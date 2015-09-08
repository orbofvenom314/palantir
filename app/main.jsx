import React from 'react';
import Router from 'react-router';
import { Route, DefaultRoute } from 'react-router';
import App from './app.jsx';
import DeckbuilderRoute from './components/pages/deckbuilder';

let routes = (
	<Route handler={App}>
		<Route path='deckbuilder' handler={DeckbuilderRoute}></Route>
	</Route>
);

Router.run(routes, Router.HistoryLocation, function(Handler) {
	React.render(<Handler />, document.getElementById('site-wrapper'));
});