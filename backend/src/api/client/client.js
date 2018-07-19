const restful = require('node-restful')
const mongoose = restful.mongoose

clientSchema = new mongoose.Schema({
    name: {type: String, required: true},
    cpf: {type: String, required: true},
    rg: {type: String, required: false},
    datetimeregister: {type: Date, default: Date.now},
    dateofbirth: {type: Date, required: true}
})

module.exports = restful.model('Client', clientSchema)