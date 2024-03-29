-- Solution for: https://leetcode.com/problems/duplicate-emails/ on mssql dbms platform

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Person', N'U') IS NULL BEGIN
	CREATE TABLE Person (id INT, email VARCHAR(255));
END

TRUNCATE TABLE Person;

INSERT INTO Person (id, email) VALUES (1, 'john@example.com')
INSERT INTO Person (id, email) VALUES (2, 'bob@example.com')
INSERT INTO Person (id, email) VALUES (3, 'john@example.com')

-- The actual query / solution
	DELETE	p1 
	  FROM	Person AS p1,
			Person AS p2
	 WHERE	p1.id > p2.id
	   AND	p1.email = p2.email

