-- Solution for: https://leetcode.com/problems/last-person-to-fit-in-the-bus on mssql dbms platform

USE leetcodedb;

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Queue', N'U') IS NULL BEGIN
	CREATE TABLE Queue (person_id INT, person_name VARCHAR(30), weight INT, turn INT);
END

TRUNCATE TABLE Queue;

INSERT INTO Queue (person_id, person_name, weight, turn) VALUES (5, 'Alice', 250, 1)
INSERT INTO Queue (person_id, person_name, weight, turn) VALUES (4, 'Bob', 175, 5)
INSERT INTO Queue (person_id, person_name, weight, turn) VALUES (3, 'Alex', 350, 2)
INSERT INTO Queue (person_id, person_name, weight, turn) VALUES (6, 'John Cena', 400, 3)
INSERT INTO Queue (person_id, person_name, weight, turn) VALUES (1, 'Winston', 500, 6)
INSERT INTO Queue (person_id, person_name, weight, turn) VALUES (2, 'Marie', 200, 4)


-- The actual query / solution


