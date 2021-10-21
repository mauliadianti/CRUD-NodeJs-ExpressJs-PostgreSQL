const express = require('express')
const user = require('./Users.js')

const router = express.Router()
const userConfig = new user(); 

const routes = (app) =>{
    router.get('/get_usr', userConfig.read)
    router.get('/get_usr/:_id', userConfig.readbyId)
    router.post('/usr_register', userConfig.create)
    router.put('/usr_update/:_id', userConfig.update)
    router.delete('/usr_delete/:_id', userConfig.delete)

  app.use('/api', router)
}

module.exports = routes
