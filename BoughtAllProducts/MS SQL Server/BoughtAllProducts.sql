-- Solution for: https://leetcode.com/problems/customers-who-bought-all-products on mssql dbms platform

USE leetcodedb;

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Customer', N'U') IS NULL BEGIN
	CREATE TABLE Customer (customer_id INT, product_key INT);
END

IF OBJECT_ID(N'dbo.Product', N'U') IS NULL BEGIN
	CREATE TABLE Product (product_key INT);
END

TRUNCATE TABLE Customer;
TRUNCATE TABLE Product;

INSERT INTO Customer (customer_id, product_key) VALUES (1, 5)
INSERT INTO Customer (customer_id, product_key) VALUES (2, 6)
INSERT INTO Customer (customer_id, product_key) VALUES (3, 5)
INSERT INTO Customer (customer_id, product_key) VALUES (3, 6)
INSERT INTO Customer (customer_id, product_key) VALUES (1, 6)

INSERT INTO Product (product_key) VALUES (5)
INSERT INTO Product (product_key) VALUES (6)


-- The actual query / solution
