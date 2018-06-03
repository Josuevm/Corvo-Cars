var mongoose = require('mongoose');

var InteriorSchema = new mongoose.Schema({
    ID : String,
    name : String,
    path: String,
    price: String
});


module.exports = mongoose.model('Interior_paths', InteriorSchema);