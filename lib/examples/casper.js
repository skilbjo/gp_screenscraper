var casper = require('casper').create(),
	x = require("casper").selectXPath;
	env = require('./lib/config/pass.js')
	;

casper.start('https://www.omnipaygroup.com/ramtool', function() {

	this.fill('name="menu"]', { 
		'input[id=69]': env.user, 
		'input[id=76]': env.pass
	}, true);

});

casper.thenEvaluate(function(){
	this.echo(this.getTitle());
});

casper.run();