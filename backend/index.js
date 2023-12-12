const express = require('express')
const app = express()
const port = process.env.PORT || 5000
require('dotenv').config()
const router=require('./src/api/api')
const applymiddleware = require('./src/middlewares/applymiddleware')


// middleware 
applymiddleware(app)




async function run() {
  try {
      //  router path use all data--------------------
      app.use('/',router)



    // simple get data
    app.get('/', (req, res) => {
      res.send('server running for website??')
    })
    console.log("Mongobd connect");
  } finally {
    // Ensures that the client will close when you finish/error
    //   await client.close();
  }
}
run().catch(console.dir)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})