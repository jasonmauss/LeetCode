-- Solution for: https://leetcode.com/problems/count-salary-categories
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Accounts (account_id INT, income INT);

TRUNCATE TABLE Accounts;

INSERT INTO Accounts (account_id, income) VALUES ('3', '108939');
INSERT INTO Accounts (account_id, income) VALUES ('2', '12747');
INSERT INTO Accounts (account_id, income) VALUES ('8', '87709');
INSERT INTO Accounts (account_id, income) VALUES ('6', '91796');


-- The actual query / solution
