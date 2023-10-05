const swaggerAutogen = require('swagger-autogen')();
const doc = {
    info: {
        title: "Contacts API",
        description: "API for contacts",
    },
    host : 'localhost:3000',
    // host : 'name-cse341.onrender.com',
    schemes: ['http', 'https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/contacts.js'];

//generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);

// Run server after it gets generated
// swaggerAutogen(outputFile, endpointsFiles, doc).then(async(0 => {
//  await import('./index.js');
// });