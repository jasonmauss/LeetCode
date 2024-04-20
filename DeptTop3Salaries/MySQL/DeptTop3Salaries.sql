-- Solution for: https://leetcode.com/problems/department-top-three-salaries
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Employee (id INT, name VARCHAR(255), salary INT, departmentId INT);
CREATE TABLE IF NOT EXISTS Department (id INT, name VARCHAR(255));

TRUNCATE TABLE Employee;
TRUNCATE TABLE Department;

INSERT INTO Employee (id, name, salary, departmentId) VALUES ('1', 'Joe', '85000', '1');
INSERT INTO Employee (id, name, salary, departmentId) VALUES ('2', 'Henry', '80000', '2');
INSERT INTO Employee (id, name, salary, departmentId) VALUES ('3', 'Sam', '60000', '2');
INSERT INTO Employee (id, name, salary, departmentId) VALUES ('4', 'Max', '90000', '1');
INSERT INTO Employee (id, name, salary, departmentId) VALUES ('5', 'Janet', '69000', '1');
INSERT INTO Employee (id, name, salary, departmentId) VALUES ('6', 'Randy', '85000', '1');
INSERT INTO Employee (id, name, salary, departmentId) VALUES ('7', 'Will', '70000', '1');

INSERT INTO Department (id, name) VALUES ('1', 'IT');
INSERT INTO Department (id, name) VALUES ('2', 'Sales');

-- The actual query / solution
