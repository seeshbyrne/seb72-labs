const mongoose = require('mongoose');
const prompt = require('prompt-sync')();
const dotenv = require('dotenv');
dotenv.config();

const connect = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
    await runQueries()
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    process.exit();
};

connect()

const customerSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;


// Welcome to the CRM ////////////////////////////////////////////////

// What would you like to do?

//   1. Create a customer
//   2. View all customers
//   3. Update a customer
//   4. Delete a customer
//   5. quit

// Number of action to run: 
// # user inputs 3 = UPDATE

console.log('Welcome to the CRM!');
console.log('What would you like to do?');

console.log('1. Create');
console.log('2. View all');
console.log('3. Update');
console.log('4. delete');
console.log('5. quit');

const option = prompt('Please enter the number to run:');

//do we need an if statement?????

console.log('Below is a list of customers:')
console.log('id: 658226acdcbecfe9b99d5421 --  Name: Matt, Age: 43')
console.log('id: 65825d1ead6cd90c5c430e24 --  Name: Vivienne, Age: 6')

const customerId = prompt('Please copy and paste the id of the customer you would like to update:');

const customerOne = {
    id: '658226acdcbecfe9b99d5421',
    name: 'Matt',
    age: 43
};

const customerTwo = {
    id: '65825d1ead6cd90c5c430e24',
    name: 'Vivienne',
    age: '6'
};




const updateCustomer = async () => {
    const id = `${customerId}`;
    const updatedCustomer = await Customer.findByIdAndUpdate(
        id,
        { name: `${username}` },
        { age: `${age}` }
    );
    console.log("Updated customer:", updatedCustomer);
};   

const runQueries = async () => {
    await updateCustomer();
  };



// What is the customers new name?
// # user inputs Bilbo
// What is the customers new age?
// # user inputs 50

const username = prompt('What is the customers new name?');
console.log(`Thanks ${username}!`);

const age = prompt('What is the customers new age?');
console.log(`${username}'s new is ${age} years old`);


// Choosing Next Action: ////////////////////////////////////////////////

// What would you like to do?

//   1. Create a customer
//   2. View all customers
//   3. Update a customer
//   4. Delete a customer
//   5. Quit

// Number of action to run: 
// # user inputs 2

const nextStep = prompt('What would you like to do next?');

// const customer = await Customer.find({});





// Viewing Updated Customers: /////////////////////////////////////////////

// id: 658226acdcbecfe9b99d5421 --  Name: Bilbo, Age: 50
// id: 65825d1ead6cd90c5c430e24 --  Name: Vivienne, Age: 6







// Choosing Next Action: ///////////////////////////////////////////////////

// What would you like to do?

//   1. Create a customer
//   2. View all customers
//   3. Update a customer
//   4. Delete a customer
//   5. Quit

// Number of action to run: 
// # user inputs 5

const nextNextStep = prompt('What would you like to do next?');




// Exiting the Application///////////////////////////////////
// mongoose.connection.close()