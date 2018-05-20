const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cnnProvider = require('./src/providers/cnnProvider');
const breitbartProvider = require('./src/providers/breitbartProvider');
const msnbcProvider = require('./src/providers/msnbcProvider');
const foxProvider = require('./src/providers/foxProvider');

// Body Parser to work with data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



// Use Routes
app.use('/api/cnn', cnnProvider);
app.use('/api/breitbart', breitbartProvider);
app.use('/api/msnbc', msnbcProvider);
app.use('/api/fox', foxProvider);
app.use('/', (req, res) => {
	res.send("Use: '/api/cnn' '/api/breitbart' '/api/msnbc' '/api/fox'")
});

// Listen on Port for changes
const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log("Server listening on port: " + port);
});

