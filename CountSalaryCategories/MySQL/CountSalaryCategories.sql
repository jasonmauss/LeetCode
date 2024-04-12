-- Solution for: https://leetcode.com/problems/count-salary-categories
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Accounts (account_id INT, income INT);

TRUNCATE TABLE Accounts;

INSERT INTO Accounts (account_id, income) VALUES ('3', '108939');
INSERT INTO Accounts (account_id, income) VALUES ('2', '12747');
INSERT INTO Accounts (account_id, income) VALUES ('8', '87709');
INSERT INTO Accounts (account_id, income) VALUES ('6', '91796');


-- The actual query / solution
	WITH salary_counts AS(
		SELECT	
				CASE WHEN income < 20000 THEN 1 ELSE 0 END AS low_salary,
				CASE WHEN income BETWEEN 20000 AND 50000 THEN 1 ELSE 0 END AS avg_salary,
				CASE WHEN income > 50000 THEN 1 ELSE 0 END AS high_salary
		  FROM	Accounts)

	SELECT 'Low Salary' AS category, SUM(low_salary) AS accounts_count FROM salary_counts
	UNION
	SELECT 'Average Salary' AS category, SUM(avg_salary) AS accounts_count FROM salary_counts
	UNION
	SELECT 'High Salary' AS category, SUM(high_salary) AS accounts_count FROM salary_counts