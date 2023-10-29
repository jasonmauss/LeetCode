-- Solution for: https://leetcode.com/problems/employees-whose-manager-left-the-company/ on MySQL dbms platform
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Employees (employee_id INT, name VARCHAR(20), manager_id INT, salary INT);

TRUNCATE TABLE Employees;

INSERT INTO Employees (employee_id, name, manager_id, salary) values (3, 'Mila', 9, 60301);
INSERT INTO Employees (employee_id, name, manager_id, salary) values (12, 'Antonella', NULL, 31000);
INSERT INTO Employees (employee_id, name, manager_id, salary) values (13, 'Emery', NULL, 67084);
INSERT INTO Employees (employee_id, name, manager_id, salary) values (1, 'Kalel', 11, 21241);
INSERT INTO Employees (employee_id, name, manager_id, salary) values (9, 'Mikaela', NULL, 50937);
INSERT INTO Employees (employee_id, name, manager_id, salary) values (11, 'Joziah', 6, 28485);


-- The actual query / solution



