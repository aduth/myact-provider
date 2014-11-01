var EventEmitter = require( 'events' ).EventEmitter;

var Provider = module.exports = function( options ) {
    this.options = options;
};

Provider.prototype = Object.create( EventEmitter.prototype );

Provider.prototype.interval = true;

Provider.prototype.invoke = function() {};