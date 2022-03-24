USE leetcodedb;

-- Create the table first
CREATE TABLE IF NOT EXISTS Seat (id INT, student VARCHAR(255));

-- Empty out the table
TRUNCATE TABLE Seat;

-- Inser the data needed for this leetcode problem
INSERT INTO Seat (id, student) values ('1', 'Abbot');
INSERT INTO Seat (id, student) values ('2', 'Doris');
INSERT INTO Seat (id, student) values ('3', 'Emerson');
INSERT INTO Seat (id, student) values ('4', 'Green');
INSERT INTO Seat (id, student) values ('5', 'Jeames');


-- Solution for: https://leetcode.com/problems/exchange-seats/
SELECT CASE WHEN MOD(id,2)=1 AND id<(SELECT COUNT(*) FROM seat) THEN id+1
            WHEN MOD(id,2)=0 THEN id-1 ELSE id END AS id,student
  FROM seat ORDER BY id;