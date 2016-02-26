var fs = require('fs')
	request = require('request'),
	cheerio = require('cheerio'),
	phantom = require('phantom'),
	url = 'https://www.omnipaygroup.com/ramtool'
	;

phantom.create(function(ph){
	return ph.createPage(function(page){
		return page.open(url, function(status){
			return page.evaluate(function(){
				console.log(document);
			});
		});
	});
});




// request(url, function(err,res,html){
// 	if(!err){
// 		var $ = cheerio.load(html);
// 		console.log(html);
// 	}
// })