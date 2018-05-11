var mongoose = require('mongoose');

var MotorSchema = new mongoose.Schema({
    name : String,
    path:String
});

module.exports = mongoose.model('Motor_paths', MotorSchema);