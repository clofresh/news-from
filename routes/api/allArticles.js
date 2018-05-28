const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Article = require('../../models/Article.js');

// @Route GET /routes/api/allArticles/:searchword
// @Desc GET to db.Articles for matching [:searchword] in Article.title
// @Access Public


router.get('/searchword/:searchword', (req, res) => {
	res.json({ msg: 'HIT' });
});


module.exports = router;