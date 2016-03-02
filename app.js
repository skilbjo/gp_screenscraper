var fs = require('fs')
	request = require('request'),
	jsdom = require('jsdom'),
	env = require('./lib/config/pass.js')
	;

/* Script to run in browser for jQuery <-> jQuery functionality 
	var script = document.createElement("script");
	  script.setAttribute("src", "https://code.jquery.com/jquery-latest.min.js");
	  script.addEventListener('load', function() {
	    var script = document.createElement("script");
	    document.body.appendChild(script);
	  }, false);
	  document.body.appendChild(script);
*/

var login = function(cb){
	request.post({
		url: 'https://www.omnipaygroup.com/ramtool',
		headers: {'content-type': 'application/x-www-form-urlencoded'},
		body: "prevpage=LOGIN&cmd=login&nextpage=WELCOME&69="+env.user+"&76="+env.pass_html
		}, function(err,res,html){
			cb(html);	
	});
};

var first_page = function(html,cb){
	jsdom.env({
		html: html,
		scripts: ['https://code.jquery.com/jquery-latest.min.js'],
		done: function(err,window){
			var $ = window.jQuery,
				interchange_report = $('a:contains("Presentment Interchange Summary")').attr('href'),
				url = 'https://www.omnipaygroup.com/ramtool'+interchange_report
				body = /\?(.*)/.exec(interchange_report)[1];
				;

			request.get({
				url: url
			}, function(err,res,html){
				cb(html);
			});

		}
	});
};

login(function(html,cb){
	first_page(html,function(html){
		console.log(html);		
	});
});




