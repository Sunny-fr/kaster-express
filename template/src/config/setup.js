const path = require('path')
const config = require('../singletons/config')
const setup = (cfg) => {
    const conf = Object.assign({}, cfg, {
        publicDirectoryPath: path.resolve(cfg.publicDirectoryPath)
    })
    Object.keys(conf).forEach((prop)=>{
        config[prop] = conf[prop]
    })
}



module.exports = setup