-- Solution for: https://leetcode.com/problems/department-top-three-salaries on mssql dbms platform

USE leetcodedb;

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Employee', N'U') IS NULL BEGIN
	CREATE TABLE Employee (id INT, name VARCHAR(255), salary INT, departmentId INT);
END

IF OBJECT_ID(N'dbo.Department', N'U') IS NULL BEGIN
	CREATE TABLE Department (id INT, name VARCHAR(255));
END

TRUNCATE TABLE Employee;
TRUNCATE TABLE Department;

INSERT INTO Employee (id, name, salary, departmentId) VALUES (1, 'Joe', 85000, 1)
INSERT INTO Employee (id, name, salary, departmentId) VALUES (2, 'Henry', 80000, 2)
INSERT INTO Employee (id, name, salary, departmentId) VALUES (3, 'Sam', 60000, 2)
INSERT INTO Employee (id, name, salary, departmentId) VALUES (4, 'Max', 90000, 1)
INSERT INTO Employee (id, name, salary, departmentId) VALUES (5, 'Janet', 69000, 1)
INSERT INTO Employee (id, name, salary, departmentId) VALUES (6, 'Randy', 85000, 1)
INSERT INTO Employee (id, name, salary, departmentId) VALUES (7, 'Will', 70000, 1)

INSERT INTO Department (id, name) VALUES (1, 'IT')
INSERT INTO Department (id, name) VALUES (2, 'Sales')


-- The actual query / solution
	SELECT	Department,
			Employee,
			Salary
	  FROM (SELECT	d.name AS Department,
					e.name AS Employee,
					e.Salary AS Salary,
					DENSE_RANK() OVER (PARTITION BY d.name ORDER BY e.salary DESC) AS position
			  FROM	Employee e 
			  JOIN	Department d ON e.DepartmentId= d.Id
			) sq 
	 WHERE	(sq.position <= 3)