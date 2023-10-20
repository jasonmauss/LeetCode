-- Solution for: https://leetcode.com/problems/find-users-with-valid-e-mails/ on MySQL dbms platform
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Users (user_id int, name varchar(30), mail varchar(50));

TRUNCATE TABLE Users;
INSERT INTO Users (user_id, name, mail) VALUES (1, 'Winston', 'winston@leetcode.com');
INSERT INTO Users (user_id, name, mail) VALUES (2, 'Jonathan', 'jonathanisgreat');
INSERT INTO Users (user_id, name, mail) VALUES (3, 'Annabelle', 'bella-@leetcode.com');
INSERT INTO Users (user_id, name, mail) VALUES (4, 'Sally', 'sally.come@leetcode.com');
INSERT INTO Users (user_id, name, mail) VALUES (5, 'Marwan', 'quarz#2020@leetcode.com');
INSERT INTO Users (user_id, name, mail) VALUES (6, 'David', 'david69@gmail.com');
INSERT INTO Users (user_id, name, mail) VALUES (7, 'Shapiro', '.shapo@leetcode.com');

-- The actual query / solution
	SELECT	user_id,
			name,
			mail
	  FROM  Users
	 WHERE  REGEXP_LIKE(mail, '^[a-zA-Z][a-zA-Z0-9._-]*@leetcode\\.com$')
