var mongoose = require('mongoose');

var CarModelsSchema = new mongoose.Schema({
    name : String,
    description : String,
    image: String,
    features: []
});

module.exports = mongoose.model('Car_models', CarModelsSchema);