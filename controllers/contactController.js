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
    res.send(await utilities.findById(req, res));
};

const addContact = async (req, res) => {
    res.send(await utilities.addContact(req,res))

}

const updateContact = async (req, res) => {
    res.send(await utilities.updateContact(req, res))
}

const deleteContact = async (req, res) => {
    res.send(await utilities.deleteContact(req,res))
}


module.exports = { databases, contacts, byid, addContact, updateContact, deleteContact };
