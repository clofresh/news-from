const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const cnnProvider = require('./src/services/cnnProvider');
const breitbartProvider = require('./src/services/breitbartProvider');
const msnbcProvider = require('./src/services/msnbcProvider');
const foxProvider = require('./src/services/foxProvider');

// Body Parser to work with data
app.use(bodyParser.json());

// Require Routes
const articles = require('./src/routes/articles');


// Landing Page
app.get('/', function(req, res) {
	res.send('Landing Page');
});

// Use Routes
app.use('/api/cnn', cnnProvider);
app.use('/api/breitbart', breitbartProvider);
app.use('/api/msnbc', msnbcProvider);
app.use('/api/fox', foxProvider);

// Listen on Port for changes
app.listen(port, () => {
	console.log("Server listening on port: " + port);
});

