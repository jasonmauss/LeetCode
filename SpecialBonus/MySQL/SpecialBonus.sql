-- Solution for: https://leetcode.com/problems/calculate-special-bonus/ on MySQL dbms platform
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Employees (employee_id INT, name VARCHAR(30), salary INT);

TRUNCATE TABLE Employees;

INSERT INTO Employees (employee_id, name, salary) VALUES (2, 'Meir', 3000);
INSERT INTO Employees (employee_id, name, salary) VALUES (3, 'Michael', 3800);
INSERT INTO Employees (employee_id, name, salary) VALUES (7, 'Addilyn', 7400);
INSERT INTO Employees (employee_id, name, salary) VALUES (8, 'Juan', 6100);
INSERT INTO Employees (employee_id, name, salary) VALUES (9, 'Kannon', 7700);



-- The actual query / solution
	SELECT	employee_id,
			CASE WHEN e.employee_id % 2 = 1 AND e.name NOT LIKE 'M%' THEN e.salary ELSE 0 END AS bonus
	  FROM	Employees e
  ORDER BY	e.employee_id


