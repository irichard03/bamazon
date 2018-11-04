require('dotenv').config();
const mysql = require('mysql');
const inquirer = require('inquirer');
const managerMode = require('./managerMode');

const myManager = new managerMode();

//myManager.databaseCall("View Products for Sale");
myManager.databaseCall("View Low Inventory");


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
