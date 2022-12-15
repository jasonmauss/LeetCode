-- Solution for: https://leetcode.com/problems/recyclable-and-low-fat-products/ on mssql dbms platform

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Products', N'U') IS NULL BEGIN
	CREATE TABLE Products (product_id INT, low_fats CHAR(1), recyclable CHAR(1))
END

TRUNCATE TABLE Products
INSERT INTO Products (product_id, low_fats, recyclable) VALUES (0, 'Y', 'N')
INSERT INTO Products (product_id, low_fats, recyclable) VALUES (1, 'Y', 'Y')
INSERT INTO Products (product_id, low_fats, recyclable) VALUES (2, 'N', 'Y')
INSERT INTO Products (product_id, low_fats, recyclable) VALUES (3, 'Y', 'Y')
INSERT INTO Products (product_id, low_fats, recyclable) VALUES (4, 'N', 'N')

-- The actual query / solution
SELECT  p.product_id
  FROM  Products AS p
 WHERE  (p.low_fats = 'Y') AND (p.recyclable = 'Y')