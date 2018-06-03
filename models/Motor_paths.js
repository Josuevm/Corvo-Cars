var mongoose = require('mongoose');

var MotorSchema = new mongoose.Schema({
    ID : String,
    name : String,
    path: String,
    price: String
});

module.exports = mongoose.model('Motor_paths', MotorSchema);