const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Feed = require('rss-to-json');

// Article Model
const Article = require('../../models/Article.js');

// @Route GET routes/api/cnnArticles/
// @Desc GET all articles with {site: "cnn"}
// @Access Public
router.get('/', (req, res) => {
    Article.find({site: "cnn"})
        .sort({ created: -1 })
        // http calls are only made in strings (the network) so res.json is serializing the data into json turning that object into a string so that when deserialized able to turn into an object
        .then(articles => res.json(articles))
        .catch(err =>
            res.status(404).json({ noarticlesfound: 'No articles found' })
        );
});

// @Route POST /routes/api/cnnArticles/
// @Desc POST to db.Articles new articles from cnn
// @Access Public
router.post('/', (req, res) => {
    Feed.load('http://rss.cnn.com/rss/cnn_topstories.rss', function(err, rss) {
        rss.items.map((rssArticles, index) => {

            const newArticle = new Article({
                title: rssArticles.title,
                site: "cnn",
                created: rssArticles.created,
                url: rssArticles.url
            });

            //TODO: SEARCH DATABASE FOR DUPLICATE BEFORE ADDING
            // Article.findOne({ "title": newArticle.title }, (err, dbArticle) => {
            //     console.log('dbArticle', dbArticle.title)
            //     console.log('newArticle', newArticle.title)
            //     if (dbArticle.title === newArticle.title) {
            //         console.log("DUPLICATE")
            //     } else {
            //         console.log('ADD TO DATABASE NO MATCH', newArticle);
            //         newArticle
            //             .save((err, articleItem) => {
            //                 if (err) return err;
            //                 res.json(articleItem)
            //             })
            //     }
            // });

            newArticle
                .save()
                .then(articleItem => {
                    res.json(articleItem)
                }).catch(error =>
                    res.status(404).json({ newArticle_error: "POST ERROR: " + error }))
        })
    })
});

module.exports = router;