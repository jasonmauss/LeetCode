-- Solution for: https://leetcode.com/problems/movie-rating on mssql dbms platform

USE leetcodedb;

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Movies', N'U') IS NULL BEGIN
	CREATE TABLE Movies (movie_id INT, title VARCHAR(30));
END

IF OBJECT_ID(N'dbo.Users', N'U') IS NULL BEGIN
	CREATE TABLE Users (user_id INT, name VARCHAR(30));
END

IF OBJECT_ID(N'dbo.MovieRating', N'U') IS NULL BEGIN
	CREATE TABLE MovieRating (movie_id INT, user_id INT, rating INT, created_at DATE);
END

TRUNCATE TABLE Movies;
TRUNCATE TABLE Users;
TRUNCATE TABLE MovieRating;

INSERT INTO Movies (movie_id, title) VALUES (1, 'Avengers')
INSERT INTO Movies (movie_id, title) VALUES (2, 'Frozen 2')
INSERT INTO Movies (movie_id, title) VALUES (3, 'Joker')

INSERT INTO Users (user_id, name) VALUES (1, 'Daniel')
INSERT INTO Users (user_id, name) VALUES (2, 'Monica')
INSERT INTO Users (user_id, name) VALUES (3, 'Maria')
INSERT INTO Users (user_id, name) VALUES (4, 'James')

INSERT INTO MovieRating (movie_id, user_id, rating, created_at) VALUES (1, 1, 3, '2020-01-12')
INSERT INTO MovieRating (movie_id, user_id, rating, created_at) VALUES (1, 2, 4, '2020-02-11')
INSERT INTO MovieRating (movie_id, user_id, rating, created_at) VALUES (1, 3, 2, '2020-02-12')
INSERT INTO MovieRating (movie_id, user_id, rating, created_at) VALUES (1, 4, 1, '2020-01-01')
INSERT INTO MovieRating (movie_id, user_id, rating, created_at) VALUES (2, 1, 5, '2020-02-17')
INSERT INTO MovieRating (movie_id, user_id, rating, created_at) VALUES (2, 2, 2, '2020-02-01')
INSERT INTO MovieRating (movie_id, user_id, rating, created_at) VALUES (2, 3, 2, '2020-03-01')
INSERT INTO MovieRating (movie_id, user_id, rating, created_at) VALUES (3, 1, 3, '2020-02-22')
INSERT INTO MovieRating (movie_id, user_id, rating, created_at) VALUES (3, 2, 4, '2020-02-25')


-- The actual query / solution

