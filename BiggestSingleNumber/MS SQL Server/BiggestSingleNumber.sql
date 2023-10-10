-- Solution for: https://leetcode.com/problems/biggest-single-number/ on mssql dbms platform

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.MyNumbers', N'U') IS NULL BEGIN
	CREATE TABLE MyNumbers (num INT);
END

TRUNCATE TABLE MyNumbers;

INSERT INTO MyNumbers (num) VALUES (8);
INSERT INTO MyNumbers (num) VALUES (8);
INSERT INTO MyNumbers (num) VALUES (3);
INSERT INTO MyNumbers (num) VALUES (3);
INSERT INTO MyNumbers (num) VALUES (1);
INSERT INTO MyNumbers (num) VALUES (4);
INSERT INTO MyNumbers (num) VALUES (5);
INSERT INTO MyNumbers (num) VALUES (6);




-- The actual query / solution
	SELECT  MAX(a.num) AS num FROM (
	SELECT	num,
			COUNT(num) AS instances
	  FROM	MyNumbers
  GROUP BY	num
	HAVING	COUNT(num) = 1) a