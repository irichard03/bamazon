require('dotenv').config();
const inquirer = require('inquirer');
const ManagerMode = require('./managerMode');
const choiceArray = ["View Products for Sale","View Low Inventory","Add to Inventory","Add New Product","exit"];
const myManager = new ManagerMode();

//call displayPrompt
displayPrompt();

//prompt for selection.
function displayPrompt(){
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
        addInventoryPrompt(arg);
        break;
        case "Add New Product":
        myManager.databaseCall(arg);
        break;
        default:
        console.log("Thank's and Gig'em!");
        myManager.connection.end();
        process.exit(0);
    };
}

function addInventoryPrompt(arg){
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
}