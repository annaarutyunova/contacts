const express = require('express');
const app = express();
const router = express.Router();
router.get('/', (req, res) => {
    res.send('Anna Arutyunova');
});
router.get('/profile', (req, res) => {
    res.send('My profile');
});

app.use('/', router);

app.listen(process.env.PORT || 3000, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || 3000));
});