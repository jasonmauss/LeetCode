-- Solution for: https://leetcode.com/problems/employees-earning-more-than-their-managers/ on MySQL dbms platform
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Employee (id int, name varchar(255), salary int, managerId int);

TRUNCATE TABLE Employee;
insert into Employee (id, name, salary, managerId) values ('1', 'Joe', '70000', '3');
insert into Employee (id, name, salary, managerId) values ('2', 'Henry', '80000', '4');
insert into Employee (id, name, salary, managerId) values ('3', 'Sam', '60000', NULL);
insert into Employee (id, name, salary, managerId) values ('4', 'Max', '90000', NULL);

-- The actual query / solution
	SELECT	e.name AS 'Employee'
	  FROM	Employee AS e
	  JOIN	Employee AS m ON m.id = e.managerId
			AND e.salary > m.salary