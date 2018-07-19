const Client = require('./client')

Client.methods(['get', 'post', 'put', 'delete'])

/* New make return updated data */
Client.updateOptions({new: true, runValidators: true})

module.exports = Client