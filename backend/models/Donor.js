const {model} = require('mongoose');

module.exports = model('Donor', {
    name: String,
    bloodGroup: String,
    date: Date,
    notes: String 
});