const homeRoute = (req, res) => {
    res.send('Anna Arutyunova');
};
const profileRoute = (req, res) => {
    res.send('My profile');
};
const loginRoute = (req, res) => {
    res.send('Login page');
};
module.exports = { homeRoute, profileRoute, loginRoute };