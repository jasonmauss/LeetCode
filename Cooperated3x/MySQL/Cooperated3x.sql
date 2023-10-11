-- Solution for: https://leetcode.com/problems/actors-and-directors-who-cooperated-at-least-three-times/ on MySQL dbms platform
USE leetcodedb;

CREATE TABLE IF NOT EXISTS ActorDirector (actor_id INT, director_id INT, timestamp INT);

TRUNCATE TABLE ActorDirector;

INSERT INTO ActorDirector (actor_id, director_id, timestamp) VALUES (1, 1, 0);
INSERT INTO ActorDirector (actor_id, director_id, timestamp) VALUES (1, 1, 1);
INSERT INTO ActorDirector (actor_id, director_id, timestamp) VALUES (1, 1, 2);
INSERT INTO ActorDirector (actor_id, director_id, timestamp) VALUES (1, 2, 3);
INSERT INTO ActorDirector (actor_id, director_id, timestamp) VALUES (1, 2, 4);
INSERT INTO ActorDirector (actor_id, director_id, timestamp) VALUES (2, 1, 5);
INSERT INTO ActorDirector (actor_id, director_id, timestamp) VALUES (2, 1, 6);


-- The actual query / solution
	SELECT	actor_id,
			director_id
	  FROM	ActorDirector ad
  GROUP BY	actor_id, director_id
    HAVING	COUNT(*) >= 3
