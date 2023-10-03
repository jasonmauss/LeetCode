-- Solution for: https://leetcode.com/problems/employee-bonus/ on MySQL dbms platform
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Employee (empId INT, name VARCHAR(255), supervisor INT, salary INT);
CREATE TABLE IF NOT EXISTS Bonus (empId INT, bonus INT);

TRUNCATE TABLE Employee;
TRUNCATE TABLE Bonus;

INSERT INTO Employee (empId, name, supervisor, salary) VALUES (3, 'Brad', NULL, 4000);
INSERT INTO Employee (empId, name, supervisor, salary) VALUES (1, 'John', 3, 1000);
INSERT INTO Employee (empId, name, supervisor, salary) VALUES (2, 'Dan', 3, 2000);
INSERT INTO Employee (empId, name, supervisor, salary) VALUES (4, 'Thomas', 3, 4000);

INSERT INTO Bonus (empId, bonus) VALUES (2, 500);
INSERT INTO Bonus (empId, bonus) VALUES (4, 2000);


-- The actual query / solution

