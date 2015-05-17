var Flux = require('delorean').Flux;
var CardData = require('../../data/cards.js');

var CardsStore = Flux.createStore({
  actions: {

  },

  getState () {
    return {}
  }
});

module.exports = new CardsStore();