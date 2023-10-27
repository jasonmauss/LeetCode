-- Solution for: https://leetcode.com/problems/the-number-of-employees-which-report-to-each-employee/ on MySQL dbms platform
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Employees (employee_id INT, name VARCHAR(20), reports_to INT, age INT);

TRUNCATE TABLE Employees;

INSERT INTO Employees (employee_id, name, reports_to, age) VALUES (9, 'Hercy', NULL, 43);
INSERT INTO Employees (employee_id, name, reports_to, age) VALUES (6, 'Alice', '9', 41);
INSERT INTO Employees (employee_id, name, reports_to, age) VALUES (4, 'Bob', '9', 36);
INSERT INTO Employees (employee_id, name, reports_to, age) VALUES (2, 'Winston', NULL, 37);



-- The actual query / solution
	


