const express = require('express');
const router = express.Router();
const Feed = require('rss-to-json');


router.get('/', (req, res) => {
	Feed.load('http://rss.cnn.com/rss/cnn_topstories.rss', function(err, rss) {
		res.send(rss)
	});
});

module.exports = router;