-- Solution for: https://leetcode.com/problems/last-person-to-fit-in-the-bus
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Queue (person_id INT, person_name VARCHAR(30), weight INT, turn INT);

TRUNCATE TABLE Queue;

INSERT INTO Queue (person_id, person_name, weight, turn) VALUES ('5', 'Alice', '250', '1');
INSERT INTO Queue (person_id, person_name, weight, turn) VALUES ('4', 'Bob', '175', '5');
INSERT INTO Queue (person_id, person_name, weight, turn) VALUES ('3', 'Alex', '350', '2');
INSERT INTO Queue (person_id, person_name, weight, turn) VALUES ('6', 'John Cena', '400', '3');
INSERT INTO Queue (person_id, person_name, weight, turn) VALUES ('1', 'Winston', '500', '6');
INSERT INTO Queue (person_id, person_name, weight, turn) VALUES ('2', 'Marie', '200', '4');


-- The actual query / solution
	SELECT 	q1.person_name
	  FROM 	Queue q1
	  JOIN 	Queue q2 ON q1.turn >= q2.turn
  GROUP BY 	q1.turn
	HAVING 	SUM(q2.weight) <= 1000
  ORDER BY 	SUM(q2.weight) DESC
	 LIMIT 	1