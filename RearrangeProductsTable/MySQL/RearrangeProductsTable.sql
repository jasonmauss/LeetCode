-- Solution for: https://leetcode.com/problems/rearrange-products-table/
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Products (product_id INT, store1 INT, store2 INT, store3 INT);

TRUNCATE TABLE Products;

INSERT INTO Products (product_id, store1, store2, store3) VALUES ('0', '95', '100', '105');
INSERT INTO Products (product_id, store1, store2, store3) VALUES ('1', '70', 'None', '80');


