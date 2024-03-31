-- Solution for: https://leetcode.com/problems/product-sales-analysis-iii on mssql dbms platform

USE leetcodedb;

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Sales', N'U') IS NULL BEGIN
	CREATE TABLE Sales (sale_id INT, product_id INT, [year] INT, quantity INT, price INT);
END

IF OBJECT_ID(N'dbo.Product', N'U') IS NULL BEGIN
	CREATE TABLE Product (product_id INT, product_name VARCHAR(10));
END

TRUNCATE TABLE Sales;
TRUNCATE TABLE Product;

INSERT INTO Sales (sale_id, product_id, [year], quantity, price) VALUES (1, 100, 2008, 10, 5000)
INSERT INTO Sales (sale_id, product_id, [year], quantity, price) VALUES (2, 100, 2009, 12, 5000)
INSERT INTO Sales (sale_id, product_id, [year], quantity, price) VALUES (7, 200, 2011, 15, 9000)

INSERT INTO Product (product_id, product_name) VALUES (100, 'Nokia')
INSERT INTO Product (product_id, product_name) VALUES (200, 'Apple')
INSERT INTO Product (product_id, product_name) VALUES (300, 'Samsung')


-- The actual query / solution
	SELECT	product_id,
			first_year,
			quantity,
			price
			FROM (
	SELECT	product_id,
			[year] AS first_year,
			quantity,
			price,
			RANK() OVER (PARTITION BY product_id ORDER BY year) AS year_order
	  FROM	Sales s
	  ) AS sq
	  WHERE sq.year_order = 1



	SELECT	s1.product_id,
			s1.year AS first_year,
			s1.quantity,
			s1.price
	  FROM	Sales s1
	  JOIN	(SELECT product_id, MIN(year) AS first_year FROM Sales GROUP BY product_id) s2 ON s2.product_id = s1.product_id AND s2.first_year = s1.year
  GROUP BY	s1.product_id,
			s1.year,
			s1.quantity,
			s1.price