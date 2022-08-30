const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

//express app
const app = express()

//middleware

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(cors())

app.use(morgan("dev"))


//routes
const weather = require("./routes/api/weather")
app.use("/api/weather", weather)

//TODO: production env
if(process.env.NODE_ENV === "production"){
    //static files
    app.use(express.static(__dirname+ "/public/"))
    //SPA
    app.get(/.*/, (req,res)=>res.sendFile(__dirname+"/public/index.html"))
}

//port and stuff
const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`Listening for requests on port:${port}`)
})