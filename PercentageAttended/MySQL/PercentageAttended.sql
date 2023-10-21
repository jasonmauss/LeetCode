-- Solution for: https://leetcode.com/problems/percentage-of-users-attended-a-contest/ on MySQL dbms platform
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Users (user_id INT, user_name VARCHAR(20));
CREATE TABLE IF NOT EXISTS Register (contest_id INT, user_id INT);

TRUNCATE TABLE Users;
TRUNCATE TABLE Register;

INSERT INTO Users (user_id, user_name) VALUES (6, 'Alice');
INSERT INTO Users (user_id, user_name) VALUES (2, 'Bob');
INSERT INTO Users (user_id, user_name) VALUES (7, 'Alex');

INSERT INTO Register (contest_id, user_id) VALUES (215, 6);
INSERT INTO Register (contest_id, user_id) VALUES (209, 2);
INSERT INTO Register (contest_id, user_id) VALUES (208, 2);
INSERT INTO Register (contest_id, user_id) VALUES (210, 6);
INSERT INTO Register (contest_id, user_id) VALUES (208, 6);
INSERT INTO Register (contest_id, user_id) VALUES (209, 7);
INSERT INTO Register (contest_id, user_id) VALUES (209, 6);
INSERT INTO Register (contest_id, user_id) VALUES (215, 7);
INSERT INTO Register (contest_id, user_id) VALUES (208, 7);
INSERT INTO Register (contest_id, user_id) VALUES (210, 2);
INSERT INTO Register (contest_id, user_id) VALUES (207, 2);
INSERT INTO Register (contest_id, user_id) VALUES (210, 7);


-- The actual query / solution

