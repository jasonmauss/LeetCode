-- Solution for: https://leetcode.com/problems/monthly-transactions-i
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Transactions (id INT, country VARCHAR(4), state ENUM('approved', 'declined'), amount INT, trans_date DATE);
TRUNCATE TABLE Transactions;
INSERT INTO Transactions (id, country, state, amount, trans_date) VALUES ('121', 'US', 'approved', '1000', '2018-12-18');
INSERT INTO Transactions (id, country, state, amount, trans_date) VALUES ('122', 'US', 'declined', '2000', '2018-12-19');
INSERT INTO Transactions (id, country, state, amount, trans_date) VALUES ('123', 'US', 'approved', '2000', '2019-01-01');
INSERT INTO Transactions (id, country, state, amount, trans_date) VALUES ('124', 'DE', 'approved', '2000', '2019-01-07');


-- The actual query / solution



