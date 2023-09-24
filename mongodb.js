const {MongoClient, ObjectId} = require('mongodb');
const dotenv = require("dotenv")
dotenv.config();
async function listDatabases(){
    const uri = process.env.MONGODB_URI
    const client = new MongoClient(uri);
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        // Make the appropriate DB calls
        //    console.log("Databases:");
        // databasesList.databases.forEach(db => console.log(` - ${db.name}`));
        let database_names = []
        databasesList = await client.db().admin().listDatabases();
        databasesList.databases.forEach(db => database_names.push(` - ${db.name}`));
        return database_names  
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

async function listContacts(){
    const uri = process.env.MONGODB_URI
    const client = new MongoClient(uri);
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        let contacts = []
        contactsList = await client.db('contacts').collection('contacts').find({}).toArray();
        console.log(contactsList);
        contactsList.forEach(contact => contacts.push(contact))
        return contacts

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
    
}

async function findById(){
    const uri = process.env.MONGODB_URI
    const client = new MongoClient(uri);
    const idToFind = '650f91fcd7a6ddb77b1ade53'
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        document = await client.db('contacts').collection('contacts').findOne({"_id" : new ObjectId(idToFind) });
        return document

    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}


module.exports = {listDatabases, listContacts, findById};

