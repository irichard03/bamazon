require('dotenv').config();
const mysql = require('mysql');
const inquirer = require('inquirer');

const managerMode = function(){
    this.choiceArray = ["View Products for Sale","View Low Inventory","Add to Inventory","Add New Product"] 
    this.connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    });

    this.databaseCall = function(arg){
        const selectAll = "SELECT * FROM products;";
        const selectLowInv = "SELECT * FROM products WHERE stock_quantity <= 5;";

        let myQuery="SELECT & FROM products;"
        switch(arg){
            case "View Products for Sale":
            myQuery = selectAll;
            console.log(myQuery);
            break;
            case "View Low Inventory":
            myQuery = selectLowInv;
            console.log(myQuery);
            break;
            default:
            console.log("There was a problem.");
            process.exit(0);
        }
        
        this.connection.connect((err) =>{
            if(err) throw(err);
            this.connection.query(myQuery,
            (err,res) =>{
                if(err) throw(err);
                for (let i = 0; i < res.length; i++){
                    console.log(`${res[i].item_id}\t${res[i].product_name}\t\t${res[i].department_name}\t${res[i].price}\t${res[i].stock_quantity}`);
                }
            });
        });
        
    }



}

module.exports = managerMode;