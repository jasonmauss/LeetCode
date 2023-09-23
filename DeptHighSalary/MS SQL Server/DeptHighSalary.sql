-- Solution for: https://leetcode.com/problems/department-highest-salary/ on mssql dbms platform

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Employee', N'U') IS NULL BEGIN
	CREATE TABLE Employee (id int, name varchar(255), salary int, departmentId int);
END

IF OBJECT_ID(N'dbo.Department', N'U') IS NULL BEGIN
	CREATE TABLE Department (id int, name varchar(255));
END

TRUNCATE TABLE Employee;
TRUNCATE TABLE Department;

INSERT INTO Employee (id, name, salary, departmentId) VALUES (1, 'Joe', 70000, 1)
INSERT INTO Employee (id, name, salary, departmentId) VALUES (2, 'Jim', 90000, 1)
INSERT INTO Employee (id, name, salary, departmentId) VALUES (3, 'Henry', 80000, 2)
INSERT INTO Employee (id, name, salary, departmentId) VALUES (4, 'Sam', 60000, 2)
INSERT INTO Employee (id, name, salary, departmentId) VALUES (5, 'Max', 90000, 1)

INSERT INTO Department (id, name) VALUES (1, 'IT')
INSERT INTO Department (id, name) VALUES (2, 'Sales')

-- The actual query / solution
	
	SELECT	c.name AS 'Customers'
	  FROM	Customers c
 LEFT JOIN	Orders o ON o.customerId = c.id
     WHERE	o.customerId IS NULL