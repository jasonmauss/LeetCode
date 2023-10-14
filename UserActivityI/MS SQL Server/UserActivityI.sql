-- Solution for: https://leetcode.com/problems/user-activity-for-the-past-30-days-i/ on mssql dbms platform

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Activity', N'U') IS NULL BEGIN
	CREATE TABLE Activity (user_id int, session_id int, activity_date date, activity_type VARCHAR(25));
END

TRUNCATE TABLE Activity;


INSERT INTO Activity (user_id, session_id, activity_date, activity_type) VALUES (1, 1, '2019-07-20', 'open_session')
INSERT INTO Activity (user_id, session_id, activity_date, activity_type) VALUES (1, 1, '2019-07-20', 'scroll_down')
INSERT INTO Activity (user_id, session_id, activity_date, activity_type) VALUES (1, 1, '2019-07-20', 'end_session')
INSERT INTO Activity (user_id, session_id, activity_date, activity_type) VALUES (2, 4, '2019-07-20', 'open_session')
INSERT INTO Activity (user_id, session_id, activity_date, activity_type) VALUES (2, 4, '2019-07-21', 'send_message')
INSERT INTO Activity (user_id, session_id, activity_date, activity_type) VALUES (2, 4, '2019-07-21', 'end_session')
INSERT INTO Activity (user_id, session_id, activity_date, activity_type) VALUES (3, 2, '2019-07-21', 'open_session')
INSERT INTO Activity (user_id, session_id, activity_date, activity_type) VALUES (3, 2, '2019-07-21', 'send_message')
INSERT INTO Activity (user_id, session_id, activity_date, activity_type) VALUES (3, 2, '2019-07-21', 'end_session')
INSERT INTO Activity (user_id, session_id, activity_date, activity_type) VALUES (4, 3, '2019-06-25', 'open_session')
INSERT INTO Activity (user_id, session_id, activity_date, activity_type) VALUES (4, 3, '2019-06-25', 'end_session')


-- The actual query / solution
	SELECT	a.activity_date AS 'day',
			COUNT(DISTINCT user_id) AS active_users
	  FROM	Activity a
	 WHERE	a.activity_date BETWEEN DATEADD(DAY, -29, '2019-07-27') AND '2019-07-27'
  GROUP BY	a.activity_date
