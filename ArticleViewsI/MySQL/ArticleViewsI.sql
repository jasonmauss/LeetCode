-- Solution for: https://leetcode.com/problems/article-views-i/ on MySQL dbms platform
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Views (article_id int, author_id int, viewer_id int, view_date date);

TRUNCATE TABLE Views;

INSERT INTO Views (article_id, author_id, viewer_id, view_date) VALUES (1, 3, 5, '2019-08-01');
INSERT INTO Views (article_id, author_id, viewer_id, view_date) VALUES (1, 3, 6, '2019-08-02');
INSERT INTO Views (article_id, author_id, viewer_id, view_date) VALUES (2, 7, 7, '2019-08-01');
INSERT INTO Views (article_id, author_id, viewer_id, view_date) VALUES (2, 7, 6, '2019-08-02');
INSERT INTO Views (article_id, author_id, viewer_id, view_date) VALUES (4, 7, 1, '2019-07-22');
INSERT INTO Views (article_id, author_id, viewer_id, view_date) VALUES (3, 4, 4, '2019-07-21');
INSERT INTO Views (article_id, author_id, viewer_id, view_date) VALUES (3, 4, 4, '2019-07-21');


-- The actual query / solution
    SELECT	DISTINCT v1.viewer_id AS id
	  FROM	Views v1
	 WHERE	v1.viewer_id = v1.author_id
  ORDER BY	v1.viewer_id ASC
