var fs = require('fs')
	request = require('request'),
	cheerio = require('cheerio'),
	phantom = require('phantom'),
	url = 'https://www.omnipaygroup.com/ramtool'
	env = require('./lib/config/pass.js')
	;

// phantom.create(function(ph){
// 	return ph.createPage(function(page){
// 		return page.open(url, function(status){
// 			return page.evaluate(function(){
// 				console.log(document);
// 			});
// 		});
// 	});
// });


request.post({
	headers: {'content-type': 'application/x-www-form-urlencoded'},
	url: url,
	body: "69="+env.user+"&76="+env.pass_html+"cmd=WELCOME&nextpage=login"
	}, function(err,res,html){
		// console.log(html);
	if(!err){
		var $ = cheerio.load(html);
		console.log(html);
	}
});


