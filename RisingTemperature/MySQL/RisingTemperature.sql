-- Solution for: https://leetcode.com/problems/find-total-time-spent-by-each-employee/
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Employees(emp_id int, event_day date, in_time int, out_time int);
TRUNCATE TABLE Employees;
INSERT INTO Employees (emp_id, event_day, in_time, out_time) VALUES ('1', '2020-11-28', '4', '32');
INSERT INTO Employees (emp_id, event_day, in_time, out_time) VALUES ('1', '2020-11-28', '55', '200');
INSERT INTO Employees (emp_id, event_day, in_time, out_time) VALUES ('1', '2020-12-3', '1', '42');
INSERT INTO Employees (emp_id, event_day, in_time, out_time) VALUES ('2', '2020-11-28', '3', '33');
INSERT INTO Employees (emp_id, event_day, in_time, out_time) VALUES ('2', '2020-12-9', '47', '74');

-- The actual query / solution
SELECT  e.event_day AS 'day',
			e.emp_id,
			SUM(e.out_time - e.in_time) AS total_time
	  FROM	Employees AS e
  GROUP BY  e.emp_id,
			e.event_day