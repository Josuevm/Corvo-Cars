var mongoose = require('mongoose');

var InteriorSchema = new mongoose.Schema({
    name : String,
    path: String,
});


module.exports = mongoose.model('Interior_paths', InteriorSchema);