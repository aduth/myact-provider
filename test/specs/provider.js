var EventEmitter = require( 'events' ).EventEmitter,
    expect = require( 'chai' ).expect,
    Provider = require( '../../' );

describe( 'Provider', function() {
    var provider;
    before(function() {
        provider = new Provider;
    });

    it( 'should extend EventEmitter', function() {
        expect( provider ).to.be.an.instanceof( EventEmitter );
        expect( provider.on ).to.be.a( 'function' );
        expect( provider.emit ).to.be.a( 'function' );
    });

    it( 'should be invokable', function() {
        expect( provider.invoke ).to.be.a( 'function' );
    });

    it( 'should define whether it should run on an interval', function() {
        expect( provider.interval ).to.be.a( 'boolean' );
    });

    it( 'should include an options object even if no options sent', function() {
        expect( provider.options ).to.be.an( 'object' );
    });

    it( 'should include na options object which matches options sent', function() {
        var options = { ok: true },
            providerWithOptions = new Provider( options );

        expect( providerWithOptions.options ).to.eql( options );
    });
});