const express =require ("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");
const static = require("./routes/static");
const indexController = require("./controller/indexController");
const routes = require("./routes/shoppingRoute");
const env = require("dotenv");
env.config();

const app = express();
const port = process.env.PORT;

mongoose.connect(process.env.MONGOOSE_URI);
mongoose.connection.once("open", () =>{
    console.log("Database Connected");
});

//View Engine and Templates
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "./layouts/layout");

/* ***********************
 * Routes
 *************************/

app.use(static);
//index route
app.get("/", indexController.buildHomePage );

app
.use(bodyParser.json())
.use(express.urlencoded({ extended : true }))
.use("/", routes);



app.listen(port, () =>{
    console.log("Server started on port "+ port);
});
