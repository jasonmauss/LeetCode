-- Solution for: https://leetcode.com/problems/queries-quality-and-percentage/ on MySQL dbms platform
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Queries (query_name varchar(30), result varchar(50), position int, rating int);

TRUNCATE TABLE Queries;

INSERT INTO Queries (query_name, result, position, rating) VALUES ('Dog', 'Golden Retriever', 1, 5);
INSERT INTO Queries (query_name, result, position, rating) VALUES ('Dog', 'German Shepherd', 2, 5);
INSERT INTO Queries (query_name, result, position, rating) VALUES ('Dog', 'Mule', 200, 1);
INSERT INTO Queries (query_name, result, position, rating) VALUES ('Cat', 'Shirazi', 5, 2);
INSERT INTO Queries (query_name, result, position, rating) VALUES ('Cat', 'Siamese', 3, 3);
INSERT INTO Queries (query_name, result, position, rating) VALUES ('Cat', 'Sphynx', 7, 4);


-- The actual query / solution
	SELECT	q.query_name,
			CAST(SUM(q.rating * 1.00 / q.position * 1.00) / COUNT(query_name) AS decimal(5,2)) AS quality,
			CAST( (SUM(CASE WHEN q.rating < 3 THEN 1.00 ELSE 0 END)
					/
				   COUNT(query_name)
				   ) * 100
				AS DECIMAL(5,2)) AS poor_query_percentage
	  FROM	Queries q
  GROUP BY	q.query_name
