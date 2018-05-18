const express = require('express');
const router = express.Router();
const Feed = require('rss-to-json');


router.get('/', (req, res) => {
	Feed.load('http://feeds.foxnews.com/foxnews/politics', function(err, rss) {
		res.send(rss)
	});
});

module.exports = router;