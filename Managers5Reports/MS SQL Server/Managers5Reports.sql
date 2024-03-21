-- Solution for: https://leetcode.com/problems/managers-with-at-least-5-direct-reports/?envType=study-plan-v2&envId=top-sql-50 on mssql dbms platform

USE leetcodedb;

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Employee', N'U') IS NULL BEGIN
	CREATE TABLE Employee (id INT, [name] VARCHAR(255), department VARCHAR(255), managerId INT);
END

TRUNCATE TABLE Employees;

INSERT INTO Employee (id, name, department, managerId) VALUES (101, 'John', 'A', NULL);
INSERT INTO Employee (id, name, department, managerId) VALUES (102, 'Dan', 'A', 101);
INSERT INTO Employee (id, name, department, managerId) VALUES (103, 'James', 'A', 101);
INSERT INTO Employee (id, name, department, managerId) VALUES (104, 'Amy', 'A', 101);
INSERT INTO Employee (id, name, department, managerId) VALUES (105, 'Anne', 'A', 101);
INSERT INTO Employee (id, name, department, managerId) VALUES (106, 'Ron', 'B', 101);


-- The actual query / solution


