-- Solution for: https://leetcode.com/problems/customer-placing-the-largest-number-of-orders/ on MySQL dbms platform
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Orders (order_number INT, customer_number INT);

TRUNCATE TABLE Orders;

INSERT INTO orders (order_number, customer_number) VALUES (1, 1);
INSERT INTO orders (order_number, customer_number) VALUES (2, 2);
INSERT INTO orders (order_number, customer_number) VALUES (3, 3);
INSERT INTO orders (order_number, customer_number) VALUES (4, 3);


-- The actual query / solution
	SELECT	a.customer_number FROM (
	SELECT	customer_number,
			COUNT(order_number) AS orders
	  FROM	Orders
  GROUP BY	customer_number
  ORDER BY	COUNT(order_number) DESC
  LIMIT 1) AS a
