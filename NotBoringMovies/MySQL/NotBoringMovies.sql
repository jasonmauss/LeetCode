-- Solution for: https://leetcode.com/problems/not-boring-movies/ on MySQL dbms platform
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Cinema (id INT, movie VARCHAR(255), description VARCHAR(255), rating FLOAT(2,1));

TRUNCATE TABLE Cinema;

INSERT INTO cinema (id, movie, description, rating) VALUES (1, 'War', 'great 3D', 8.9);
INSERT INTO cinema (id, movie, description, rating) VALUES (2, 'Science', 'fiction', 8.5);
INSERT INTO cinema (id, movie, description, rating) VALUES (3, 'irish', 'boring', 6.2);
INSERT INTO cinema (id, movie, description, rating) VALUES (4, 'Ice song', 'Fantacy', 8.6);
INSERT INTO cinema (id, movie, description, rating) VALUES (5, 'House card', 'Interesting', 9.1);


-- The actual query / solution

