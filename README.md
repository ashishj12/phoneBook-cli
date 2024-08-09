**PhoneBook CLI Application**

This is a command-line application built with Node.js and MongoDB that allows users to add and find customer details such as name, phone number, and email.

**Features :** 
* Add Customer: Easily add a new customer's details to the database.
* Find Customer: Search for a customer by their name.

**Prerequisites**

Before you begin, ensure you have the following installed on your local machine:
Node.js
MongoDB 

**Installation**

* Clone the Repository
Clone the repository to your local machine using the following command:
git clone https://github.com/ashishj12/phoneBook-cli.git

* Navigate to the Project Directory
Change your current working directory to the project folder:

cd phoneBook-cli

**Install the required Node.js packages:**
* npm install
* Set Up MongoDB
* Make sure MongoDB is running on your machine. You can start it with:
* By default, the application connects to a MongoDB instance running on mongodb://localhost:27017. If your MongoDB instance is running on a different host or port, update the connection string in the index.js file.

**Run the Application**
node index.js

**Usage**
Once the application is running, you can use the following commands:

**Add a user**
To add a new user to the database, run the following command and follow the prompts:
* node index.js --add
* You will be prompted to enter the customer's name, phone number, and email address.

**Find a Customer**
node index.js --finduser
You will be prompted to enter the customer's name.

**get all users**
node index.js --get
You will be prompted to get all users details

**remove a user**
node index.js --removeuser
You will be prompted to enter the user's name.
