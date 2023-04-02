-- Solution for: https://leetcode.com/problems/replace-employee-id-with-the-unique-identifier/

USE leetcodedb;
GO

IF OBJECT_ID(N'dbo.Employees', N'U') IS NULL BEGIN
	CREATE TABLE Employees (id INT, [name] VARCHAR(20));
END
GO

IF OBJECT_ID(N'dbo.EmployeeUNI', N'U') IS NULL BEGIN
	CREATE TABLE EmployeeUNI (id INT, unique_id INT);
END
GO


TRUNCATE TABLE Employees;

INSERT INTO Employees (id, [name]) VALUES (1, 'Alice')
INSERT INTO Employees (id, [name]) VALUES (7, 'Bob')
INSERT INTO Employees (id, [name]) VALUES (11, 'Meir')
INSERT INTO Employees (id, [name]) VALUES (90, 'Winston')
INSERT INTO Employees (id, [name]) VALUES (3, 'Jonathan')

TRUNCATE TABLE EmployeeUNI;

INSERT INTO EmployeeUNI (id, unique_id) VALUES (3, 1)
INSERT INTO EmployeeUNI (id, unique_id) VALUES (11, 2)
INSERT INTO EmployeeUNI (id, unique_id) VALUES (90, 3)

-- SQL Solution:
	SELECT	eu.unique_id,
			e.[name]
	  FROM	Employees AS e
 LEFT JOIN	EmployeeUNI AS eu ON e.id = eu.id


