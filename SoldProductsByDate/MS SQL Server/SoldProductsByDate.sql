-- Solution for: https://leetcode.com/problems/group-sold-products-by-the-date/

USE leetcodedb;
GO

IF OBJECT_ID(N'dbo.Activities', N'U') IS NULL BEGIN
	CREATE TABLE Activities (sell_date DATE, product VARCHAR(20));
END
GO



TRUNCATE TABLE Activities;

INSERT INTO Activities (sell_date, product) VALUES ('2020-05-30', 'Headphone')
INSERT INTO Activities (sell_date, product) VALUES ('2020-06-01', 'Pencil')
INSERT INTO Activities (sell_date, product) VALUES ('2020-06-02', 'Mask')
INSERT INTO Activities (sell_date, product) VALUES ('2020-05-30', 'Basketball')
INSERT INTO Activities (sell_date, product) VALUES ('2020-06-01', 'Bible')
INSERT INTO Activities (sell_date, product) VALUES ('2020-06-02', 'Mask')
INSERT INTO Activities (sell_date, product) VALUES ('2020-05-30', 'T-Shirt')


-- SQL Solution:
	SELECT	a.sell_date,
			COUNT(a.product) AS num_sold,
			STRING_AGG(product, ',') WITHIN GROUP (ORDER BY a.product) AS products
	  FROM (SELECT DISTINCT * FROM Activities) AS a
  GROUP BY	a.sell_date
  ORDER BY	a.sell_date

	
