-- Solution for: https://leetcode.com/problems/reformat-department-table/

USE leetcodedb;
GO

IF OBJECT_ID(N'dbo.Department', N'U') IS NULL BEGIN
	CREATE TABLE Department (id int, revenue int, month varchar(5));
END
GO



TRUNCATE TABLE Department;

INSERT INTO Department (id, revenue, month) VALUES (1,8000, 'Jan')
INSERT INTO Department (id, revenue, month) VALUES (2,9000, 'Jan')
INSERT INTO Department (id, revenue, month) VALUES (3,10000,'Feb')
INSERT INTO Department (id, revenue, month) VALUES (1,7000, 'Feb')
INSERT INTO Department (id, revenue, month) VALUES (1,6000, 'Mar')


-- SQL Solution:
	
	
