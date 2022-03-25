Create table If Not Exists Seat (id int, student varchar(255))
Truncate table Seat
insert into Seat (id, student) values ('1', 'Abbot')
insert into Seat (id, student) values ('2', 'Doris')
insert into Seat (id, student) values ('3', 'Emerson')
insert into Seat (id, student) values ('4', 'Green')
insert into Seat (id, student) values ('5', 'Jeames')


-- Solution for:  https://leetcode.com/problems/exchange-seats/
SELECT * 
FROM   (SELECT s1.id                       AS id, 
               Nvl(s2.student, s1.student) AS student 
        FROM   seat s1 
               LEFT JOIN seat s2 
                      ON s2.id = CASE 
                                   WHEN Mod(s1.id, 2) = 1 THEN s1.id + 1 
                                   WHEN Mod(s1.id, 2) = 0 THEN s1.id - 1 
                                 END) 
ORDER  BY id