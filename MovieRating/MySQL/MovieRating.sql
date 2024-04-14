-- Solution for: https://leetcode.com/problems/movie-rating
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Movies (movie_id INT, title VARCHAR(30));
CREATE TABLE IF NOT EXISTS Users (user_id INT, name VARCHAR(30));
CREATE TABLE IF NOT EXISTS MovieRating (movie_id INT, user_id INT, rating INT, created_at DATE);

TRUNCATE TABLE Movies;
TRUNCATE TABLE Users;
TRUNCATE TABLE MovieRating;

INSERT INTO Movies (movie_id, title) VALUES ('1', 'Avengers');
INSERT INTO Movies (movie_id, title) VALUES ('2', 'Frozen 2');
INSERT INTO Movies (movie_id, title) VALUES ('3', 'Joker');

INSERT INTO Users (user_id, name) VALUES ('1', 'Daniel');
INSERT INTO Users (user_id, name) VALUES ('2', 'Monica');
INSERT INTO Users (user_id, name) VALUES ('3', 'Maria');
INSERT INTO Users (user_id, name) VALUES ('4', 'James');

INSERT INTO MovieRating (movie_id, user_id, rating, created_at) VALUES ('1', '1', '3', '2020-01-12');
INSERT INTO MovieRating (movie_id, user_id, rating, created_at) VALUES ('1', '2', '4', '2020-02-11');
INSERT INTO MovieRating (movie_id, user_id, rating, created_at) VALUES ('1', '3', '2', '2020-02-12');
INSERT INTO MovieRating (movie_id, user_id, rating, created_at) VALUES ('1', '4', '1', '2020-01-01');
INSERT INTO MovieRating (movie_id, user_id, rating, created_at) VALUES ('2', '1', '5', '2020-02-17');
INSERT INTO MovieRating (movie_id, user_id, rating, created_at) VALUES ('2', '2', '2', '2020-02-01');
INSERT INTO MovieRating (movie_id, user_id, rating, created_at) VALUES ('2', '3', '2', '2020-03-01');
INSERT INTO MovieRating (movie_id, user_id, rating, created_at) VALUES ('3', '1', '3', '2020-02-22');
INSERT INTO MovieRating (movie_id, user_id, rating, created_at) VALUES ('3', '2', '4', '2020-02-25');


-- The actual query / solution
SELECT rater.results FROM (
	SELECT	u.name AS results
	  FROM	Users u
	  JOIN	(SELECT COUNT(mr.user_id) AS ratings, mr.user_id
			   FROM	MovieRating mr
		   GROUP BY	mr.user_id) RatingCounts ON RatingCounts.user_id = u.user_id
  ORDER BY	RatingCounts.ratings DESC, u.name
	 LIMIT 	1) AS rater

  UNION ALL SELECT movie.results FROM (

	SELECT	title AS results
	  FROM	Movies m
	  JOIN	(SELECT	mr.movie_id, AVG(mr.rating * 1.00) * 1.0 AS rating_value 
			   FROM	MovieRating mr
			  WHERE	(MONTH(mr.created_at) = 2 AND YEAR(mr.created_at) = 2020)
		   GROUP BY	mr.movie_id) AS AvgRating ON AvgRating.movie_id = m.movie_id
  ORDER BY	AvgRating.rating_value DESC, m.title
     LIMIT	1) AS movie