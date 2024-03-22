-- Solution for: https://leetcode.com/problems/managers-with-at-least-5-direct-reports
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Employee (id INT, name VARCHAR(255), department VARCHAR(255), managerId INT);
TRUNCATE TABLE Employee;

insert into Employee (id, name, department, managerId) values ('101', 'John', 'A', NULL);
insert into Employee (id, name, department, managerId) values ('102', 'Dan', 'A', '101');
insert into Employee (id, name, department, managerId) values ('103', 'James', 'A', '101');
insert into Employee (id, name, department, managerId) values ('104', 'Amy', 'A', '101');
insert into Employee (id, name, department, managerId) values ('105', 'Anne', 'A', '101');
insert into Employee (id, name, department, managerId) values ('106', 'Ron', 'B', '101');


-- The actual query / solution
	SELECT	emp.name
	  FROM	Employee emp
INNER JOIN	(SELECT COUNT(e.managerId) AS reports,
					e.managerId AS id
			   FROM	Employee e
			  WHERE	(e.managerId IS NOT NULL)
		   GROUP BY	e.managerId
			) AS managers ON  managers.id = emp.id
	 WHERE	(managers.reports >= 5)


