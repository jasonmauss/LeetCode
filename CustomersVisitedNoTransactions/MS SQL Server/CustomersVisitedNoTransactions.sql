-- Solution for: https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/

USE leetcodedb;
GO

IF OBJECT_ID(N'dbo.Visits', N'U') IS NULL BEGIN
	CREATE TABLE Visits (visit_id INT, customer_id INT);
END
GO

IF OBJECT_ID(N'dbo.Transactions', N'U') IS NULL BEGIN
	CREATE TABLE Transactions (transaction_id INT, visit_id INT, amount INT);
END
GO


TRUNCATE TABLE Visits;

INSERT INTO Visits (visit_id, customer_id) values (1, 23)
INSERT INTO Visits (visit_id, customer_id) values (2, 9)
INSERT INTO Visits (visit_id, customer_id) values (4, 30)
INSERT INTO Visits (visit_id, customer_id) values (5, 54)
INSERT INTO Visits (visit_id, customer_id) values (6, 96)
INSERT INTO Visits (visit_id, customer_id) values (7, 54)
INSERT INTO Visits (visit_id, customer_id) values (8, 54)

TRUNCATE TABLE Transactions;

INSERT INTO Transactions (transaction_id, visit_id, amount) values (2, 5, 310)
INSERT INTO Transactions (transaction_id, visit_id, amount) values (3, 5, 300)
INSERT INTO Transactions (transaction_id, visit_id, amount) values (9, 5, 200)
INSERT INTO Transactions (transaction_id, visit_id, amount) values (12, 1, 910)
INSERT INTO Transactions (transaction_id, visit_id, amount) values (13, 2, 970)

-- SQL Solutions:

	SELECT	v.customer_id,
			COUNT(v.visit_id) AS count_no_trans
      FROM	Visits AS v
 LEFT JOIN	Transactions AS tx ON tx.visit_id = v.visit_id
	 WHERE	tx.visit_id IS NULL
  GROUP BY	v.customer_id
  ORDER BY	COUNT(v.visit_id) DESC;

	SELECT	v.customer_id,
			COUNT(v.visit_id) AS count_no_trans
	  FROM	Visits AS v
	 WHERE	NOT EXISTS
			(SELECT	1
			   FROM	Transactions AS tx
			  WHERE	v.visit_id = tx.visit_id)
  GROUP BY	v.customer_id
  ORDER BY	COUNT(v.visit_id) DESC;
