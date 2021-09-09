-- Solution for: https://leetcode.com/problems/trips-and-users/ on Oracle dbms platform

DECLARE
nCount NUMBER;
v_sql LONG;

BEGIN
  SELECT COUNT(*) INTO nCount FROM dba_tables WHERE table_name = 'Trips';
  IF(nCount <= 0) THEN
    v_sql:='
    CREATE TABLE Trips (Id NUMBER(2), Client_Id NUMBER(2), Driver_Id NUMBER(2), City_Id NUMBER(2), [Status] VARCHAR(50), Request_at VARCHAR(50))';
    EXECUTE IMMEDIATE v_sql;
  END IF;
END;

BEGIN
  SELECT COUNT(*) INTO nCount FROM dba_tables WHERE table_name = 'Users';
  IF(nCount <= 0) THEN
    v_sql:='
    CREATE TABLE Users (Users_Id NUMBER(2), Banned VARCHAR(50), [Role] VARCHAR(50))';
    EXECUTE IMMEDIATE v_sql;
  END IF;
END;

TRUNCATE TABLE Trips
INSERT INTO Trips (Id, Client_Id, Driver_Id, City_Id, Status, Request_at) VALUES ('1', '1', '10', '1', 'completed', '2013-10-01')
INSERT INTO Trips (Id, Client_Id, Driver_Id, City_Id, Status, Request_at) VALUES ('2', '2', '11', '1', 'cancelled_by_driver', '2013-10-01')
INSERT INTO Trips (Id, Client_Id, Driver_Id, City_Id, Status, Request_at) VALUES ('3', '3', '12', '6', 'completed', '2013-10-01')
INSERT INTO Trips (Id, Client_Id, Driver_Id, City_Id, Status, Request_at) VALUES ('4', '4', '13', '6', 'cancelled_by_client', '2013-10-01')
INSERT INTO Trips (Id, Client_Id, Driver_Id, City_Id, Status, Request_at) VALUES ('5', '1', '10', '1', 'completed', '2013-10-02')
INSERT INTO Trips (Id, Client_Id, Driver_Id, City_Id, Status, Request_at) VALUES ('6', '2', '11', '6', 'completed', '2013-10-02')
INSERT INTO Trips (Id, Client_Id, Driver_Id, City_Id, Status, Request_at) VALUES ('7', '3', '12', '6', 'completed', '2013-10-02')
INSERT INTO Trips (Id, Client_Id, Driver_Id, City_Id, Status, Request_at) VALUES ('8', '2', '12', '12', 'completed', '2013-10-03')
INSERT INTO Trips (Id, Client_Id, Driver_Id, City_Id, Status, Request_at) VALUES ('9', '3', '10', '12', 'completed', '2013-10-03')
INSERT INTO Trips (Id, Client_Id, Driver_Id, City_Id, Status, Request_at) VALUES ('10', '4', '13', '12', 'cancelled_by_driver', '2013-10-03')

TRUNCATE TABLE Users
INSERT INTO Users (Users_Id, Banned, Role) VALUES ('1', 'No', 'client')
INSERT INTO Users (Users_Id, Banned, Role) VALUES ('2', 'Yes', 'client')
INSERT INTO Users (Users_Id, Banned, Role) VALUES ('3', 'No', 'client')
INSERT INTO Users (Users_Id, Banned, Role) VALUES ('4', 'No', 'client')
INSERT INTO Users (Users_Id, Banned, Role) VALUES ('10', 'No', 'driver')
INSERT INTO Users (Users_Id, Banned, Role) VALUES ('11', 'No', 'driver')
INSERT INTO Users (Users_Id, Banned, Role) VALUES ('12', 'No', 'driver')
INSERT INTO Users (Users_Id, Banned, Role) VALUES ('13', 'No', 'driver')

-- the actual query / solution
SELECT  Request_at AS "Day",
        ROUND(SUM(CASE WHEN status='cancelled_by_driver' or status='cancelled_by_client' THEN 1 ELSE 0 end) / COUNT(*),2) AS "Cancellation Rate" 
FROM    Trips 
WHERE   Request_at BETWEEN '2013-10-01' AND '2013-10-03'
AND     Client_id NOT IN (SELECT Users_Id FROM Users WHERE Banned='Yes')
AND     Driver_Id NOT IN (SELECT Users_Id FROM Users WHERE Banned='Yes')
GROUP BY Request_at 
ORDER BY Request_at;