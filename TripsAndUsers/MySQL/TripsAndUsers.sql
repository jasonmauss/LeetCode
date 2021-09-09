-- Solution for: https://leetcode.com/problems/trips-and-users/ on MySQL dbms platform

CREATE TABLE IF NOT EXISTS Trips (Id INT, Client_Id INT, Driver_Id INT, City_Id INT, Status ENUM('completed', 'cancelled_by_driver', 'cancelled_by_client'), Request_at VARCHAR(50))
CREATE TABLE IF NOT EXISTS Users (Users_Id INT, Banned VARCHAR(50), ROLE ENUM('client', 'driver', 'partner'))

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
SELECT 
    Request_at AS Day,
    ROUND(AVG(CASE WHEN Status != 'completed' THEN 1 ElSE 0 END), 2) AS 'Cancellation Rate'
FROM 
    Trips
WHERE
    Client_Id NOT IN (SELECT Users_ID FROM Users WHERE Banned = "Yes")
    AND
    Driver_Id NOT IN (SELECT Users_ID FROM Users WHERE Banned = "Yes")
    AND
    Request_at BETWEEN '2013-10-01' AND '2013-10-03'
GROUP BY
    Request_at;