var mongoose = require('mongoose');

var RimsSchema = new mongoose.Schema({
    rimId : String,
    path : String
});

module.exports = mongoose.model('Rims_paths', RimsSchema);