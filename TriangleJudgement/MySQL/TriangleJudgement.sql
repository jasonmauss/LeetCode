-- Solution for: https://leetcode.com/problems/triangle-judgement/ on MySQL dbms platform
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Triangle (x INT, y INT, z INT);

TRUNCATE TABLE Triangle;

INSERT INTO Triangle (x,y,z) VALUES (13,15,30);
INSERT INTO Triangle (x,y,z) VALUES (10,20,15);


-- The actual query / solution
	
