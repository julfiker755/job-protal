const express = require('express')
const router=express.Router()
const allcontrollers=require('../controllers/jobs')


router.get('/jobs',allcontrollers.jobs)






module.exports=router