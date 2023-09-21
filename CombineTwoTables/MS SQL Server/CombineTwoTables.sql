-- Solution for: https://leetcode.com/problems/big-countries/ on mssql dbms platform

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Person', N'U') IS NULL BEGIN
	CREATE TABLE Person (personId int, firstName varchar(255), lastName varchar(255));
END

IF OBJECT_ID(N'dbo.Address', N'U') IS NULL BEGIN
	CREATE TABLE Address (addressId int, personId int, city varchar(255), state varchar(255));
END

TRUNCATE TABLE Person;

INSERT INTO Person (personId, lastName, firstName) VALUES (1, 'Wang', 'Allen');
INSERT INTO Person (personId, lastName, firstName) VALUES (2, 'Alice', 'Bob');

TRUNCATE TABLE Address;
INSERT INTO Address (addressId, personId, city, state) VALUES (1, 2, 'New York City', 'New York');
INSERT INTO Address (addressId, personId, city, state) VALUES (2, 3, 'Leetcode', 'California');

-- The actual query / solution

