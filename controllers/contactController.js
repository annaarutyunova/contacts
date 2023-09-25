const utilities = require('../mongodb');

const databases = async (req, res) => {
    console.log(await utilities.listDatabases())
    res.send(await utilities.listDatabases())
    ;
};
const contacts = async (req, res) => {
    res.send(await utilities.listContacts());
};
const byid = async (req, res) => {
    res.send(await utilities.findById());
};
module.exports = { databases, contacts, byid };
