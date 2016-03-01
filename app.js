var fs = require('fs')
	request = require('request'),
	jsdom = require('jsdom'),
	env = require('./lib/config/pass.js')
	;

var login = function(cb){
	request.post({
		url: 'https://www.omnipaygroup.com/ramtool',
		headers: {'content-type': 'application/x-www-form-urlencoded'},
		body: "prevpage=LOGIN&cmd=login&nextpage=WELCOME&69="+env.user+"&76="+env.pass_html
		}, function(err,res,html){

			var $ = window.jQuery;


	});
};

login(function(html){
	var newDoc = jsdom.env(html, function(err,window){

	});
});

// login(function(html){
// 	request.post({
// 		headers: {'content-type': 'application/x-www-form-urlencoded'},
// 		url: "/ramtool?cmd=load&amp;nextpage=SECOND_CLEARING_LEVEL_SUMMARY&amp;45CC=32&amp;42f4=36&amp;37bls=f68ba5364382ec647bcb698a449fc07af15bded633e3ae4cb566c482a4dead4f6dbca1b42e43334502e71240b87621e436312bf6028c8cd8033f9a710c9ff465"
// 	}, function(err,res,html){
// 		console.log(html);
// 	});
// });

// 		var $ = cheerio.load(html);
// 		console.log(html);

// 	}
// });


