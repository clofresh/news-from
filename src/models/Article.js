const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ArticleSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true
    },
    img: {
    	type: String
    }
});


module.exports = Article = mongoose.model('articles', ArticleSchema)