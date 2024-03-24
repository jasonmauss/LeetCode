-- Solution for: https://leetcode.com/problems/confirmation-rate on mssql dbms platform

USE leetcodedb;

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Signups', N'U') IS NULL BEGIN
	CREATE TABLE Signups (user_id INT, time_stamp DATETIME);
END

IF OBJECT_ID(N'dbo.Confirmations', N'U') IS NULL BEGIN
	CREATE TABLE Confirmations (user_id INT, time_stamp DATETIME, action VARCHAR(20));
END

TRUNCATE TABLE Signups;

INSERT INTO Signups (user_id, time_stamp) VALUES (3, '2020-03-21 10:16:13');
INSERT INTO Signups (user_id, time_stamp) VALUES (7, '2020-01-04 13:57:59');
INSERT INTO Signups (user_id, time_stamp) VALUES (2, '2020-07-29 23:09:44');
INSERT INTO Signups (user_id, time_stamp) VALUES (6, '2020-12-09 10:39:37');

TRUNCATE TABLE Confirmations;

INSERT INTO Confirmations (user_id, time_stamp, action) VALUES (3, '2021-01-06 03:30:46', 'timeout');
INSERT INTO Confirmations (user_id, time_stamp, action) VALUES (3, '2021-07-14 14:00:00', 'timeout');
INSERT INTO Confirmations (user_id, time_stamp, action) VALUES (7, '2021-06-12 11:57:29', 'confirmed');
INSERT INTO Confirmations (user_id, time_stamp, action) VALUES (7, '2021-06-13 12:58:28', 'confirmed');
INSERT INTO Confirmations (user_id, time_stamp, action) VALUES (7, '2021-06-14 13:59:27', 'confirmed');
INSERT INTO Confirmations (user_id, time_stamp, action) VALUES (2, '2021-01-22 00:00:00', 'confirmed');
INSERT INTO Confirmations (user_id, time_stamp, action) VALUES (2, '2021-02-28 23:59:59', 'timeout');


-- The actual query / solution

	SELECT	su.user_id,
			ISNULL(counts.confirmed_total, 0.00) AS confirmation_rate
	  FROM	Signups su
 LEFT JOIN	(SELECT	c.user_id,
					
					CAST(SUM(CASE WHEN c.action = 'confirmed' THEN 1.00 ELSE 0.00 END) / COUNT(c.user_id) AS DECIMAL(4,2)) AS confirmed_total
			   FROM	Confirmations c

			 GROUP BY c.user_id
					  
			) AS counts ON su.user_id = counts.user_id
 