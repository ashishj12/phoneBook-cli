//require mongodb database
const { MongoClient } = require('mongodb');
const db = require('./db');

//create flags arguments with their value 
const flag = process.argv[2];
const name = process.argv[3];
const contact = process.argv[4];
const email = process.argv[5];

//create flags
const addFlag = "--add";
const getFlag = "--get";
const getUserFlag = "--finduser";
const removeUserFlag = "--removeuser";
const helpFlag = "--help";

//check condition for getting helpflag
if (process.argv.length < 3 || flag === helpFlag) {
    db.getHelp();
    process.exit(1);
}

switch (flag) {
    case addFlag:
        db.AddDetails(name, contact, email);
        break;
    case getFlag:
        db.getDetails();
        break;
    case getUserFlag:
        db.getUsername(name);
        break;
    case removeUserFlag:
        db.removeUser(name);
        break;
    default:
        console.log("Invalid flag");
        db.getHelp();
        break;
}
