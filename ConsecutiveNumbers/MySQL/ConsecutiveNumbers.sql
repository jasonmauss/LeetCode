-- Solution for: https://leetcode.com/problems/consecutive-numbers
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Logs (id INT, num INT);

TRUNCATE TABLE Logs;

INSERT INTO Logs (id, num) VALUES ('1', '1');
INSERT INTO Logs (id, num) VALUES ('2', '1');
INSERT INTO Logs (id, num) VALUES ('3', '1');
INSERT INTO Logs (id, num) VALUES ('4', '2');
INSERT INTO Logs (id, num) VALUES ('5', '1');
INSERT INTO Logs (id, num) VALUES ('6', '2');
INSERT INTO Logs (id, num) VALUES ('7', '2');


-- The actual query / solution
	SELECT	DISTINCT l1.num AS ConsecutiveNums
	  FROM  Logs AS l1
INNER JOIN	Logs AS l2 ON l1.id = l2.id + 1
INNER JOIN	Logs AS l3 ON l1.id = l3.id - 1
	 WHERE	(l1.num = l2.num AND l1.num = l3.num)