# bamazon

This repo is from our Week 8 Homework assignment, to produce an ecommerce backend using Node.JS, mySQL and inquire.  It contains two java script node js files.
```
bamazonCustomer.js
bamazonManager.js
```
I used the following packages:
* inquirer
* mySQL
* console.Table
* dotEnv

#How to run bamazonCustomer
1. In terminal/bash type the below text and hit enter.
```
node bamazonCustomer
```
2. Use Arrow Keys and hit enter to select product.
```
Id      Product                 Department      Price   quantity
1       HD 883 Custom           Motorcycles     8949.99 12
2       HD 1200 Custom          Motorcycles     10999.99        10
3       HD Fat Bob              Motorcycles     16999.99        6
4       Yamaha Bolt             Motorcycles     7999.99 12
5       Honda Rebel 500         Motorcycles     6499.99 12
6       Honda Shadow            Motorcycles     7799.99 12
7       Suzuki M50              Motorcycles     8649.99 8
8       Suzuki M90              Motorcycles     11249.99        6
9       Kawasaki Vulcan         Motorcycles     8499.99 4
10      Indian Chief            Motorcycles     18499.99        2
11      Shoei RF-1200           gear    485.99  10
12      Riding Gloves           gear    19.99   32
?  883 Custom

select product to purchase. (Use arrow keys)
> HD 883 Custom
  HD 1200 Custom
  HD Fat Bob
  Yamaha Bolt
  Honda Rebel 500
  Honda Shadow
  Suzuki M50
(Move up and down to reveal more choices)

```
3. Type the quantity of the product you would like to purchase and hit enter.
```
select product to purchase. HD 883 Custom
? How many would you like to purchase? 3
```
4. The table will update, and the prompt will return for additional purchases.
```
? How many would you like to purchase? 3
Your order has been placed for 3 HD 883 Custom you checkout total is 26849.97
Id      Product                 Department      Price   quantity
1       HD 883 Custom           Motorcycles     8949.99 9
2       HD 1200 Custom          Motorcycles     10999.99        10
3       HD Fat Bob              Motorcycles     16999.99        6
4       Yamaha Bolt             Motorcycles     7999.99 12
5       Honda Rebel 500         Motorcycles     6499.99 12
6       Honda Shadow            Motorcycles     7799.99 12
7       Suzuki M50              Motorcycles     8649.99 8
8       Suzuki M90              Motorcycles     11249.99        6
9       Kawasaki Vulcan         Motorcycles     8499.99 4
10      Indian Chief            Motorcycles     18499.99        2
11      Shoei RF-1200           gear    485.99  10
12      Riding Gloves           gear    19.99   32
HD 883 Custom
?

select product to purchase. (Use arrow keys)
> HD 883 Custom
  HD 1200 Custom
  HD Fat Bob
  Yamaha Bolt
  Honda Rebel 500
  ```
# NOTES
* Hit ctrl+c to exit.
* The table is not formatted.


#How to run bamazonManager
1. In terminal/bash type the below text and hit enter.
```
node bamazonManager
```
2. Use Arrow Keys and hit enter to select a command.
```
? BAMAZON - Manager Mode (Use arrow keys)
> View Products for Sale
  View Low Inventory
  Add to Inventory
  Add New Product
  exit
```

* View Products for Sale: Displays a prettified table, hit ctrl+c to exit.
```
ID  Product          Department   Price     Quantity
--  ---------------  -----------  --------  --------
1   HD 883 Custom    Motorcycles  8949.99   9
2   HD 1200 Custom   Motorcycles  10999.99  10
3   HD Fat Bob       Motorcycles  16999.99  6
4   Yamaha Bolt      Motorcycles  7999.99   12
5   Honda Rebel 500  Motorcycles  6499.99   12
6   Honda Shadow     Motorcycles  7799.99   12
7   Suzuki M50       Motorcycles  8649.99   8
8   Suzuki M90       Motorcycles  11249.99  6
9   Kawasaki Vulcan  Motorcycles  8499.99   4
10  Indian Chief     Motorcycles  18499.99  2
11  Shoei RF-1200    gear         485.99    10
12  Riding Gloves    gear         19.99     32

```

* View Low Inventory Displays a prettified table of products whose inventory is below 5.
```
ID  Product          Department   Price     Quantity
--  ---------------  -----------  --------  --------
9   Kawasaki Vulcan  Motorcycles  8499.99   4
10  Indian Chief     Motorcycles  18499.99  2

```

* Add to Inventory will prompt you to type a product name, and amount of inventory.
```
What product would you like to add inventory for? Riding Boots
How many would you like to add to inventory? 8
Inventory updated!
```

* Add New Product will prompt you to to type a new product name, quantity, department, and price.
```
? What product would you like to add? Riding Boots
? How many would you like to add to inventory? 8
? What is the price of this product? 99.99
? What department should this product be listed under? gear
Product has been added.
```
* NOTE: You will have to run bamazonManager and choose View Products for Sale to see changes to databse.


#Further Development
1. Prettify Tables in bamazonCustomer.
2. Add choices to bamazonCustomer for exit.
3. Call Prompt after table update/display in bamazonManager.