const express = require('express');
const cnnProvider = express.Router();
const Feed = require('rss-to-json');

cnnProvider.get('/', (req, res) => {
	Feed.load('http://rss.cnn.com/rss/cnn_topstories.rss', function(err, rss) {
		res.send(rss);
	});
});

module.exports = cnnProvider