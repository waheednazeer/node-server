const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'My Students API',
    description: 'Students & Courses Collections in Mongodb',
  },
  host: 'localhost:8080',
  schemes: ['http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/router.js'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as index.js, app.js, routes.js, ... */

swaggerAutogen(outputFile, endpointsFiles, doc);