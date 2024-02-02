const express = require('express')
const router = express.Router()
const userApi = require('./api/user.api')

router.use("/",userApi)

module.exports = router

