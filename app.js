const express = require('express');
const app = express();

app.use('/', require('./routes/index.js'));
app.use('/contacts', require('./routes/contacts.js'))

app.listen(process.env.PORT || 3000, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});



