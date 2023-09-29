-- Solution for: https://leetcode.com/problems/duplicate-emails/ on MySQL dbms platform
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Person (id INT, email VARCHAR(255));

TRUNCATE TABLE Person;

INSERT INTO Person (id, email) VALUES ('1', 'john@example.com');
INSERT INTO Person (id, email) VALUES ('2', 'bob@example.com');
INSERT INTO Person (id, email) VALUES ('3', 'john@example.com');


-- The actual query / solution
SELECT	email
	  FROM	Person
	GROUP BY email
	HAVING COUNT(email) > 1
