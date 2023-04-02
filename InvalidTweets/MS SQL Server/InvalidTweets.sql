-- Solution for: https://leetcode.com/problems/invalid-tweets/

USE leetcodedb;
GO

IF OBJECT_ID(N'dbo.Tweets', N'U') IS NULL BEGIN
	CREATE TABLE Tweets (tweet_id INT, content VARCHAR(50));
END
GO


TRUNCATE TABLE Tweets;

INSERT INTO Tweets (tweet_id, content) VALUES (1, 'Vote for Biden')
INSERT INTO Tweets (tweet_id, content) VALUES (2, 'Let us make America great again!')

-- SQL Solution:


