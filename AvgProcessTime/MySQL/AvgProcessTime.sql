-- Solution for: https://leetcode.com/problems/average-time-of-process-per-machine/ on MySQL dbms platform
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Activity (machine_id INT, process_id INT, activity_type VARCHAR(10), timestamp FLOAT);

TRUNCATE TABLE Activity;

INSERT INTO Activity (machine_id, process_id, activity_type, timestamp) values (0, 0, 'start', 0.712);
INSERT INTO Activity (machine_id, process_id, activity_type, timestamp) values (0, 0, 'end', 1.52);
INSERT INTO Activity (machine_id, process_id, activity_type, timestamp) values (0, 1, 'start', 3.14);
INSERT INTO Activity (machine_id, process_id, activity_type, timestamp) values (0, 1, 'end', 4.12);
INSERT INTO Activity (machine_id, process_id, activity_type, timestamp) values (1, 0, 'start', 0.55);
INSERT INTO Activity (machine_id, process_id, activity_type, timestamp) values (1, 0, 'end', 1.55);
INSERT INTO Activity (machine_id, process_id, activity_type, timestamp) values (1, 1, 'start', 0.43);
INSERT INTO Activity (machine_id, process_id, activity_type, timestamp) values (1, 1, 'end', 1.42);
INSERT INTO Activity (machine_id, process_id, activity_type, timestamp) values (2, 0, 'start', 4.1);
INSERT INTO Activity (machine_id, process_id, activity_type, timestamp) values (2, 0, 'end', 4.512);
INSERT INTO Activity (machine_id, process_id, activity_type, timestamp) values (2, 1, 'start', 2.5);
INSERT INTO Activity (machine_id, process_id, activity_type, timestamp) values (2, 1, 'end', 5);



-- The actual query / solution
	SELECT	started.machine_id,
			ROUND(AVG(ended.timestamp - started.timestamp), 3) AS processing_time
	  FROM	Activity started
	  JOIN	Activity ended   ON started.machine_id = ended.machine_id 
							AND started.process_id = ended.process_id
							AND started.activity_type = 'start' AND ended.activity_type = 'end'
  GROUP BY	started.machine_id
