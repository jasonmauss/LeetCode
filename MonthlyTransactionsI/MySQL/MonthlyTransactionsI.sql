-- Solution for: https://leetcode.com/problems/monthly-transactions-i
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Transactions (id INT, country VARCHAR(4), state ENUM('approved', 'declined'), amount INT, trans_date DATE);
TRUNCATE TABLE Transactions;
INSERT INTO Transactions (id, country, state, amount, trans_date) VALUES ('121', 'US', 'approved', '1000', '2018-12-18');
INSERT INTO Transactions (id, country, state, amount, trans_date) VALUES ('122', 'US', 'declined', '2000', '2018-12-19');
INSERT INTO Transactions (id, country, state, amount, trans_date) VALUES ('123', 'US', 'approved', '2000', '2019-01-01');
INSERT INTO Transactions (id, country, state, amount, trans_date) VALUES ('124', 'DE', 'approved', '2000', '2019-01-07');


-- The actual query / solution
	SELECT	DATE_FORMAT(trans_date, "%Y-%m") AS month,
			country,
			COUNT(id) AS trans_count,
			SUM(CASE WHEN state = 'approved' THEN 1 ELSE 0 END) AS approved_count,
			SUM(amount) AS trans_total_amount,
			SUM(CASE WHEN state = 'approved' THEN amount ELSE 0 END) AS approved_total_amount
	  FROM	Transactions tx
  GROUP BY	DATE_FORMAT(trans_date, "%Y-%m"), country;


