const express = require('express')
const path = require('path')
const port = process.env.PORT || 5000

const app = express()
//const publicPath = path.join(__dirname, 'build')
app.use(express.static(path.join(__dirname)))
app.get("/hw1", (req, res)=>{
    res.sendFile(__dirname+'/hw1/hw1.html')
})
app.get("/hw2", (req, res)=>{
    res.sendFile(__dirname+'/hw2/public/index.html')
})
app.get("/hw3", (req, res)=>{
    res.sendFile(__dirname+'/hw3/hw3.html')
})
app.get("/hw4", (req, res)=>{
    res.sendFile(__dirname+'/hw4/hw4.html')
})
app.get("/test", (req, res) => {
    res.json({ message: "Hello"})
})
app.get('*', (req, res) => {
    res.sendFile(__dirname+'/hw2/public/index.html')
})

app.listen(port, (err)=>{
    if (err) {
        console.log(err)
        process.exit(1)
    }
    console.log(`Server Running. Listening on port ${port}`)
})