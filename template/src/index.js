const server = require('phenix-express').server
const setup = require('./config/setup')
const config = require('./singletons/config')


setup(require('../config.json'))

server(config)