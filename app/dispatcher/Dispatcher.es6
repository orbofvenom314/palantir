var Flux = require('delorean').Flux;
var CardsStore = require('../stores/CardsStore.es6');

var Dispatcher = Flux.createDispatcher({

  getStores: {
    CardsStore
  }
});

module.exports = Dispatcher;