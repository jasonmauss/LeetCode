-- Solution for: https://leetcode.com/problems/second-highest-salary/ on mssql dbms platform

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Employee', N'U') IS NULL BEGIN
	CREATE TABLE Employee (id int, salary int);
END

TRUNCATE TABLE Employee;

INSERT INTO Employee (id, salary) VALUES (1, 100)
INSERT INTO Employee (id, salary) VALUES (2, 200)
INSERT INTO Employee (id, salary) VALUES (3, 300)

-- The actual query / solution
	
	