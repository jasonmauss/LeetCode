-- Solution for: https://leetcode.com/problems/queries-quality-and-percentage/ on mssql dbms platform

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Queries', N'U') IS NULL BEGIN
	CREATE TABLE Queries (query_name varchar(30), result varchar(50), position int, rating int);
END

TRUNCATE TABLE Queries;


INSERT INTO Queries (query_name, result, position, rating) VALUES ('Dog', 'Golden Retriever', 1, 5)
INSERT INTO Queries (query_name, result, position, rating) VALUES ('Dog', 'German Shepherd', 2, 5)
INSERT INTO Queries (query_name, result, position, rating) VALUES ('Dog', 'Mule', 200, 1)
INSERT INTO Queries (query_name, result, position, rating) VALUES ('Cat', 'Shirazi', 5, 2)
INSERT INTO Queries (query_name, result, position, rating) VALUES ('Cat', 'Siamese', 3, 3)
INSERT INTO Queries (query_name, result, position, rating) VALUES ('Cat', 'Sphynx', 7, 4)


-- The actual query / solution
	