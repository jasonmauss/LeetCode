-- Solution for: https://leetcode.com/problems/investments-in-2016
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Insurance (pid INT, tiv_2015 FLOAT, tiv_2016 FLOAT, lat FLOAT, lon FLOAT);

TRUNCATE TABLE Insurance;

INSERT INTO Insurance (pid, tiv_2015, tiv_2016, lat, lon) VALUES ('1', '10', '5', '10', '10');
INSERT INTO Insurance (pid, tiv_2015, tiv_2016, lat, lon) VALUES ('2', '20', '20', '20', '20');
INSERT INTO Insurance (pid, tiv_2015, tiv_2016, lat, lon) VALUES ('3', '10', '30', '20', '20');
INSERT INTO Insurance (pid, tiv_2015, tiv_2016, lat, lon) VALUES ('4', '10', '40', '40', '40');

-- The actual query / solution
