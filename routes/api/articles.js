const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Feed = require('rss-to-json');

// Article Model
const Article = require('../../models/Article.js');


// @Route GET api/articles/test
// @Desc test Get route being called
// @Access Public

router.get('/test', (req, res) => {
    res.json({ Hello: "test route works" })
});

// @Route GET api/articles/
// @Desc GET all articles route
// @Access Public
router.get('/', (req, res) => {
    Article.find()
        .sort({ created: -1 })
        .then(articles => res.json(articles))
        .catch(err =>
            res.status(404).json({ noarticlesfound: 'No articles found' })
        );
});

// @Route POST api/articles/
// @Desc Post All Articles
// @Access Public
router.post('/', (req, res) => {

    const newArticle = new Article({
        title: articles.title,
        created: articles.created,
        url: articles.url
    });
    newArticle.save()
        .then(articleItem => res.json(articleItem), (err) =>
            res.send(500, { err: err }))
        .catch(error => res.json({ newArticle_error: error }))
});
module.exports = router;



// Feed.load('http://rss.cnn.com/rss/cnn_topstories.rss', function(err, rss) {
//     rss.items.map(articles => {