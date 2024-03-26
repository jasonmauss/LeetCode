-- Solution for: https://leetcode.com/problems/monthly-transactions-i on mssql dbms platform

USE leetcodedb;

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Transactions', N'U') IS NULL BEGIN
	CREATE TABLE Transactions (id INT, country VARCHAR(4), [state] VARCHAR(20), amount INT, trans_date DATE);
END

TRUNCATE TABLE Transactions;

INSERT INTO Transactions (id, country, state, amount, trans_date) VALUES (121, 'US', 'approved', 1000, '2018-12-18');
INSERT INTO Transactions (id, country, state, amount, trans_date) VALUES (122, 'US', 'declined', 2000, '2018-12-19');
INSERT INTO Transactions (id, country, state, amount, trans_date) VALUES (123, 'US', 'approved', 2000, '2019-01-01');
INSERT INTO Transactions (id, country, state, amount, trans_date) VALUES (124, 'DE', 'approved', 2000, '2019-01-07');


-- The actual query / solution
	
	SELECT	CAST(YEAR(trans_date) AS CHAR(4)) + '-' + RIGHT('0' + CAST(MONTH(trans_date) AS VARCHAR(2)), 2) AS [month],
			country,
			COUNT(id) AS trans_count,
			SUM(CASE WHEN [state] = 'approved' THEN 1 ELSE 0 END) AS approved_count,
			SUM(amount) AS trans_total_amount,
			SUM(CASE WHEN [state] = 'approved' THEN amount ELSE 0 END) AS approved_total_amount
	  FROM	Transactions tx
  GROUP BY	CAST(YEAR(trans_date) AS CHAR(4)) + '-' + RIGHT('0' + CAST(MONTH(trans_date) AS VARCHAR(2)), 2), country

