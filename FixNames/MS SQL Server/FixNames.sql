-- Solution for: https://leetcode.com/problems/fix-names-in-a-table/ on mssql dbms platform

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Users', N'U') IS NULL BEGIN
	CREATE TABLE Users (user_id INT, name VARCHAR(40));
END

TRUNCATE TABLE Users;

INSERT INTO Users (user_id, name) VALUES ('1', 'aLice')
INSERT INTO Users (user_id, name) VALUES ('2', 'bOB')


-- The actual query / solution
	