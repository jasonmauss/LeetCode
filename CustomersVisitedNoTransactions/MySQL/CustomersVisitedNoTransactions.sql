-- Solution for: https://leetcode.com/problems/customer-who-visited-but-did-not-make-any-transactions/
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Visits(visit_id INT, customer_id INT);
CREATE TABLE IF NOT EXISTS Transactions(transaction_id INT, visit_id INT, amount INT);

TRUNCATE TABLE Visits;

INSERT INTO Visits (visit_id, customer_id) VALUES ('1', '23');
INSERT INTO Visits (visit_id, customer_id) VALUES ('2', '9');
INSERT INTO Visits (visit_id, customer_id) VALUES ('4', '30');
INSERT INTO Visits (visit_id, customer_id) VALUES ('5', '54');
INSERT INTO Visits (visit_id, customer_id) VALUES ('6', '96');
INSERT INTO Visits (visit_id, customer_id) VALUES ('7', '54');
INSERT INTO Visits (visit_id, customer_id) VALUES ('8', '54');

TRUNCATE TABLE Transactions;

INSERT INTO Transactions (transaction_id, visit_id, amount) VALUES ('2', '5', '310');
INSERT INTO Transactions (transaction_id, visit_id, amount) VALUES ('3', '5', '300');
INSERT INTO Transactions (transaction_id, visit_id, amount) VALUES ('9', '5', '200');
INSERT INTO Transactions (transaction_id, visit_id, amount) VALUES ('12', '1', '910');
INSERT INTO Transactions (transaction_id, visit_id, amount) VALUES ('13', '2', '970');

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
