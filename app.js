const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json())

app.use('/', require('./routes/contacts.js'))

app.listen(process.env.PORT || 3000, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});



