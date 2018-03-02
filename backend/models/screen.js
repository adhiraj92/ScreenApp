var mongoose = require('mongoose');

var screenSchema = new mongoose.Schema({
   screen: String,
});

var Screen = mongoose.model('Screen', screenSchema);

module.exports = Screen;