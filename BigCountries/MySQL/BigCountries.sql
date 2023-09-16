-- Solution for: https://leetcode.com/problems/big-countries/ on MySQL dbms platform
USE leetcodedb;

CREATE TABLE IF NOT EXISTS World (name VARCHAR(255), continent VARCHAR(255), area INT, population INT, gdp BIGINT);
TRUNCATE TABLE World;

INSERT INTO World (name, continent, area, population, gdp) values ('Afghanistan', 'Asia', '652230', '25500100', '20343000000');
INSERT INTO World (name, continent, area, population, gdp) values ('Albania', 'Europe', '28748', '2831741', '12960000000');
INSERT INTO World (name, continent, area, population, gdp) values ('Algeria', 'Africa', '2381741', '37100000', '188681000000');
INSERT INTO World (name, continent, area, population, gdp) values ('Andorra', 'Europe', '468', '78115', '3712000000');
INSERT INTO World (name, continent, area, population, gdp) values ('Angola', 'Africa', '1246700', '20609294', '100990000000');

-- The actual query / solution
	SELECT	w.name,
			w.population,
			w.area
	  FROM	World w
	 WHERE	(w.area >= 3000000)
	   OR	(w.population >= 25000000)