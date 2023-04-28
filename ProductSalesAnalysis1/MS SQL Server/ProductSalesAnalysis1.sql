-- Solution for: https://leetcode.com/problems/product-sales-analysis-i/

USE leetcodedb;
GO

IF OBJECT_ID(N'dbo.Sales', N'U') IS NULL BEGIN
	CREATE TABLE Sales (sale_id INT, product_id INT, year INT, quantity INT, price INT);
END
GO

IF OBJECT_ID(N'dbo.Product', N'U') IS NULL BEGIN
	CREATE TABLE Product (product_id INT, product_name VARCHAR(10));
END
GO

TRUNCATE TABLE Sales;

INSERT INTO Sales (sale_id, product_id, year, quantity, price) VALUES (1, 100, 2008, 10, 5000);
INSERT INTO Sales (sale_id, product_id, year, quantity, price) VALUES (2, 100, 2009, 12, 5000);
INSERT INTO Sales (sale_id, product_id, year, quantity, price) VALUES (7, 200, 2011, 15, 9000);

TRUNCATE TABLE Product;

INSERT INTO Product (product_id, product_name) VALUES (100, 'Nokia');
INSERT INTO Product (product_id, product_name) VALUES (200, 'Apple');
INSERT INTO Product (product_id, product_name) VALUES (300, 'Samsung');

-- SQL Solution:
	
	
