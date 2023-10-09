-- Solution for: https://leetcode.com/problems/biggest-single-number/ on MySQL dbms platform
USE leetcodedb;

CREATE TABLE IF NOT EXISTS MyNumbers (x INT, y INT, z INT);

TRUNCATE TABLE MyNumbers;

INSERT INTO MyNumbers (num) VALUES (8);
INSERT INTO MyNumbers (num) VALUES (8);
INSERT INTO MyNumbers (num) VALUES (3);
INSERT INTO MyNumbers (num) VALUES (3);
INSERT INTO MyNumbers (num) VALUES (1);
INSERT INTO MyNumbers (num) VALUES (4);
INSERT INTO MyNumbers (num) VALUES (5);
INSERT INTO MyNumbers (num) VALUES (6);


-- The actual query / solution
	
