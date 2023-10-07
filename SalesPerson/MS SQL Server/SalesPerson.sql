-- Solution for: https://leetcode.com/problems/sales-person/ on mssql dbms platform

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.SalesPerson', N'U') IS NULL BEGIN
	CREATE TABLE SalesPerson (sales_id int, name varchar(255), salary int, commission_rate int, hire_date date);
END

IF OBJECT_ID(N'dbo.Company', N'U') IS NULL BEGIN
	CREATE TABLE Company (com_id int, name varchar(255), city varchar(255));
END

IF OBJECT_ID(N'dbo.Orders', N'U') IS NULL BEGIN
	CREATE TABLE Orders (order_id int, order_date date, com_id int, sales_id int, amount int);
END

TRUNCATE TABLE SalesPerson;
TRUNCATE TABLE Company;
TRUNCATE TABLE Orders;


INSERT INTO SalesPerson (sales_id, name, salary, commission_rate, hire_date) VALUES (1, 'John', 100000, 6, '4/1/2006')
INSERT INTO SalesPerson (sales_id, name, salary, commission_rate, hire_date) VALUES (2, 'Amy', 12000, 5, '5/1/2010')
INSERT INTO SalesPerson (sales_id, name, salary, commission_rate, hire_date) VALUES (3, 'Mark', 65000, 12, '12/25/2008')
INSERT INTO SalesPerson (sales_id, name, salary, commission_rate, hire_date) VALUES (4, 'Pam', 25000, 25, '1/1/2005')
INSERT INTO SalesPerson (sales_id, name, salary, commission_rate, hire_date) VALUES (5, 'Alex', 5000, 10, '2/3/2007')

INSERT INTO Company (com_id, name, city) VALUES (1, 'RED', 'Boston')
INSERT INTO Company (com_id, name, city) VALUES (2, 'ORANGE', 'New York')
INSERT INTO Company (com_id, name, city) VALUES (3, 'YELLOW', 'Boston')
INSERT INTO Company (com_id, name, city) VALUES (4, 'GREEN', 'Austin')

INSERT INTO Orders (order_id, order_date, com_id, sales_id, amount) VALUES (1, '1/1/2014', 3, 4, '10000')
INSERT INTO Orders (order_id, order_date, com_id, sales_id, amount) VALUES (2, '2/1/2014', 4, 5, '5000')
INSERT INTO Orders (order_id, order_date, com_id, sales_id, amount) VALUES (3, '3/1/2014', 1, 1, '50000')
INSERT INTO Orders (order_id, order_date, com_id, sales_id, amount) VALUES (4, '4/1/2014', 1, 4, '25000')


-- The actual query / solution
	