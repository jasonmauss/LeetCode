-- Solution for: https://leetcode.com/problems/rank-scores/ on MySQL dbms platform
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Scores (id INT, score DECIMAL(3,2));

TRUNCATE TABLE Scores;

INSERT INTO Scores (id, score) VALUES ('1', '3.5');
INSERT INTO Scores (id, score) VALUES ('2', '3.65');
INSERT INTO Scores (id, score) VALUES ('3', '4.0');
INSERT INTO Scores (id, score) VALUES ('4', '3.85');
INSERT INTO Scores (id, score) VALUES ('5', '4.0');
INSERT INTO Scores (id, score) VALUES ('6', '3.65');


-- The actual query / solution

