if (process.env.NODE_ENV === 'production') {
    module.exports = require('./keys_prod');
} else {
    module.exports = require('./keys_dev');
}


// module.exports = {
// 	mongoURI: 'mongodb://Julius:032491jgcd@ds129560.mlab.com:29560/news-from-db'
// }