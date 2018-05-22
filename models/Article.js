const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ArticleSchema = new Schema({
		title: {
			type: String,
			required: true
		}
		created: {
			type: Number,
			required: true
		}
		description: {
			type: String,
			required: true
		}
		url: {
			type: String,
			required: true
		}
});

module.exports = Article = mongoose.model('article', ArticleSchema);