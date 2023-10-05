-- Solution for: https://leetcode.com/problems/find-customer-referee/ on mssql dbms platform

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Customer', N'U') IS NULL BEGIN
	CREATE TABLE Customer (id INT, name VARCHAR(25), referee_id INT);
END

TRUNCATE TABLE Customer;

INSERT INTO Customer (id, name, referee_id) VALUES (1, 'Will', NULL)
INSERT INTO Customer (id, name, referee_id) VALUES (2, 'Jane', NULL)
INSERT INTO Customer (id, name, referee_id) VALUES (3, 'Alex', 2)
INSERT INTO Customer (id, name, referee_id) VALUES (4, 'Bill', NULL)
INSERT INTO Customer (id, name, referee_id) VALUES (5, 'Zack', 1)
INSERT INTO Customer (id, name, referee_id) VALUES (6, 'Mark', 2)


-- The actual query / solution
	SELECT	c.name
	  FROM	Customer c
	 WHERE	(ISNULL(c.referee_id, 0) <> 2)
