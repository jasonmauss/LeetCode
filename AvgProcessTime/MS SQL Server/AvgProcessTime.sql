-- Solution for: https://leetcode.com/problems/average-time-of-process-per-machine/ on mssql dbms platform

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Activity', N'U') IS NULL BEGIN
	CREATE TABLE Activity (machine_id INT, process_id INT, activity_type VARCHAR(10), timestamp FLOAT);
END

TRUNCATE TABLE Activity;

INSERT INTO Activity (machine_id, process_id, activity_type, timestamp) values (0, 0, 'start', 0.712)
INSERT INTO Activity (machine_id, process_id, activity_type, timestamp) values (0, 0, 'end', 1.52)
INSERT INTO Activity (machine_id, process_id, activity_type, timestamp) values (0, 1, 'start', 3.14)
INSERT INTO Activity (machine_id, process_id, activity_type, timestamp) values (0, 1, 'end', 4.12)
INSERT INTO Activity (machine_id, process_id, activity_type, timestamp) values (1, 0, 'start', 0.55)
INSERT INTO Activity (machine_id, process_id, activity_type, timestamp) values (1, 0, 'end', 1.55)
INSERT INTO Activity (machine_id, process_id, activity_type, timestamp) values (1, 1, 'start', 0.43)
INSERT INTO Activity (machine_id, process_id, activity_type, timestamp) values (1, 1, 'end', 1.42)
INSERT INTO Activity (machine_id, process_id, activity_type, timestamp) values (2, 0, 'start', 4.1)
INSERT INTO Activity (machine_id, process_id, activity_type, timestamp) values (2, 0, 'end', 4.512)
INSERT INTO Activity (machine_id, process_id, activity_type, timestamp) values (2, 1, 'start', 2.5)
INSERT INTO Activity (machine_id, process_id, activity_type, timestamp) values (2, 1, 'end', 5)


-- The actual query / solution
	