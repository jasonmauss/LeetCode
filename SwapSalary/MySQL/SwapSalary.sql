-- Solution for: https://leetcode.com/problems/swap-salary/
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Salary (id INT, name VARCHAR(100), sex CHAR(1), salary INT);

TRUNCATE TABLE Salary;

INSERT INTO Salary (id, name, sex, salary) VALUES ('1', 'A', 'm', '2500');
INSERT INTO Salary (id, name, sex, salary) VALUES ('2', 'B', 'f', '1500');
INSERT INTO Salary (id, name, sex, salary) VALUES ('3', 'C', 'm', '5500');
INSERT INTO Salary (id, name, sex, salary) VALUES ('4', 'D', 'f', '500');

-- SQL Solution:
 UPDATE	Salary 
	SET sex = CASE WHEN sex = 'm' THEN 'f' ELSE 'm' END