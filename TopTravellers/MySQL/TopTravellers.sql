-- Solution for: https://leetcode.com/problems/top-travellers/ on MySQL dbms platform
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Users (id INT, name VARCHAR(30));
CREATE TABLE IF NOT EXISTS Rides (id INT, user_id INT, distance INT);

TRUNCATE TABLE Users;
TRUNCATE TABLE Rides;

INSERT INTO Users (id, name) VALUES (1, 'Alice');
INSERT INTO Users (id, name) VALUES (2, 'Bob');
INSERT INTO Users (id, name) VALUES (3, 'Alex');
INSERT INTO Users (id, name) VALUES (4, 'Donald');
INSERT INTO Users (id, name) VALUES (7, 'Lee');
INSERT INTO Users (id, name) VALUES (13, 'Jonathan');
INSERT INTO Users (id, name) VALUES (19, 'Elvis');

INSERT INTO Rides (id, user_id, distance) VALUES (1, 1, 120);
INSERT INTO Rides (id, user_id, distance) VALUES (2, 2, 317);
INSERT INTO Rides (id, user_id, distance) VALUES (3, 3, 222);
INSERT INTO Rides (id, user_id, distance) VALUES (4, 7, 100);
INSERT INTO Rides (id, user_id, distance) VALUES (5, 13, 312);
INSERT INTO Rides (id, user_id, distance) VALUES (6, 19, 50);
INSERT INTO Rides (id, user_id, distance) VALUES (7, 7, 120);
INSERT INTO Rides (id, user_id, distance) VALUES (8, 19, 400);
INSERT INTO Rides (id, user_id, distance) VALUES (9, 7, 230);


-- The actual query / solution

