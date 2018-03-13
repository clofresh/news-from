var request = require('request-promise');
var cheerio = require('cheerio');

const foxprovider = []
 
request("https://www.foxnews.com", function(err, response, html) {
	const $ = cheerio.load(html)
	if (!err && response.statusCode == 200) {
		console.log('statusCode', response.statusCode);
		$('div.has-hero').each(function (i, element) {
		var scraped = $(this).text();
		foxprovider.push(scraped);
		})
	}
		console.log('foxprovider', foxprovider);
})

module.export = foxprovider;