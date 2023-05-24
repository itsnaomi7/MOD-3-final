const mongoose = require('mongoose');
// Ensure the teamSchema model is processed by Mongoose
require('./Category');

const veggiesSchema = require('./veggiesSchema');


module.exports = mongoose.model('Veggie', veggiesSchema);