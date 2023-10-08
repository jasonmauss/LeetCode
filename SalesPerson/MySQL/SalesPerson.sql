-- Solution for: https://leetcode.com/problems/sales-person/ on MySQL dbms platform
USE leetcodedb;
CREATE TABLE IF NOT EXISTS SalesPerson (sales_id int, name varchar(255), salary int, commission_rate int, hire_date date);
CREATE TABLE IF NOT EXISTS Company (com_id int, name varchar(255), city varchar(255));
CREATE TABLE IF NOT EXISTS Orders (order_id int, order_date date, com_id int, sales_id int, amount int);

TRUNCATE TABLE SalesPerson;
TRUNCATE TABLE Company;
TRUNCATE TABLE Orders;


INSERT INTO SalesPerson (sales_id, name, salary, commission_rate, hire_date) VALUES (1, 'John', 100000, 6, '2006-04-01');
INSERT INTO SalesPerson (sales_id, name, salary, commission_rate, hire_date) VALUES (2, 'Amy', 12000, 5, '2010-05-01');
INSERT INTO SalesPerson (sales_id, name, salary, commission_rate, hire_date) VALUES (3, 'Mark', 65000, 12, '2008-12-25');
INSERT INTO SalesPerson (sales_id, name, salary, commission_rate, hire_date) VALUES (4, 'Pam', 25000, 25, '2005-01-01');
INSERT INTO SalesPerson (sales_id, name, salary, commission_rate, hire_date) VALUES (5, 'Alex', 5000, 10, '2007-02-03');

INSERT INTO Company (com_id, name, city) VALUES (1, 'RED', 'Boston');
INSERT INTO Company (com_id, name, city) VALUES (2, 'ORANGE', 'New York');
INSERT INTO Company (com_id, name, city) VALUES (3, 'YELLOW', 'Boston');
INSERT INTO Company (com_id, name, city) VALUES (4, 'GREEN', 'Austin');

INSERT INTO Orders (order_id, order_date, com_id, sales_id, amount) VALUES (1, '2014-01-01', 3, 4, '10000');
INSERT INTO Orders (order_id, order_date, com_id, sales_id, amount) VALUES (2, '2014-02-01', 4, 5, '5000');
INSERT INTO Orders (order_id, order_date, com_id, sales_id, amount) VALUES (3, '2014-03-01', 1, 1, '50000');
INSERT INTO Orders (order_id, order_date, com_id, sales_id, amount) VALUES (4, '2014-04-01', 1, 4, '25000');


-- The actual query / solution
	SELECT	DISTINCT sp.name
	  FROM	SalesPerson sp
	 WHERE	(sp.sales_id NOT IN 
			(
			 SELECT sales_id
			   FROM Orders o
			   JOIN	Company c ON c.com_id = o.com_id
			  WHERE (UPPER(c.name) = 'RED')
			)
			)
