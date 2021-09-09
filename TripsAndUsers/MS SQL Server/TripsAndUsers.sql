-- Solution for: https://leetcode.com/problems/trips-and-users/ on mssql dbms platform

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Trips', N'U') IS NULL BEGIN
	CREATE TABLE Trips (Id INT, Client_Id INT, Driver_Id INT, City_Id INT, [Status] VARCHAR(50), Request_at VARCHAR(50))
END

IF OBJECT_ID(N'dbo.Users', N'U') IS NULL BEGIN
  CREATE TABLE Users (Users_Id INT, Banned VARCHAR(50), [Role] VARCHAR(50))
END

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

-- The actual query / solution
WITH total_number_of_requests AS (
 
     SELECT request_at, COUNT(Id) AS 'Requests'
     FROM(
        SELECT DISTINCT Id,Request_at
        FROM        Trips  AS A
        INNER JOIN  Users  AS B ON A.Client_Id = B.Users_Id
        INNER JOIN  Users  AS C ON A.Driver_Id = C.Users_Id 
        WHERE B.Banned = 'No' AND C.Banned = 'No'
        AND   A.Request_at BETWEEN '2013-10-01' AND '2013-10-03'
    )Z
    GROUP BY Request_at


), total_number_of_cancels AS (

     SELECT  request_at, COUNT(Cancels) AS 'Cancels'
     FROM(
            SELECT  request_at,Id AS 'Cancels'
            FROM        Trips   AS A 
            INNER JOIN  Users   AS B ON A.Client_Id = B.Users_Id 
            INNER JOIN  Users   AS C ON A.Driver_Id = C.Users_Id
            WHERE B.Banned = 'No' AND C.Banned = 'No'
            AND   A.Request_at BETWEEN '2013-10-01' AND '2013-10-03'
            AND   A.Status IN ('cancelled_by_driver','cancelled_by_client')
    )Z
    GROUP BY request_at
)



SELECT  A.request_at AS Day, 
        ROUND(CAST(ISNULL(B.Cancels,0.0) AS FLOAT)/A.Requests,2) AS 'Cancellation Rate'
FROM      total_number_of_requests AS A 
LEFT JOIN total_number_of_cancels  AS B ON A.request_at=B.request_at