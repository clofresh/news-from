const express = require('express');
const foxProvider = express.Router();
const Feed = require('rss-to-json');

foxProvider.get('/', (req, res) => {
	Feed.load('http://feeds.foxnews.com/foxnews/politics', function(err, rss) {
		res.send(rss);
	});
});

module.exports = foxProvider;
