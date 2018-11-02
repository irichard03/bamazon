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

function closeConnection(){
    connection.end(function(err){
        if(err) throw(err);
        console.log("Connection Closed.");
    });
//close closeConnection
}

function display(){
    connection.query('SELECT * FROM products;',
    (err,res) =>{
        if(err) throw(err);
            console.log(`Id\tProduct\t\t\tDepartment\tPrice\tquantity`);
        for (let i = 0; i < res.length; i++){
            console.log(`${res[i].item_id}\t${res[i].product_name}\t\t${res[i].department_name}\t${res[i].price}\t${res[i].stock_quantity}`);
        }
        getQuery("product_name");
        //displayPrompt();
    });
    
//close display
}
    
function getQuery(arg){
    if(!arg){
        console.log("Error No Argument");
        closeConnection();
        process.exit(1);
    }
    else{
        connection.query(`SELECT ${arg}  FROM products;`,
        (err,res) =>{
        if(err) throw(err);
        console.log(res[0].product_name);
        queryArray.push(res[0].product_name);
        console.log(queryArray);
        }
    )};
    
}



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
        },
    ]).then(function(answer) {
        console.log(answer.product);
        console.log(answer.quantity);
        closeConnection();
    });
//close displayPrompt    
}


