-- Solution for: https://leetcode.com/problems/recyclable-and-low-fat-products/

CREATE TABLE IF NOT EXISTS Products (product_id int, low_fats char(1), recyclable char(1))
TRUNCATE TABLE Products
INSERT INTO Products (product_id, low_fats, recyclable) VALUES ('0', 'Y', 'N')
INSERT INTO Products (product_id, low_fats, recyclable) VALUES ('1', 'Y', 'Y')
INSERT INTO Products (product_id, low_fats, recyclable) VALUES ('2', 'N', 'Y')
INSERT INTO Products (product_id, low_fats, recyclable) VALUES ('3', 'Y', 'Y')
INSERT INTO Products (product_id, low_fats, recyclable) VALUES ('4', 'N', 'N')

SELECT  product_id
  FROM  Products
 WHERE  low_fats = 'Y' AND recyclable = 'Y'