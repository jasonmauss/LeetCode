-- Solution for: https://leetcode.com/problems/number-of-unique-subjects-taught-by-each-teacher/

USE leetcodedb;
GO

IF OBJECT_ID(N'dbo.Teacher', N'U') IS NULL BEGIN
	CREATE TABLE Teacher (teacher_id INT, subject_id INT, dept_id INT);
END
GO


TRUNCATE TABLE Teacher;

INSERT INTO Teacher (teacher_id, subject_id, dept_id) VALUES (1, 2, 3)
INSERT INTO Teacher (teacher_id, subject_id, dept_id) VALUES (1, 2, 4)
INSERT INTO Teacher (teacher_id, subject_id, dept_id) VALUES (1, 3, 3)
INSERT INTO Teacher (teacher_id, subject_id, dept_id) VALUES (2, 1, 1)
INSERT INTO Teacher (teacher_id, subject_id, dept_id) VALUES (2, 2, 1)
INSERT INTO Teacher (teacher_id, subject_id, dept_id) VALUES (2, 3, 1)
INSERT INTO Teacher (teacher_id, subject_id, dept_id) VALUES (2, 4, 1)

-- SQL Solution:


