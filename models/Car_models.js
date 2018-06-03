var mongoose = require('mongoose');

var CarModelsSchema = new mongoose.Schema({
    name : String,
    description : String,
    image: String,
    features: [],
    color: {
        ID:String,
        name: String,
    },
    rims: {
        ID:String,
        name: String,
        price: String
    },
    inside: {
        ID:String,
        name: String,
        price: String
    },
    motor: {
        ID:String,
        name: String,
        price: String
    },
    extras : []
});

module.exports = mongoose.model('Car_models', CarModelsSchema);