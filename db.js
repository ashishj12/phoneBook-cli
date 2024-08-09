const { MongoClient } = require('mongodb');
let connectionString = `mongodb://127.0.0.1:27017/phoneBook`;

//getting help function
function getHelp() {
    console.log(`
        Usage: node [yourscript.js] [flag] [name] [contact] [email]
        Flags:
          --add name contact email    Add new contact.
          --get                       Get all contacts.
          --finduser name             Find contact by name.
          --removeuser name           Remove contact by name.
          --help                      Show help message.
    `);
}

//create function for adding details of users
async function AddDetails(name, contact, email) {
    if (!name || !contact || !email) {
        console.log("Invalid Details");
        getHelp();
        return;
    }
    const client = new MongoClient(connectionString);
    try {
        await client.connect();
        console.log("Adding Details:", name, contact, email);
        const contacts = client.db().collection("contacts");
        const newContact = { name, contact, email };
        await contacts.insertOne(newContact);
    } catch (err) {
        console.log("Error adding details:", err);
    } finally {
        await client.close();
    }
}


//function for get all users details in database
async function getDetails() {
    const client = new MongoClient(connectionString);
    try {
        await client.connect();
        const contacts = client.db().collection("contacts");
        const allContacts = await contacts.find().toArray();
        console.log("All Contacts:", allContacts);
    } catch (err) {
        console.log("Error getting details:", err);
    } finally {
        await client.close();
    }
}


//function for get single user detail
async function getUsername(name) {
    if (!name) {
        console.log("Enter Name : ");
        getHelp();
        return;
    }
    const client = new MongoClient(connectionString);
    try {
        await client.connect();
        const contacts = client.db().collection("contacts");
        const user = await contacts.findOne({ name });
        console.log("User Details:", user);
    } catch (err) {
        console.log("Error finding user:", err);
    } finally {
        await client.close();
    }
}


//function for remove user from database
async function removeUser(name) {
    if (!name) {
        console.log("Please provide a name.");
        getHelp();
        return;
    }
    const client = new MongoClient(connectionString);
    try {
        await client.connect();
        const contacts = client.db().collection("contacts");
        await contacts.deleteOne({ name });
        console.log("User removed:", name);
    } catch (err) {
        console.log("Error removing user:", err);
    } finally {
        await client.close();
    }
}

//exports all modules
module.exports = {
    getHelp,
    AddDetails,
    getDetails,
    getUsername,
    removeUser
};
