-- Solution for: https://leetcode.com/problems/count-salary-categories on mssql dbms platform

USE leetcodedb;

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Accounts', N'U') IS NULL BEGIN
	CREATE TABLE Accounts (account_id INT, income INT);
END

TRUNCATE TABLE Accounts;

INSERT INTO Accounts (account_id, income) VALUES (3, 108939)
INSERT INTO Accounts (account_id, income) VALUES (2, 12747)
INSERT INTO Accounts (account_id, income) VALUES (8, 87709)
INSERT INTO Accounts (account_id, income) VALUES (6, 91796)


-- The actual query / solution


