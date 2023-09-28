-- Solution for: https://leetcode.com/problems/rank-scores/ on mssql dbms platform

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Scores', N'U') IS NULL BEGIN
	CREATE TABLE Scores (id INT, score DECIMAL(3,2));
END

TRUNCATE TABLE Scores;

INSERT INTO Scores (id, score) VALUES (1, 3.5)
INSERT INTO Scores (id, score) VALUES (2, 3.65)
INSERT INTO Scores (id, score) VALUES (3, 4.0)
INSERT INTO Scores (id, score) VALUES (4, 3.85)
INSERT INTO Scores (id, score) VALUES (5, 4.0)
INSERT INTO Scores (id, score) VALUES (6, 3.65)

-- The actual query / solution
	SELECT	s.score,
			DENSE_RANK() OVER (ORDER BY s.score DESC) AS 'rank'
	  FROM	Scores s

