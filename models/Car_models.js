var mongoose = require('mongoose');

var CarModelsSchema = new mongoose.Schema({
    name : String,
    description : String,
    image: String,
    features: [],
    color: String,
    rims: String,
    inside: String,
    motor: String,
    extras : []
});

module.exports = mongoose.model('Car_models', CarModelsSchema);