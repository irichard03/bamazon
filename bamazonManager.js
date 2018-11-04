require('dotenv').config();
const inquirer = require('inquirer');
const ManagerMode = require('./managerMode');
const choiceArray = ["View Products for Sale","View Low Inventory","Add to Inventory","Add New Product","exit"];

const myManager = new ManagerMode();

displayPrompt(function(){
    displayPrompt();
});

function displayPrompt(callback){
    inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'BAMAZON - Manager Mode',
            choices: choiceArray
        },
    ]).then(function(answer) {
        runSelected(answer.choice);
    });
//close displayPrompt    
}

function runSelected(arg){
    switch(arg){
        case "View Products for Sale":
        myManager.databaseCall(arg);
        break;
        case "View Low Inventory":
        myManager.databaseCall(arg);
        break;
        case "Add to Inventory":
        addInventoryPrompt(function(){
            displayPrompt();
        },arg);
        break;
        case "Add New Product":
        myManager.databaseCall(arg);
        break;
        default:
        console.log("Thank's and Gig'em!");
        myManager.connection.end();
        process.exit(0);
    }
}

function addInventoryPrompt(callback,arg){
    inquirer.prompt([
        {
            type: 'input',
            name: 'product',
            message: 'What product would you like to add inventory for?',
        },
        {
            type: 'input',
            name: 'quantity',
            message: 'How many would you like to add to inventory?',
        }
    ]).then(function(answer) {
        myManager.databaseCall(arg,answer.quantity,answer.product);
    });
//close displayPrompt    
}

//close create connection


//list menu options

//view products for sale
    //list all items, their ID, prices and quantity.
//view low inventory
    //list all items with inventory lower than 5.
//add to inventory
    //display prompt to add inventory to any item
//add new product
    //add completely new product to store.
