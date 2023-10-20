-- Solution for: https://leetcode.com/problems/patients-with-a-condition/ on mssql dbms platform

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Patients', N'U') IS NULL BEGIN
	CREATE TABLE Patients (patient_id INT, patient_name VARCHAR(30), conditions VARCHAR(100));
END

TRUNCATE TABLE Patients;

INSERT INTO Patients (patient_id, patient_name, conditions) VALUES (1, 'Daniel', 'YFEV COUGH')
INSERT INTO Patients (patient_id, patient_name, conditions) VALUES (2, 'Alice', '')
INSERT INTO Patients (patient_id, patient_name, conditions) VALUES (3, 'Bob', 'DIAB100 MYOP')
INSERT INTO Patients (patient_id, patient_name, conditions) VALUES (4, 'George', 'ACNE DIAB100')
INSERT INTO Patients (patient_id, patient_name, conditions) VALUES (5, 'Alain', 'DIAB201')


-- The actual query / solution
	SELECT	patient_id,
			patient_name,
			conditions
	  FROM	Patients p
	 WHERE	(p.conditions LIKE '%DIAB1')