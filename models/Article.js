const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
    title: {
    	type: String
    }
    // ,
    // created: {
    // 	type: Number
    // },
    // description: {
    // 	type: String
    // },
    // url: {
    // 	type: String
    // },
    // site: {
    // 	type: String
    // }
});

module.exports = Article = mongoose.model('article', ArticleSchema);