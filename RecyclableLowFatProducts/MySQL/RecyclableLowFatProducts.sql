-- Solution for: https://leetcode.com/problems/recyclable-and-low-fat-products/

CREATE TABLE IF NOT EXISTS Products (product_id int, low_fats ENUM('Y', 'N'), recyclable ENUM('Y','N'))
TRUNCATE TABLE Products
INSERT INTO Products (product_id, low_fats, recyclable) VALUES ('0', 'Y', 'N')
INSERT INTO Products (product_id, low_fats, recyclable) VALUES ('1', 'Y', 'Y')
INSERT INTO Products (product_id, low_fats, recyclable) VALUES ('2', 'N', 'Y')
INSERT INTO Products (product_id, low_fats, recyclable) VALUES ('3', 'Y', 'Y')
INSERT INTO Products (product_id, low_fats, recyclable) VALUES ('4', 'N', 'N')

-- The actual query / solution
SELECT  p.product_id
  FROM  Products AS p
 WHERE  (p.low_fats = 'Y') AND (p.recyclable = 'Y')