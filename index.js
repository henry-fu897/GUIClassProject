const express = require('express')
const path = require('path')
const port = process.env.PORT || 5000

const app = express()
//const publicPath = path.join(__dirname, 'build')
app.use(express.static(path.join(__dirname, 'hw1')))
console.log(__dirname)
app.get("/hw1", (req, res)=>{
    res.sendFile(__dirname+'/hw1/hw1.html')
})

app.listen(port, (err)=>{
    if (err) {
        console.log(err)
        process.exit(1)
    }
    console.log(`Server Running. Listening on port ${port}`)
})