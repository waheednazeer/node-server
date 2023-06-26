const express= require('express');
const dotenv= require('dotenv');
const exphbs= require('express-handlebars');
const connectDB= require('./config/db');
const morgan= require('morgan')

// load config
dotenv.config({path: './config/config.env'});

connectDB();
const app = express();

if(process.env.NODE_ENV == 'development'){
    app.use(morgan('dev'))
}

const PORT= process.env.PORT || 3000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));