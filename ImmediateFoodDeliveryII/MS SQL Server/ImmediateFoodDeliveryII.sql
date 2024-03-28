-- Solution for: https://leetcode.com/problems/immediate-food-delivery-ii on mssql dbms platform

USE leetcodedb;

-- Create the table and insert the data
IF OBJECT_ID(N'dbo.Delivery', N'U') IS NULL BEGIN
	CREATE TABLE Delivery (delivery_id INT, customer_id INT, order_date DATE, customer_pref_delivery_date DATE);
END

TRUNCATE TABLE Delivery;

INSERT INTO Delivery (delivery_id, customer_id, order_date, customer_pref_delivery_date) VALUES (1, 1, '2019-08-01', '2019-08-02')
INSERT INTO Delivery (delivery_id, customer_id, order_date, customer_pref_delivery_date) VALUES (2, 2, '2019-08-02', '2019-08-02')
INSERT INTO Delivery (delivery_id, customer_id, order_date, customer_pref_delivery_date) VALUES (3, 1, '2019-08-11', '2019-08-12')
INSERT INTO Delivery (delivery_id, customer_id, order_date, customer_pref_delivery_date) VALUES (4, 3, '2019-08-24', '2019-08-24')
INSERT INTO Delivery (delivery_id, customer_id, order_date, customer_pref_delivery_date) VALUES (5, 3, '2019-08-21', '2019-08-22')
INSERT INTO Delivery (delivery_id, customer_id, order_date, customer_pref_delivery_date) VALUES (6, 2, '2019-08-11', '2019-08-13')
INSERT INTO Delivery (delivery_id, customer_id, order_date, customer_pref_delivery_date) VALUES (7, 4, '2019-08-09', '2019-08-09')


-- The actual query / solution
	SELECT	ROUND(
					100.0 * SUM(CASE WHEN order_date = customer_pref_delivery_date THEN 1 ELSE 0 END)
					/
					COUNT(DISTINCT customer_id), 2
				 ) AS immediate_percentage
	  FROM	Delivery d1
	 WHERE	EXISTS (SELECT 1
					  FROM Delivery d2
					 WHERE d2.customer_id = d1.customer_id
				  GROUP BY d2.customer_id
				HAVING MIN(d2.order_date) = d1.order_date);

