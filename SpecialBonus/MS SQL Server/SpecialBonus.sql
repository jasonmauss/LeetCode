-- Solution for: https://leetcode.com/problems/calculate-special-bonus/ on mssql dbms platform

USE leetcodedb;

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Employees', N'U') IS NULL BEGIN
	CREATE TABLE Employees (employee_id INT, name VARCHAR(30), salary INT);
END

TRUNCATE TABLE Employees;

INSERT INTO Employees (employee_id, name, salary) VALUES (2, 'Meir', 3000)
INSERT INTO Employees (employee_id, name, salary) VALUES (3, 'Michael', 3800)
INSERT INTO Employees (employee_id, name, salary) VALUES (7, 'Addilyn', 7400)
INSERT INTO Employees (employee_id, name, salary) VALUES (8, 'Juan', 6100)
INSERT INTO Employees (employee_id, name, salary) VALUES (9, 'Kannon', 7700)


-- The actual query / solution
	
	