const restful = require('node-restful')
const mongoose = restful.mongoose

parameterSchema = new mongoose.Schema({
    name: {type: String, required: true},
    value: {type: String, required: true},
})

module.exports = restful.model('Parameter', parameterSchema)