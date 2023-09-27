-- Solution for: https://leetcode.com/problems/nth-highest-salary/ on MySQL dbms platform
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Employee (id int, salary int);

TRUNCATE TABLE Employee;

INSERT INTO Employee (id, salary) VALUES (1, 100);
INSERT INTO Employee (id, salary) VALUES (2, 200);
INSERT INTO Employee (id, salary) VALUES (3, 300);


-- The actual query / solution
CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
    RETURN (

		SELECT sq.salary FROM 
		(
			SELECT	e.salary,
					ROW_NUMBER() OVER (ORDER BY e.salary DESC) AS number
			  FROM	(SELECT DISTINCT salary FROM Employee) e
		) AS sq
		WHERE sq.number = N

    )
END;
