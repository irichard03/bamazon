require('dotenv').config();
const mysql = require('mysql');
const inquirer = require('inquirer');
const queryArray = [];

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
//close create connection
});

connection.connect((err) =>{
    if(err) throw(err);
    display();
//close connect
});

function display(){
    connection.query('SELECT * FROM products;',
    (err,res) =>{
        if(err) throw(err);
            console.log(`Id\tProduct\t\t\tDepartment\tPrice\tquantity`);
        for (let i = 0; i < res.length; i++){
            console.log(`${res[i].item_id}\t${res[i].product_name}\t\t${res[i].department_name}\t${res[i].price}\t${res[i].stock_quantity}`);
        }
        getQuery("product_name");
    });
//close display
}
    
function getQuery(arg){
    if(!arg){
        console.log("Error no argument in getQuery(), this should not have happened.");
        closeConnection();
        process.exit(1);
    }
    else{
        connection.query(`SELECT ${arg}  FROM products;`,
        (err,res) =>{
            if(err) throw(err);
            console.log(res[0].product_name);
            for (let i = 0; i < res.length; i++){
                queryArray.push(res[i].product_name);
            }
            displayPrompt();
        }
    )};
    
}
//Prompt for product to purchase and quantity.
function displayPrompt(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'product',
            message: '\n\nselect product to purchase.',
            choices: queryArray
        },
        {
            type: 'input',
            name: "quantity",
            message: "How many would you like to purchase?"
        }
    ]).then(function(answer) {
        confirmPurchase(answer.product,answer.quantity);
    });
//close displayPrompt    
}

function confirmPurchase(product, quantity){
    if((!product) || (!quantity)){
        console.log("Error missing argument in confirmPurchase()");
        closeConnection();
        process.exit(2);
    }
    connection.query(`SELECT stock_quantity, price FROM products WHERE product_name='${product}';`,
    (err,res) =>{
        if(err) throw(err);
        let q = quantity;
        let s = res[0].stock_quantity;
        if(q <= s){
            let price = res[0].price;
            let checkoutTotal = price * quantity;
            console.log("Your order has been placed for " + quantity + " " + product + " you checkout total is " + checkoutTotal);
            s -= q;
            connection.query(`UPDATE products SET stock_quantity = ${s} WHERE product_name='${product}';`,
            (err,res) =>{
                if(err) throw(err);
                display();
            });
        }
        else{
            console.log("Insufficient inventory, currently " + s + " remain in inventory, would you like to modify your purchase?");
            displayPrompt();
        } 
    });
}

function closeConnection(){
    connection.end(function(err){
        if(err) throw(err);
        console.log("Connection Closed.");
    });
//close closeConnection
}