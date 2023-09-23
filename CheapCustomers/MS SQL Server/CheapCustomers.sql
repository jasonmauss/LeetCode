-- Solution for: https://leetcode.com/problems/customers-who-never-order/ on mssql dbms platform

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Customers', N'U') IS NULL BEGIN
	CREATE TABLE Customers (id int, name varchar(255));
END

IF OBJECT_ID(N'dbo.Orders', N'U') IS NULL BEGIN
	CREATE TABLE Orders (id int, customerId int);
END

TRUNCATE TABLE Customers;
TRUNCATE TABLE Orders;

INSERT INTO Customers (id, name) VALUES (1, 'Joe')
INSERT INTO Customers (id, name) VALUES (2, 'Henry')
INSERT INTO Customers (id, name) VALUES (3, 'Sam')
INSERT INTO Customers (id, name) VALUES (4, 'Max')

INSERT INTO Orders (id, customerId) VALUES (1, '3')
INSERT INTO Orders (id, customerId) VALUES (2, '1')

-- The actual query / solution
	
