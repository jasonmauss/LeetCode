-- Solution for: https://leetcode.com/problems/employees-with-missing-information/ on mssql dbms platform

USE leetcodedb;

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Employees', N'U') IS NULL BEGIN
	CREATE TABLE Employees (employee_id INT, name VARCHAR(30));
END

TRUNCATE TABLE Employees;

IF OBJECT_ID(N'dbo.Salaries', N'U') IS NULL BEGIN
	CREATE TABLE Salaries (employee_id int, salary int);
END

TRUNCATE TABLE Salaries;

INSERT INTO Employees (employee_id, name) VALUES (2, 'Crew')
INSERT INTO Employees (employee_id, name) VALUES (4, 'Haven')
INSERT INTO Employees (employee_id, name) VALUES (5, 'Kristian')

INSERT INTO Salaries (employee_id, salary) VALUES (5, 76071)
INSERT INTO Salaries (employee_id, salary) VALUES (1, 22517)
INSERT INTO Salaries (employee_id, salary) VALUES (4, 63539)


-- The actual query / solution
	SELECT	e.employee_id
	  FROM	Employees e
 LEFT JOIN	Salaries s ON s.employee_id = e.employee_id
	 WHERE	s.employee_id IS NULL
	 UNION
	SELECT	s.employee_id
	  FROM	Salaries s
 LEFT JOIN	Employees e ON e.employee_id = s.employee_id
	 WHERE	e.employee_id IS NULL
  ORDER BY	employee_id

