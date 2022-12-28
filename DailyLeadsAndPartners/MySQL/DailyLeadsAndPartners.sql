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

	SELECT	ds.date_id,
			ds.make_name,
			COUNT(DISTINCT ds.lead_id) AS unique_leads,
			COUNT(DISTINCT ds.partner_id) AS unique_partners
	  FROM	DailySales ds
  GROUP BY	ds.date_id,
			ds.make_name
  ORDER BY	ds.make_name DESC,
			ds.date_id DESC