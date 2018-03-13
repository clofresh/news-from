var request = require('request-promise');
var cheerio = require('cheerio');

const msnbcprovider = []
 
request("http://www.msnbc.com/economy", function(err, response, html) {
	const $ = cheerio.load(html)
	if (!err && response.statusCode == 200) {
		console.log('statusCode', response.statusCode);
		$('h2.teaser__title').each(function (i, element) {
		var scraped = $(this).text();
		msnbcprovider.push(scraped);
		})
	}
	console.log('msnbcprovider', msnbcprovider);
})

module.export = msnbcprovider;

