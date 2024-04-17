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
	SELECT	TOP 1 dataset.id,
			SUM(dataset.RequestOrAcceptCount) AS num 
	  FROM (SELECT	ra.requester_id AS id,
					COUNT(ra.requester_id) AS RequestOrAcceptCount
			  FROM	RequestAccepted ra
		  GROUP BY	ra.requester_id
		
			 UNION	ALL

			SELECT	ra.accepter_id AS id,
					COUNT(ra.accepter_id) AS RequestOrAcceptCount
			  FROM	RequestAccepted ra
		  GROUP BY	ra.accepter_id) AS dataset

  GROUP BY	dataset.id
  ORDER BY	SUM(dataset.RequestOrAcceptCount) DESC