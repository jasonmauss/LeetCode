-- Solution for: https://leetcode.com/problems/students-and-examinations/ on mssql dbms platform

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Students', N'U') IS NULL BEGIN
	CREATE TABLE Students (student_id int, student_name varchar(20));
END

TRUNCATE TABLE Students;

IF OBJECT_ID(N'dbo.Subjects ', N'U') IS NULL BEGIN
	CREATE TABLE Subjects  (subject_name varchar(20));
END

TRUNCATE TABLE Subjects ;

IF OBJECT_ID(N'dbo.Examinations ', N'U') IS NULL BEGIN
	CREATE TABLE Examinations  (student_id int, subject_name varchar(20));
END

TRUNCATE TABLE Examinations ;


INSERT INTO Students (student_id, student_name) VALUES (1, 'Alice')
INSERT INTO Students (student_id, student_name) VALUES (2, 'Bob')
INSERT INTO Students (student_id, student_name) VALUES (13, 'John')
INSERT INTO Students (student_id, student_name) VALUES (6, 'Alex')

INSERT INTO Subjects (subject_name) VALUES ('Math')
INSERT INTO Subjects (subject_name) VALUES ('Physics')
INSERT INTO Subjects (subject_name) VALUES ('Programming')

INSERT INTO Examinations (student_id, subject_name) VALUES (1, 'Math')
INSERT INTO Examinations (student_id, subject_name) VALUES (1, 'Physics')
INSERT INTO Examinations (student_id, subject_name) VALUES (1, 'Programming')
INSERT INTO Examinations (student_id, subject_name) VALUES (2, 'Programming')
INSERT INTO Examinations (student_id, subject_name) VALUES (1, 'Physics')
INSERT INTO Examinations (student_id, subject_name) VALUES (1, 'Math')
INSERT INTO Examinations (student_id, subject_name) VALUES (13, 'Math')
INSERT INTO Examinations (student_id, subject_name) VALUES (13, 'Programming')
INSERT INTO Examinations (student_id, subject_name) VALUES (13, 'Physics')
INSERT INTO Examinations (student_id, subject_name) VALUES (2, 'Math')
INSERT INTO Examinations (student_id, subject_name) VALUES (1, 'Math')



-- The actual query / solution
	SELECT	st.student_id,
			st.student_name,
			su.subject_name,
			COUNT(ex.student_id) AS attended_exams
	  FROM	Students st
CROSS JOIN	Subjects su
 LEFT JOIN	Examinations ex ON ex.student_id = st.student_id AND su.subject_name = ex.subject_name
  GROUP BY	st.student_id,
			st.student_name,
			su.subject_name
  ORDER BY	st.student_id,
			su.subject_name