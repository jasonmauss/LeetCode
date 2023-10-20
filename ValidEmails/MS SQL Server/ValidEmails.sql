-- Solution for: https://leetcode.com/problems/find-users-with-valid-e-mails/ on mssql dbms platform

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Users', N'U') IS NULL BEGIN
	CREATE TABLE Users (user_id int, name varchar(30), mail varchar(50));
END

TRUNCATE TABLE Users;

INSERT INTO Users (user_id, name, mail) VALUES (1, 'Winston', 'winston@leetcode.com')
INSERT INTO Users (user_id, name, mail) VALUES (2, 'Jonathan', 'jonathanisgreat')
INSERT INTO Users (user_id, name, mail) VALUES (3, 'Annabelle', 'bella-@leetcode.com')
INSERT INTO Users (user_id, name, mail) VALUES (4, 'Sally', 'sally.come@leetcode.com')
INSERT INTO Users (user_id, name, mail) VALUES (5, 'Marwan', 'quarz#2020@leetcode.com')
INSERT INTO Users (user_id, name, mail) VALUES (6, 'David', 'david69@gmail.com')
INSERT INTO Users (user_id, name, mail) VALUES (7, 'Shapiro', '.shapo@leetcode.com')


-- The actual query / solution
	