-- Solution for: https://leetcode.com/problems/combine-two-tables/ on MySQL dbms platform
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Person (personId int, firstName varchar(255), lastName varchar(255));
CREATE TABLE IF NOT EXISTS Address (addressId int, personId int, city varchar(255), state varchar(255));

TRUNCATE TABLE Person;
INSERT INTO Person (personId, lastName, firstName) VALUES ('1', 'Wang', 'Allen');
INSERT INTO Person (personId, lastName, firstName) VALUES ('2', 'Alice', 'Bob');
TRUNCATE TABLE Address;
INSERT INTO Address (addressId, personId, city, state) VALUES ('1', '2', 'New York City', 'New York');
INSERT INTO Address (addressId, personId, city, state) VALUES ('2', '3', 'Leetcode', 'California');

-- The actual query / solution
		SELECT	p.firstName,
			p.lastName,
			a.city,
			a.state
	  FROM	Person	AS p
 LEFT JOIN	Address AS a ON a.personId = p.personId