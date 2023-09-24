-- Solution for: https://leetcode.com/problems/department-highest-salary/ on MySQL dbms platform
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Employee (id int, name varchar(255), salary int, departmentId int);
CREATE TABLE IF NOT EXISTS Department (id int, name varchar(255));

TRUNCATE TABLE Employee;
TRUNCATE TABLE Department;

INSERT INTO Employee (id, name, salary, departmentId) VALUES ('1', 'Joe', '70000', '1');
INSERT INTO Employee (id, name, salary, departmentId) VALUES ('2', 'Jim', '90000', '1');
INSERT INTO Employee (id, name, salary, departmentId) VALUES ('3', 'Henry', '80000', '2');
INSERT INTO Employee (id, name, salary, departmentId) VALUES ('4', 'Sam', '60000', '2');
INSERT INTO Employee (id, name, salary, departmentId) VALUES ('5', 'Max', '90000', '1');

INSERT INTO Department (id, name) VALUES ('1', 'IT');
INSERT INTO Department (id, name) VALUES ('2', 'Sales');

-- The actual query / solution
SELECT	d.name AS 'Department',
			e.name AS 'Employee',
			dept.salary AS 'Salary'
	  FROM	Employee AS e
	  JOIN	(SELECT departmentId, MAX(salary) AS salary FROM Employee GROUP BY departmentId) AS dept
			ON dept.departmentId = e.departmentId AND e.salary = dept.salary
 
	  JOIN	Department d ON d.id = e.departmentId