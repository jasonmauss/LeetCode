-- Solution for: https://leetcode.com/problems/recyclable-and-low-fat-products/ on mssql dbms platform

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Products', N'U') IS NULL BEGIN
	CREATE TABLE Products (product_id INT, low_fats CHAR(1), recyclable CHAR(1))
END

TRUNCATE TABLE Products
insert into Products (product_id, low_fats, recyclable) values (0, 'Y', 'N')
insert into Products (product_id, low_fats, recyclable) values (1, 'Y', 'Y')
insert into Products (product_id, low_fats, recyclable) values (2, 'N', 'Y')
insert into Products (product_id, low_fats, recyclable) values (3, 'Y', 'Y')
insert into Products (product_id, low_fats, recyclable) values (4, 'N', 'N')

-- The actual query / solution
SELECT  p.product_id
  FROM  Products AS p
 WHERE  (p.low_fats = 'Y') AND (recyclable = 'Y')