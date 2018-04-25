var mongoose = require('mongoose');

var InteriorSchema = new mongoose.Schema({
    name : String,
    description : String,
    image: String,
    features: []
});


module.exports = mongoose.model('Interior_paths', InteriorSchema);