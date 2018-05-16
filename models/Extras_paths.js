var mongoose = require('mongoose');

var InteriorSchema = new mongoose.Schema({
    name : String,
    price: String,
    path: String
});

module.exports = mongoose.model('Extras_paths', InteriorSchema);