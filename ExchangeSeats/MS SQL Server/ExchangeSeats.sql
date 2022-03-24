USE LeetCodeDB
GO
-- Create the table first
IF OBJECT_ID(N'dbo.Seat', N'U') IS NULL BEGIN
	CREATE TABLE Seat (id INT, student VARCHAR(255))
END
GO

-- Empty out the table
TRUNCATE TABLE Seat
GO

-- Insert rows into the table needed for the leetcode problem
INSERT INTO Seat (id, student) VALUES ('1', 'Abbot')
INSERT INTO Seat (id, student) VALUES ('2', 'Doris')
INSERT INTO Seat (id, student) VALUES ('3', 'Emerson')
INSERT INTO Seat (id, student) VALUES ('4', 'Green')
INSERT INTO Seat (id, student) VALUES ('5', 'Jeames')

-- Solution for: https://leetcode.com/problems/exchange-seats/


SELECT
	CASE
		WHEN seat.id % 2 <> 0 AND seat.id = (SELECT COUNT(*) FROM seat) THEN seat.id
		WHEN seat.id % 2 = 0 THEN seat.id - 1
		ELSE
			seat.id + 1
	END as id,
	student 
FROM seat
ORDER BY id
;
