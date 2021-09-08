-- Solution for: https://leetcode.com/problems/classes-more-than-5-students/ on Oracle dbms platform

DECLARE
nCount NUMBER;
v_sql LONG;

BEGIN
  SELECT COUNT(*) INTO nCount FROM dba_tables WHERE table_name = 'courses';
  IF(nCount <= 0) THEN
    v_sql:='
    create table courses
    (
    student VARCHAR(255),
    class VARCHAR2(255)
    )';
    EXECUTE IMMEDIATE v_sql;

  END IF;
END;

TRUNCATE TABLE Courses

INSERT INTO courses (student, class) VALUES ('A', 'Math')
INSERT INTO courses (student, class) VALUES ('B', 'English')
INSERT INTO courses (student, class) VALUES ('C', 'Math')
INSERT INTO courses (student, class) VALUES ('D', 'Biology')
INSERT INTO courses (student, class) VALUES ('E', 'Math')
INSERT INTO courses (student, class) VALUES ('F', 'Computer')
INSERT INTO courses (student, class) VALUES ('G', 'Math')
INSERT INTO courses (student, class) VALUES ('H', 'Math')
INSERT INTO courses (student, class) VALUES ('I', 'Math')

-- the actual query / solution
SELECT  class
  FROM  Courses
GROUP BY class
HAVING	COUNT(DISTINCT c.student) >= 5 