const express= require("express");
const env= require("dotenv");
const mongoose= require("mongoose");
const bodyParser = require("body-parser");
const app= express();

env.config();

mongoose.connect(process.env.MONGOOSE_URI);
mongoose.connection.once('open', () =>{
    console.log("Database Connected");
});

app
.use(bodyParser.json())
.use(express.urlencoded({ extended: true }))   
.use('/',require('./route/employeeRoute.js'));

app.listen(process.env.PORT, ()=>{
    console.log("Connected on Port No:" + process.env.PORT);
})