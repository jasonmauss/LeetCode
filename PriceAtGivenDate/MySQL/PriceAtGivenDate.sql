-- Solution for: https://leetcode.com/problems/product-price-at-a-given-date
USE leetcodedb;

CREATE TABLE IF NOT EXISTS Products (product_id INT, new_price INT, change_date DATE);

TRUNCATE TABLE Products;

INSERT INTO Products (product_id, new_price, change_date) VALUES ('1', '20', '2019-08-14');
INSERT INTO Products (product_id, new_price, change_date) VALUES ('2', '50', '2019-08-14');
INSERT INTO Products (product_id, new_price, change_date) VALUES ('1', '30', '2019-08-15');
INSERT INTO Products (product_id, new_price, change_date) VALUES ('1', '35', '2019-08-16');
INSERT INTO Products (product_id, new_price, change_date) VALUES ('2', '65', '2019-08-17');
INSERT INTO Products (product_id, new_price, change_date) VALUES ('3', '20', '2019-08-18');


-- The actual query / solution
