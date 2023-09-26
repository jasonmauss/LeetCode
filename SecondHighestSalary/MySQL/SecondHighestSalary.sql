-- Solution for: https://leetcode.com/problems/second-highest-salary/ on MySQL dbms platform
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Employee (id int, salary int);

TRUNCATE TABLE Employee;

INSERT INTO Employee (id, salary) VALUES (1, 100);
INSERT INTO Employee (id, salary) VALUES (2, 200);
INSERT INTO Employee (id, salary) VALUES (3, 300);

-- The actual query / solution
	SELECT	MAX(SALARY) AS 'SecondHighestSalary'
	  FROM	Employee
	 WHERE	(salary < (SELECT MAX(salary) FROM Employee))