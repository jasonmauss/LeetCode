-- Solution for: https://leetcode.com/problems/actors-and-directors-who-cooperated-at-least-three-times/ on mssql dbms platform

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.ActorDirector', N'U') IS NULL BEGIN
	CREATE TABLE ActorDirector (actor_id INT, director_id INT, timestamp INT);
END

TRUNCATE TABLE ActorDirector;

INSERT INTO ActorDirector (actor_id, director_id, timestamp) VALUES (1, 1, 0)
INSERT INTO ActorDirector (actor_id, director_id, timestamp) VALUES (1, 1, 1)
INSERT INTO ActorDirector (actor_id, director_id, timestamp) VALUES (1, 1, 2)
INSERT INTO ActorDirector (actor_id, director_id, timestamp) VALUES (1, 2, 3)
INSERT INTO ActorDirector (actor_id, director_id, timestamp) VALUES (1, 2, 4)
INSERT INTO ActorDirector (actor_id, director_id, timestamp) VALUES (2, 1, 5)
INSERT INTO ActorDirector (actor_id, director_id, timestamp) VALUES (2, 1, 6)


-- The actual query / solution
	SELECT	actor_id,
			director_id
	  FROM	ActorDirector ad
  GROUP BY	actor_id, director_id
    HAVING	COUNT(*) >= 3
