-- Solution for: https://leetcode.com/problems/consecutive-numbers on mssql dbms platform

USE leetcodedb;

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Logs', N'U') IS NULL BEGIN
	CREATE TABLE Logs (id INT, num INT);
END

TRUNCATE TABLE Logs;

INSERT INTO Logs (id, num) VALUES ('1', '1')
INSERT INTO Logs (id, num) VALUES ('2', '1')
INSERT INTO Logs (id, num) VALUES ('3', '1')
INSERT INTO Logs (id, num) VALUES ('4', '2')
INSERT INTO Logs (id, num) VALUES ('5', '1')
INSERT INTO Logs (id, num) VALUES ('6', '2')
INSERT INTO Logs (id, num) VALUES ('7', '2')


-- The actual query / solution

