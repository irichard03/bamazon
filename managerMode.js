require('dotenv').config();
const mysql = require('mysql');

const managerMode = function(){
     this.connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    });

    this.display = function(){
        this.connection.connect((err) =>{
            if(err) throw(err);
            this.connection.query('SELECT * FROM products;',
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