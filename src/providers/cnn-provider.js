const cheerio = require('cheerio');
const request = require('request');

request('http://rss.cnn.com/rss/cnn_topstories.rss', function(err, response, html) {
			var $ = cheerio.load(html);

})
