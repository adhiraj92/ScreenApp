var mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/temp_db');
mongoose.Promise = Promise;

module.exports.Screen = require('./screen');