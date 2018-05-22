// Require Framework and Database
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// Body Parser to work with data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// API Routes
const cnnProvider = require('./src/providers/cnnProvider');
const breitbartProvider = require('./src/providers/breitbartProvider');
const msnbcProvider = require('./src/providers/msnbcProvider');
const foxProvider = require('./src/providers/foxProvider');
app.use('/api/cnn', cnnProvider);
app.use('/api/breitbart', breitbartProvider);
app.use('/api/msnbc', msnbcProvider);
app.use('/api/fox', foxProvider);
app.use('/', (req, res) => {
	res.send("Use: '/api/cnn' '/api/breitbart' '/api/msnbc' '/api/fox'")
});

// Database Config
const db = require('./config/keys').mongoURI

// Connect to MongoDB mLab
mongoose
	.connect(db)
	.then(() => console.log('MongoDB Connected'))
	.catch(err => console.log("Error Connecting to Database" + err))

// Listen on Port for changes
const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log("Server listening on port: " + port);
});

