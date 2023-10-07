-- Solution for: https://leetcode.com/problems/customer-placing-the-largest-number-of-orders/ on mssql dbms platform

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Orders', N'U') IS NULL BEGIN
	CREATE TABLE Orders (order_number INT, customer_number INT);
END

TRUNCATE TABLE Orders;

INSERT INTO orders (order_number, customer_number) VALUES (1, 1)
INSERT INTO orders (order_number, customer_number) VALUES (2, 2)
INSERT INTO orders (order_number, customer_number) VALUES (3, 3)
INSERT INTO orders (order_number, customer_number) VALUES (4, 3)


-- The actual query / solution
	SELECT	a.customer_number FROM (
	SELECT	TOP 1 customer_number,
			COUNT(order_number) AS orders
	  FROM	Orders
  GROUP BY	customer_number
  ORDER BY	COUNT(order_number) DESC) AS a