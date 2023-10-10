-- Solution for: https://leetcode.com/problems/not-boring-movies/ on mssql dbms platform

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Cinema', N'U') IS NULL BEGIN
	CREATE TABLE Cinema (id INT, movie VARCHAR(255), description VARCHAR(255), rating FLOAT);
END

TRUNCATE TABLE Cinema;

INSERT INTO cinema (id, movie, description, rating) VALUES (1, 'War', 'great 3D', 8.9)
INSERT INTO cinema (id, movie, description, rating) VALUES (2, 'Science', 'fiction', 8.5)
INSERT INTO cinema (id, movie, description, rating) VALUES (3, 'irish', 'boring', 6.2)
INSERT INTO cinema (id, movie, description, rating) VALUES (4, 'Ice song', 'Fantacy', 8.6)
INSERT INTO cinema (id, movie, description, rating) VALUES (5, 'House card', 'Interesting', 9.1)


-- The actual query / solution
