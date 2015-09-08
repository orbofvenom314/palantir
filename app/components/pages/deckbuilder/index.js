import React from 'react';

class Deckbuilder extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<p>I am the deckbuilder</p>
		);
	}
}

class DeckbuilderRoute extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className='deckbuilder-page'>
				<h1>Deckbuilder</h1>
				<Deckbuilder />
			</div>
		);
	}
}

export default Deckbuilder;
export { DeckbuilderRoute };