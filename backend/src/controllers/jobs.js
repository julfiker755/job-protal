const {client}=require('../connect/connect')
const databasejobs = client.db("JobProtal").collection("jobs");



// jobs get
exports.jobs=async(req, res) => {
    const result = await databasejobs.find({}).toArray()
    res.send(result)
}

