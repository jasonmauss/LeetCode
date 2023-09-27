-- Solution for: https://leetcode.com/problems/nth-highest-salary/ on mssql dbms platform

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Employee', N'U') IS NULL BEGIN
	CREATE TABLE Employee (id int, salary int);
END

TRUNCATE TABLE Employee;

INSERT INTO Employee (id, salary) VALUES (1, 100)
INSERT INTO Employee (id, salary) VALUES (2, 200)
INSERT INTO Employee (id, salary) VALUES (3, 300)

-- The actual query / solution
GO;

CREATE FUNCTION getNthHighestSalary(@N INT) RETURNS INT AS
BEGIN
    RETURN (

		SELECT sq.salary FROM 
		(
			SELECT	e.salary,
					ROW_NUMBER() OVER (ORDER BY e.salary DESC) AS number
			  FROM	(SELECT DISTINCT salary FROM Employee) e
		) AS sq
		WHERE sq.number = @N

    )
END

USE [leetcodedb]
GO

SELECT [dbo].[getNthHighestSalary] (1)
GO

