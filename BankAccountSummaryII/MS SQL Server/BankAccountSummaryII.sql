-- Solution for: https://leetcode.com/problems/bank-account-summary-ii/

USE leetcodedb;
GO

IF OBJECT_ID(N'dbo.Users', N'U') IS NULL BEGIN
	CREATE TABLE [Users] (account INT, [name] VARCHAR(20));
END
GO

IF OBJECT_ID(N'dbo.Transactions', N'U') IS NULL BEGIN
	CREATE TABLE [Transactions] (trans_id INT, account INT, amount INT, transacted_on DATE);
END
GO

TRUNCATE TABLE Users;

INSERT INTO Users (account, [name]) VALUES (900001, 'Alice');
INSERT INTO Users (account, [name]) VALUES (900002, 'Bob');
INSERT INTO Users (account, [name]) VALUES (900003, 'Charlie');

TRUNCATE TABLE Transactions;

INSERT INTO Transactions (trans_id, account, amount, transacted_on) VALUES (1, 900001, 7000, '2020-08-01');
INSERT INTO Transactions (trans_id, account, amount, transacted_on) VALUES (2, 900001, 7000, '2020-09-01');
INSERT INTO Transactions (trans_id, account, amount, transacted_on) VALUES (3, 900001, -3000, '2020-09-02');
INSERT INTO Transactions (trans_id, account, amount, transacted_on) VALUES (4, 900002, 1000, '2020-09-12');
INSERT INTO Transactions (trans_id, account, amount, transacted_on) VALUES (5, 900003, 6000, '2020-08-07');
INSERT INTO Transactions (trans_id, account, amount, transacted_on) VALUES (6, 900003, 6000, '2020-09-07');
INSERT INTO Transactions (trans_id, account, amount, transacted_on) VALUES (7, 900003, -4000, '2020-09-11');

	SELECT	u.name AS name,
			SUM(t.amount) AS balance
	  FROM	Users AS u
	  JOIN	Transactions AS t ON t.account = u.account
  GROUP BY	u.name
	HAVING	SUM(t.amount) > 10000