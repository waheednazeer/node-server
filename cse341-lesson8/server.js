const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongodb = require('./db/connect');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const { auth } = require('express-openid-connect');

const app = express();


const port = process.env.PORT || 8080;

// Oauth code
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
};
// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));


if (process.env.NODE_ENV=== 'development'){
  app.use(morgan('dev'));
}

app
  .use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: true }))
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  })
  .use('/', require('./routes/router.js'));

  app.use(async (req, res, next) => {
    next({status: 404, message: 'Ohh, we can not serve you. Sorry, we appear to have lost that page.'})
  })

  process.on('uncaughtException', (err, origin) => {
    console.log(process.stderr.fd, `Caught exception: ${err}\n` + `Exception origin: ${origin}`);
  });

 // error handler

  app.use(async (err, req, res, next) => {
    console.error(`Error at: "${req.originalUrl}": ${err.message}`)
  res.send(err.message)
  });

  // db connected and server running

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port);
    console.log(`Connected to DB and running ${process.env.NODE_ENV} mode on port: ${port}`);
  }
});