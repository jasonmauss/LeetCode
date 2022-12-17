https://leetcode.com/problems/find-total-time-spent-by-each-employee/


CREATE TABLE  "EMPLOYEES" 
   (	"EMP_ID" NUMBER, 
	"EVENT_DAY" DATE, 
	"IN_TIME" NUMBER, 
	"OUT_TIME" NUMBER
   );

TRUNCATE TABLE "EMPLOYEES";

INSERT INTO Employees (emp_id, event_day, in_time, out_time) VALUES ('1', '2020-11-28', '4', '32');
INSERT INTO Employees (emp_id, event_day, in_time, out_time) VALUES ('1', '2020-11-28', '55', '200');
INSERT INTO Employees (emp_id, event_day, in_time, out_time) VALUES ('1', '2020-12-3', '1', '42');
INSERT INTO Employees (emp_id, event_day, in_time, out_time) VALUES ('2', '2020-11-28', '3', '33');
INSERT INTO Employees (emp_id, event_day, in_time, out_time) VALUES ('2', '2020-12-9', '47', '74');

-- The actual query / solution
SELECT 	TO_CHAR(event_day, 'yyyy-mm-dd') AS day,
		emp_id,
		SUM(out_time - in_time) AS total_time
  FROM 	Employees
GROUP BY event_day, emp_id;