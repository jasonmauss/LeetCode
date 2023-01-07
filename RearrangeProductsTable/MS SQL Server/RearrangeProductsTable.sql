-- Solution for: https://leetcode.com/problems/rearrange-products-table/

USE leetcodedb;
GO

IF OBJECT_ID(N'dbo.Products', N'U') IS NULL BEGIN
	CREATE TABLE Products (product_id INT, store1 INT, store2 INT, store3 INT);
END
GO


TRUNCATE TABLE Products;

INSERT INTO Products (product_id, store1, store2, store3) VALUES (0, 95, 100, 105);
INSERT INTO Products (product_id, store1, store2, store3) VALUES (1, 70, 0, 80);


