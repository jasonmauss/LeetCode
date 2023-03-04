-- Solution for: https://leetcode.com/problems/swap-salary/

USE leetcodedb;
GO

IF OBJECT_ID(N'dbo.Salary', N'U') IS NULL BEGIN
	CREATE TABLE Salary (id int, name varchar(100), sex char(1), salary int);
END
GO


TRUNCATE TABLE Salary;

INSERT INTO Salary (id, name, sex, salary) VALUES (1, 'A', 'm', 2500);
INSERT INTO Salary (id, name, sex, salary) VALUES (2, 'B', 'f', 1500);
INSERT INTO Salary (id, name, sex, salary) VALUES (3, 'C', 'm', 5500);
INSERT INTO Salary (id, name, sex, salary) VALUES (4, 'D', 'f', 500);

-- SQL Solution:

 UPDATE	Salary 
	SET sex = CASE WHEN sex = 'm' THEN 'f' ELSE 'm' END

