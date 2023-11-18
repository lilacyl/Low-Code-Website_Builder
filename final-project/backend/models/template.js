const mongoose = require('mongoose');

const TemplateSchema = new mongoose.Schema({
    userId: {type: String, required: true},
    name: {type: String, required: true},
    template: {type: String, required: true},
    templateState:{type: Object},

});

module.exports = mongoose.model('Template', TemplateSchema);