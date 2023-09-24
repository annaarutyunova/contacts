const utilities = require('../mongodb');

const homeRoute = async (req, res) => {
    console.log(await utilities.listDatabases())
    res.send(await utilities.listDatabases())
    ;
};
const profileRoute = async (req, res) => {
    res.send(await utilities.listContacts());
};
const loginRoute = async (req, res) => {
    res.send(await utilities.findById());
};
module.exports = { homeRoute, profileRoute, loginRoute };
