const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
const config = require('./config/config');

// Middleware
app.use(logger('dev'));
//app.use(logger('prod'));
app.use(express.static(__dirname + '/public'))	// to serve up static files
app.use(bodyParser.json());					// to be able to post json objects
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser()); // must be used before session

app.listen(config.PORT,function() {
	console.log('server listening on port ' + config.PORT);
});
