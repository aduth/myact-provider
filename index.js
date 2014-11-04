var EventEmitter = require( 'events' ).EventEmitter;

var MyactProvider = module.exports = function( options ) {
    if ( 'object' !== typeof options ) options = {};
    this.options = options;
};

MyactProvider.prototype = Object.create( EventEmitter.prototype );

MyactProvider.prototype.interval = true;

MyactProvider.prototype.invoke = function() {};