-- Solution for: https://leetcode.com/problems/friend-requests-ii-who-has-the-most-friends on mssql dbms platform

USE leetcodedb;

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.RequestAccepted', N'U') IS NULL BEGIN
	CREATE TABLE RequestAccepted (requester_id INT NOT NULL, accepter_id INT NULL, accept_date DATE NULL);
END

TRUNCATE TABLE RequestAccepted;

INSERT INTO RequestAccepted (requester_id, accepter_id, accept_date) VALUES (1, 2, '2016-06-03')
INSERT INTO RequestAccepted (requester_id, accepter_id, accept_date) VALUES (1, 3, '2016-06-08')
INSERT INTO RequestAccepted (requester_id, accepter_id, accept_date) VALUES (2, 3, '2016-06-08')
INSERT INTO RequestAccepted (requester_id, accepter_id, accept_date) VALUES (3, 4, '2016-06-09')


-- The actual query / solution
