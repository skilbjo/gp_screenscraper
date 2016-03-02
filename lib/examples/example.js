var fs = require('fs')
	request = require('request'),
	jsdom = require('jsdom')
	;


request.get({
	// url: 'https://www.omnipaygroup.com/ramtool'
	url: 'https://www.omnipaygroup.com/ramtool?cmd=load&nextpage=SECOND_CLEARING_LEVEL_SUMMARY&45CC=32&42f4=36&37bls=6538301882be774c22c8e5d3f382eecbdd4cf11aec5c0110d31830ee12f8cdc8b9e71b4e2a28592723d29e14b98935c77dd9e2521f38ab69010ddea959bdf693'
}, function(err,res,html){
	console.log('hey'+html);
});
