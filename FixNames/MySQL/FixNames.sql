-- Solution for: https://leetcode.com/problems/fix-names-in-a-table/ on MySQL dbms platform
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Users (user_id INT, name VARCHAR(40));

TRUNCATE TABLE Users;

INSERT INTO Users (user_id, name) VALUES ('1', 'aLice');
INSERT INTO Users (user_id, name) VALUES ('2', 'bOB');



-- The actual query / solution
	SELECT	u.user_id,
			UPPER(LEFT(u.name, 1)) + LOWER(RIGHT(u.name, CHAR_LENGTH(u.name) - 1)) AS name
	  FROM	Users u
  ORDER BY	u.user_id


