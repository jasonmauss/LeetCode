-- Solution for: https://leetcode.com/problems/restaurant-growth on mssql dbms platform

USE leetcodedb;

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Customer', N'U') IS NULL BEGIN
	CREATE TABLE Customer (customer_id INT, name VARCHAR(20), visited_on DATE, amount INT);
END

TRUNCATE TABLE Customer;

INSERT INTO Customer (customer_id, name, visited_on, amount) VALUES (1, 'Jhon', '2019-01-01', 100)
INSERT INTO Customer (customer_id, name, visited_on, amount) VALUES (2, 'Daniel', '2019-01-02', 110)
INSERT INTO Customer (customer_id, name, visited_on, amount) VALUES (3, 'Jade', '2019-01-03', 120)
INSERT INTO Customer (customer_id, name, visited_on, amount) VALUES (4, 'Khaled', '2019-01-04', 130)
INSERT INTO Customer (customer_id, name, visited_on, amount) VALUES (5, 'Winston', '2019-01-05', 110)
INSERT INTO Customer (customer_id, name, visited_on, amount) VALUES (6, 'Elvis', '2019-01-06', 140)
INSERT INTO Customer (customer_id, name, visited_on, amount) VALUES (7, 'Anna', '2019-01-07', 150)
INSERT INTO Customer (customer_id, name, visited_on, amount) VALUES (8, 'Maria', '2019-01-08', 80)
INSERT INTO Customer (customer_id, name, visited_on, amount) VALUES (9, 'Jaze', '2019-01-09', 110)
INSERT INTO Customer (customer_id, name, visited_on, amount) VALUES (1, 'Jhon', '2019-01-10', 130)
INSERT INTO Customer (customer_id, name, visited_on, amount) VALUES (3, 'Jade', '2019-01-10', 150)


-- The actual query / solution
WITH groupedCTE (visited_on, amount) AS (
    SELECT	visited_on,
			SUM(amount) AS amount
	  FROM	Customer 
  GROUP BY	visited_on
),

rollingAvg(visited_on, amount, average) AS (
    SELECT	visited_on, 
			SUM(amount) OVER(ORDER BY visited_on ROWS BETWEEN 6 PRECEDING AND CURRENT ROW) AS amount, 
			ROUND(AVG(amount * 1.0) OVER(ORDER BY visited_on ROWS BETWEEN 6 PRECEDING AND CURRENT ROW), 2) AS average_amount 
      FROM	groupedCTE
)

	SELECT	visited_on,
			amount,
			CAST(average AS decimal(5,2)) AS average_amount
	  FROM	rollingAvg 
  ORDER BY	visited_on
    OFFSET	6 ROWS;