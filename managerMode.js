require('dotenv').config();
const mysql = require('mysql');
const cTable = require('console.table');
const tableArray =[];

//constructor, manager holds datbase settings, has a method for making database calls
const ManagerMode = function(){
    this.choiceArray = ["View Products for Sale","View Low Inventory","Add to Inventory","Add New Product"] 
    this.connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    });
    //all my queries are passed in using arg to set the query, and parameters.
    this.databaseCall = function(arg, amount, product, price, department){
        const selectAll = "SELECT * FROM products;";
        const selectLowInv = "SELECT * FROM products WHERE stock_quantity <= 5;";
        const addInventory = `UPDATE products SET stock_quantity = ${amount} WHERE product_name = '${product}';`;
        const insertProduct = `INSERT INTO products(stock_quantity,product_name,price,department_name) VALUES(${amount},'${product}',${price},'${department}');`;

        let myQuery="SELECT * FROM products;"
        //switch sets query based on arg.
        switch(arg){
            case "View Products for Sale":
                myQuery = selectAll;
                console.log(myQuery);
            break;
            case "View Low Inventory":
                myQuery = selectLowInv;
            break;
            case "Add to Inventory":
                myQuery = addInventory;
                console.log("Inventory updated!");
            break;
            case "Add New Product":
                myQuery = insertProduct;
                console.log("Product has been added.");
            break;
            default:
            console.log("There was a problem.");
            break;
        }
        //connects to sql database, and either throws error and quits or displays table.
        this.connection.connect((err) =>{
            if(err) throw(err);
            this.connection.query(myQuery,
            (err,res) =>{
                if(err) throw(err);
                 
                for (let i = 0; i < res.length; i++){
                    tableArray.push(Object.values(res[i]));
                }
                
                console.table(['ID','Product','Department','Price','Quantity'],tableArray);
            });
        });
    }
}

module.exports = ManagerMode;