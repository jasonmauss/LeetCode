-- Solution for: https://leetcode.com/problems/customers-who-never-order/ on MySQL dbms platform
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Customers (id int, name varchar(255));
CREATE TABLE IF NOT EXISTS Orders (id int, customerId int);

TRUNCATE TABLE Customers;
TRUNCATE TABLE Orders;

INSERT INTO Customers (id, name) VALUES ('1', 'Joe');
INSERT INTO Customers (id, name) VALUES ('2', 'Henry');
INSERT INTO Customers (id, name) VALUES ('3', 'Sam');
INSERT INTO Customers (id, name) VALUES ('4', 'Max');

INSERT INTO Orders (id, customerId) VALUES ('1', '3');
INSERT INTO Orders (id, customerId) VALUES ('2', '1');

-- The actual query / solution
		SELECT	c.name  AS 'Customers'
	  FROM	Customers c
 LEFT JOIN	Orders o ON o.customerId = c.id
     WHERE	o.customerId IS NULL