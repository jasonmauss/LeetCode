-- Solution for: https://leetcode.com/problems/duplicate-emails/ on MySQL dbms platform
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Person (id INT, email VARCHAR(255));

TRUNCATE TABLE Person;

INSERT INTO Person (id, email) VALUES ('1', 'a@b.com');
INSERT INTO Person (id, email) VALUES ('2', 'c@d.com');
INSERT INTO Person (id, email) VALUES ('3', 'a@b.com');


-- The actual query / solution

