var mongoose = require('mongoose');

var MotorSchema = new mongoose.Schema({
    motorId : Number,
    path:String
});

module.exports = mongoose.model('Motor_paths', MotorSchema);