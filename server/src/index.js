const express= require("express")
const mongoose= require("mongoose")
const route= require("./route/route.js")
const multer = require("multer")
const app = express()
const cors = require("cors")


app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(multer().any())

mongoose.connect("mongodb+srv://vishal0102:vishal0102@cluster0.9uryho2.mongodb.net/Bookmanagement",{
    useNewUrlParser:true
})
.then(()=>console.log("mongodb is connected"))
.catch(err => console.log(err))

app.use(cors({"Access-Control-Allow-Origin": '*'}))
app.use("/",route)

app.use(function (req, res) {
    var err = new Error("Not Found.");
    err.status = 404;
    return res.status(404).send({ status:false, message: "Path not Found"});
});

app.listen(process.env.PORT || 8000 ,function(){
    console.log("express app is running on this port "+ (process.env.PORT || 8000))
})
