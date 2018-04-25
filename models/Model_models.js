var mongoose = require('mongoose');

var ModelModelsSchema = new mongoose.Schema({
    id : Number,
    image : String,
   
});

module.exports = mongoose.model('Model_Models', ModelModelsSchema);
