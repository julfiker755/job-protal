const cors = require('cors')
const express = require('express')


const applymiddleware = (app) => {
app.use(cors())
app.use(express.json())

};

module.exports=applymiddleware