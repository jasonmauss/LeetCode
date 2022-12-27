-- Solution for: https://leetcode.com/problems/daily-leads-and-partners/
USE leetcodedb;

CREATE TABLE IF NOT EXISTS DailySales(date_id DATE, make_name VARCHAR(20), lead_id INT, partner_id INT);

TRUNCATE TABLE DailySales;

INSERT INTO DailySales (date_id, make_name, lead_id, partner_id) VALUES ('2020-12-8', 'toyota', '0', '1');
INSERT INTO DailySales (date_id, make_name, lead_id, partner_id) VALUES ('2020-12-8', 'toyota', '1', '0');
INSERT INTO DailySales (date_id, make_name, lead_id, partner_id) VALUES ('2020-12-8', 'toyota', '1', '2');
INSERT INTO DailySales (date_id, make_name, lead_id, partner_id) VALUES ('2020-12-7', 'toyota', '0', '2');
INSERT INTO DailySales (date_id, make_name, lead_id, partner_id) VALUES ('2020-12-7', 'toyota', '0', '1');
INSERT INTO DailySales (date_id, make_name, lead_id, partner_id) VALUES ('2020-12-8', 'honda', '1', '2');
INSERT INTO DailySales (date_id, make_name, lead_id, partner_id) VALUES ('2020-12-8', 'honda', '2', '1');
INSERT INTO DailySales (date_id, make_name, lead_id, partner_id) VALUES ('2020-12-7', 'honda', '0', '1');
INSERT INTO DailySales (date_id, make_name, lead_id, partner_id) VALUES ('2020-12-7', 'honda', '1', '2');
INSERT INTO DailySales (date_id, make_name, lead_id, partner_id) VALUES ('2020-12-7', 'honda', '2', '1');