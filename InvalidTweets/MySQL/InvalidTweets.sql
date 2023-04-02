-- Solution for: https://leetcode.com/problems/invalid-tweets/
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Tweets(tweet_id INT, content VARCHAR(50));

TRUNCATE TABLE Tweets;

INSERT INTO Tweets (tweet_id, content) VALUES ('1', 'Vote for Biden');
INSERT INTO Tweets (tweet_id, content) VALUES ('2', 'Let us make America great again!');

-- SQL Solution:
