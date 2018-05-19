const express = require('express');
const msnbcProvider = express.Router();
const Feed = require('rss-to-json');

msnbcProvider.get('/', (req, res) => {
	Feed.load('http://www.msnbc.com/feeds/latest', function(err, rss) {
		res.send(rss);
	});
});

module.exports = msnbcProvider;
