DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products(
	item_id INTEGER NOT NULL AUTO_INCREMENT,
	product_name VARCHAR(64) NOT NULL,
    department_name VARCHAR(64) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    stock_quantity INTEGER NOT NULL,
    PRIMARY KEY (item_id)
);
    
INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES ("HD 883 Custom", "Motorcycles", 8949.99, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES ("HD 1200 Custom", "Motorcycles", 10999.99, 10);
    
INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES ("HD Fat Bob", "Motorcycles", 16999.99, 6);    
    
INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES ("Yamaha Bolt", "Motorcycles", 7999.99, 12);
    
INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES ("Honda Rebel 500", "Motorcycles", 6499.99, 12);
    
INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES ("Honda Shadow", "Motorcycles", 7799.99, 12);
    
INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES ("Suzuki M50", "Motorcycles", 8649.99, 8);
    
INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES ("Suzuki M90", "Motorcycles", 11249.99, 6);

INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES ("Kawasaki Vulcan", "Motorcycles", 8499.99, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
	VALUES ("Indian Chief", "Motorcycles", 18499.99, 2);
    
SELECT * FROM products;
