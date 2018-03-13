var request = require('request-promise');
var cheerio = require('cheerio');

const breitbartprovider = []
 
request("http://www.breitbart.com", function(err, response, html) {
	const $ = cheerio.load(html)
	if (!err && response.statusCode == 200) {
		console.log('statusCode', response.statusCode);
		$('h2.title').each(function (i, element) {
		var scraped = $(this).eq(0).text();
		breitbartprovider.push(scraped);
		})
	}
	console.log('breitbartprovider', breitbartprovider);
})

module.export = breitbartprovider;

