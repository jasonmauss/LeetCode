-- Solution for: https://leetcode.com/problems/employees-earning-more-than-their-managers/ on mssql dbms platform

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Employee', N'U') IS NULL BEGIN
	CREATE TABLE Employee (id int, name varchar(255), salary int, managerId int);
END


TRUNCATE TABLE Employee;

INSERT INTO Employee (id, name, salary, managerId) values (1, 'Joe', 70000, 3)
INSERT INTO Employee (id, name, salary, managerId) values (2, 'Henry', 80000, 4)
INSERT INTO Employee (id, name, salary, managerId) values (3, 'Sam', 60000, NULL)
INSERT INTO Employee (id, name, salary, managerId) values (4, 'Max', 90000, NULL)



-- The actual query / solution
	SELECT	e.name AS 'Employee'
	  FROM	Employee AS e
	  JOIN	Employee AS m ON m.id = e.managerId
			AND e.salary > m.salary
