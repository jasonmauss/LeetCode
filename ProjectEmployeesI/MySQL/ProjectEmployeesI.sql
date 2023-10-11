-- Solution for: https://leetcode.com/problems/project-employees-i/ on MySQL dbms platform
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Project (project_id INT, employee_id INT);

TRUNCATE TABLE Project;

CREATE TABLE IF NOT EXISTS Employee (employee_id INT, name VARCHAR(10), experience_years INT);

TRUNCATE TABLE Employee;

INSERT INTO Project (project_id, employee_id) VALUES (1, 1);
INSERT INTO Project (project_id, employee_id) VALUES (1, 2);
INSERT INTO Project (project_id, employee_id) VALUES (1, 3);
INSERT INTO Project (project_id, employee_id) VALUES (2, 1);
INSERT INTO Project (project_id, employee_id) VALUES (2, 4);

INSERT INTO Employee (employee_id, name, experience_years) VALUES (1, 'Khaled', 3);
INSERT INTO Employee (employee_id, name, experience_years) VALUES (2, 'Ali', 2);
INSERT INTO Employee (employee_id, name, experience_years) VALUES (3, 'John', 1);
INSERT INTO Employee (employee_id, name, experience_years) VALUES (4, 'Doe', 2);


-- The actual query / solution

