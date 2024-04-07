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
	SELECT	DISTINCT p.product_id,
			IFNULL(sq.price, 10) AS price
	  FROM	Products p
 LEFT JOIN	(	SELECT	RANK() OVER(PARTITION BY p.product_id ORDER BY p.change_date DESC) AS 'rank', 
						p.product_id,
						p.new_price AS price
				  FROM	Products p
				 WHERE	(p.change_date <= '2019-08-16')
			) AS sq ON sq.product_id = p.product_id AND sq.rank = 1