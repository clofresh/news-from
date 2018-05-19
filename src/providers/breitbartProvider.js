const express = require('express');
const breitbartProvider = express.Router();
const Feed = require('rss-to-json');

breitbartProvider.get('/', (req, res) => {
	Feed.load('http://feeds.feedburner.com/breitbart', function(err, rss) {
		res.send(rss);
	});
});

module.exports = breitbartProvider;
