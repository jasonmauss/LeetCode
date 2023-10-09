-- Solution for: https://leetcode.com/problems/triangle-judgement/ on MySQL dbms platform
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Triangle (x INT, y INT, z INT);

TRUNCATE TABLE Triangle;

INSERT INTO Triangle (x,y,z) VALUES (13,15,30);
INSERT INTO Triangle (x,y,z) VALUES (10,20,15);


-- The actual query / solution
	SELECT	x,
			y,
			z,
			CASE WHEN 
			(x + y > z) AND
			(y + z > x) AND
			(z + x > y) 
			THEN 'Yes' ELSE 'No' END AS 'triangle'
	  FROM	Triangle t
