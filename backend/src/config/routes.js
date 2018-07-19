const express = require('express')

module.exports = function(server) {

    /// --- API routes
    const router = express.Router()
    server.use('/api', router)

    /// --- CLIENT Routes
    const clientService = require('../api/client/clientService')
    clientService.register(router, '/clients')
}