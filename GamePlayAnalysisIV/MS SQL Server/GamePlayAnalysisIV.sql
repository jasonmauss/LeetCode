-- Solution for: https://leetcode.com/problems/game-play-analysis-iv on mssql dbms platform

USE leetcodedb;

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Activity', N'U') IS NULL BEGIN
	CREATE TABLE Activity (player_id INT, device_id INT, event_date DATE, games_played INT);
END

TRUNCATE TABLE Activity;

insert into Activity (player_id, device_id, event_date, games_played) VALUES (1, 2, '2016-03-01', 5)
insert into Activity (player_id, device_id, event_date, games_played) VALUES (1, 2, '2016-03-02', 6)
insert into Activity (player_id, device_id, event_date, games_played) VALUES (2, 3, '2017-06-25', 1)
insert into Activity (player_id, device_id, event_date, games_played) VALUES (3, 1, '2016-03-02', 0)
insert into Activity (player_id, device_id, event_date, games_played) VALUES (3, 4, '2018-07-03', 5)


-- The actual query / solution


