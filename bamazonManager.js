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
        runSelected(answer.choice,function(){
        });

    });
}

//called by prompt, answer.choice is argument, I wrote out cases instead of using array indices for readability, hardcodes input for choice.
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
            addProductPrompt(arg);
        break;
        default:
            throw (arg);
    };
}
//add inventory and add product functions require additonal prompts and call databaseCall method.
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
//add inventory and add product functions require additonal prompts and call databaseCall method. 
function addProductPrompt(arg){
    inquirer.prompt([
        {
            type: 'input',
            name: 'product',
            message: 'What product would you like to add?',
        },
        {
            type: 'input',
            name: 'quantity',
            message: 'How many would you like to add to inventory?',
        },
        {
            type: 'input',
            name: 'price',
            message: 'What is the price of this product?',
        },
        {
            type: 'input',
            name: 'department',
            message: 'What department should this product be listed under?',
        }
    ]).then(function(answer) {
        myManager.databaseCall(arg,answer.quantity,answer.product,answer.price,answer.department);
    });
}