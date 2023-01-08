-- Solution for: https://leetcode.com/problems/rearrange-products-table/

USE leetcodedb;
GO

IF OBJECT_ID(N'dbo.Products', N'U') IS NULL BEGIN
	CREATE TABLE Products (product_id INT, store1 INT, store2 INT, store3 INT);
END
GO


TRUNCATE TABLE Products;

INSERT INTO Products (product_id, store1, store2, store3) VALUES (0, 95, 100, 105);
INSERT INTO Products (product_id, store1, store2, store3) VALUES (1, 70, NULL, 80);

-- This could be done with a CTE and also use an UNPIVOT
-- but a simple UNION works just as well for a limited number
-- of columns that we're dealing with.

SELECT 	product_id,
		'store1' AS store,
		store1 AS price
  FROM	Products
 WHERE	(store1 IS NOT NULL)
 
 UNION 	ALL
 
SELECT 	product_id,
		'store2' AS store,
		store2 AS price
  FROM	Products
 WHERE	(store2 IS NOT NULL)
 
 UNION	ALL
 
 SELECT  product_id,
		'store3' AS store,
		store3 AS price
  FROM	Products
 WHERE	(store3 IS NOT NULL)