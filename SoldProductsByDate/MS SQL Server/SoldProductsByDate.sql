-- Solution for: https://leetcode.com/problems/reformat-department-table/

USE leetcodedb;
GO

IF OBJECT_ID(N'dbo.Department', N'U') IS NULL BEGIN
	CREATE TABLE Department (id INT, revenue INT, month VARCHAR(5));
END
GO



TRUNCATE TABLE Department;

INSERT INTO Department (id, revenue, month) VALUES (1,8000, 'Jan')
INSERT INTO Department (id, revenue, month) VALUES (2,9000, 'Jan')
INSERT INTO Department (id, revenue, month) VALUES (3,10000,'Feb')
INSERT INTO Department (id, revenue, month) VALUES (1,7000, 'Feb')
INSERT INTO Department (id, revenue, month) VALUES (1,6000, 'Mar')


-- SQL Solution:
	SELECT	d.id,
			SUM(
			CASE WHEN month = 'Jan' THEN revenue ELSE NULL END
			) AS Jan_Revenue,
			SUM(
			CASE WHEN month = 'Feb' THEN revenue ELSE NULL END
			) AS Feb_Revenue,
			SUM(
			CASE WHEN month = 'Mar' THEN revenue ELSE NULL END
			) AS Mar_Revenue,
			SUM(
			CASE WHEN month = 'Apr' THEN revenue ELSE NULL END
			) AS Apr_Revenue,
			SUM(
			CASE WHEN month = 'May' THEN revenue ELSE NULL END
			) AS May_Revenue,
			SUM(
			CASE WHEN month = 'Jun' THEN revenue ELSE NULL END
			) AS Jun_Revenue,
			SUM(
			CASE WHEN month = 'Jul' THEN revenue ELSE NULL END
			) AS Jul_Revenue,
			SUM(
			CASE WHEN month = 'Aug' THEN revenue ELSE NULL END
			) AS aug_Revenue,
			SUM(
			CASE WHEN month = 'Sep' THEN revenue ELSE NULL END
			) AS Sep_Revenue,
			SUM(
			CASE WHEN month = 'Oct' THEN revenue ELSE NULL END
			) AS Oct_Revenue,
			SUM(
			CASE WHEN month = 'Nov' THEN revenue ELSE NULL END
			) AS Nov_Revenue,
			SUM(
			CASE WHEN month = 'Dec' THEN revenue ELSE NULL END
			) AS Dec_Revenue
	  FROM	Department d
  GROUP BY	d.id
	
