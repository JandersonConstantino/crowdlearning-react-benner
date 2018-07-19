const Parameter = require('./parameter')

Parameter.methods(['get', 'post', 'put', 'delete'])

/* New make return updated data */
Parameter.updateOptions({new: true, runValidators: true})

module.exports = Parameter