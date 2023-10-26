-- Solution for: https://leetcode.com/problems/find-followers-count/ on mssql dbms platform

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Followers', N'U') IS NULL BEGIN
	CREATE TABLE Followers (user_id INT, follower_id INT);
END

TRUNCATE TABLE Followers;

INSERT INTO Followers (user_id, follower_id) VALUES (0, 1)
INSERT INTO Followers (user_id, follower_id) VALUES (1, 0)
INSERT INTO Followers (user_id, follower_id) VALUES (2, 0)
INSERT INTO Followers (user_id, follower_id) VALUES (2, 1)


-- The actual query / solution
	
