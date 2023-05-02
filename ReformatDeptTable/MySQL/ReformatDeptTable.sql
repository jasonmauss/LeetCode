-- Solution for: https://leetcode.com/problems/reformat-department-table/
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Department (id INT, revenue INT, month VARCHAR(5));

TRUNCATE TABLE Department;

INSERT INTO Department (id, revenue, month) VALUES ('1', '8000', 'Jan');
INSERT INTO Department (id, revenue, month) VALUES ('2', '9000', 'Jan');
INSERT INTO Department (id, revenue, month) VALUES ('3', '10000', 'Feb');
INSERT INTO Department (id, revenue, month) VALUES ('1', '7000', 'Feb');
INSERT INTO Department (id, revenue, month) VALUES ('1', '6000', 'Mar');

-- SQL Solution:
	