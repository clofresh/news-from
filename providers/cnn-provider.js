var request = require('request-promise');
var cheerio = require('cheerio');

const cnnprovider = []
 
request("http://money.cnn.com/technology/startups?iid=tech_startups_nav", function(err, response, html) {
	const $ = cheerio.load(html)
	if (!err && response.statusCode == 200) {
		console.log('statusCode', response.statusCode);
		$('span').each(function (i, element) {
		var scraped = $(this).text();
			if (scraped.length > 15) {
		cnnprovider.push(scraped);
	}
		})
	}
	console.log('cnnprovider', cnnprovider);
})

module.export = cnnprovider;

