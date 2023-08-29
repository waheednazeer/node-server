const express =require ("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes/shoppingRoute");
const env = require("dotenv");
env.config();

const app = express();
const port = process.env.PORT;

mongoose.connect(process.env.MONGOOSE_URI);
mongoose.connection.once("open", () =>{
    console.log("Database Connected");
});

app
.use(bodyParser.json())
.use(express.urlencoded({ extended : true }))
.use("/", routes);



app.listen(port, () =>{
    console.log("Server started on port "+ port);
});
