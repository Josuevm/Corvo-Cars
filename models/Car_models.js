var mongoose = require('mongoose');

var CarModelsSchema = new mongoose.Schema({
    name : String,
    description : String,
    image: String,
});

module.exports = mongoose.model('Car_models', CarModelsSchema);