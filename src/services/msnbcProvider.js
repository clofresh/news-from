const express = require('express');
const router = express.Router();
const Feed = require('rss-to-json');


router.get('/', (req, res) => {
	Feed.load('http://www.msnbc.com/feeds/latest', function(err, rss) {
		res.send(rss)
	});
});

module.exports = router;