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
        res.status(500).json({message: e.message})
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
        // console.log(contactsList);
        contactsList.forEach(contact => contacts.push(contact))
        return contacts

    } catch (e) {
        res.status(500).json({message: e.message})
        console.error(e);
    } finally {
        await client.close();
    }
    
}

async function findById(req, res){
    const uri = process.env.MONGODB_URI
    const client = new MongoClient(uri);
    const idToFind = req.params.id
    // '650f91fcd7a6ddb77b1ade53'
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        document = await client.db('contacts').collection('contacts').findOne({"_id" : new ObjectId(idToFind) });
        return document

    } catch (e) {
        res.status(500).json({message: e.message})
        console.error(e);
    } finally {
        await client.close();
    }
}

async function addContact(req, res){
    const uri = process.env.MONGODB_URI
    const client = new MongoClient(uri);
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        const body = {
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            favoriteColor:req.body.favoriteColor,
            birthday:req.body.birthday
        };

        document = await client.db('contacts').collection('contacts').insertOne(
            body);
            res.status(201)
            .json({document})
        // return document

    } catch (e) {
        res.status(500).json({message: e.message})
        console.error(e);
    } finally {
        await client.close();
    }
}

async function updateContact(req, res){
    const uri = process.env.MONGODB_URI
    const client = new MongoClient(uri);
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        const id = new ObjectId(req.params.id)
        console.log("id", id)
        const body = {
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            favoriteColor:req.body.favoriteColor,
            birthday:req.body.birthday
        };
        document = await client.db('contacts').collection('contacts').updateOne({"_id" : id}, {$set: body} );
        res.status(204)

        return document

    } catch (e) {
        res.status(500).json({message: e.message})
        console.error(e);
    } finally {
        await client.close();
    }
}

async function deleteContact(req, res){
    const uri = process.env.MONGODB_URI
    const client = new MongoClient(uri);
    const id = new ObjectId(req.params.id)
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        document = await client.db('contacts').collection('contacts').deleteOne({"_id" : id});
        res.status(200)
        return document

    } catch (e) {
        res.status(500).json({message: e.message})
        console.error(e);
    } finally {
        await client.close();
    }
}


module.exports = {listDatabases, listContacts, findById, addContact, updateContact, deleteContact};

