-- clase 2 curso mysql
CREATE DATABASE IF NOT EXISTS cursomysql;
SHOW DATABASES;

CREATE USER 'user1' @'localhost' IDENTIFIED BY 'Pw1234!'; -- solo se va a conectar desde localhost con Pw1234!

GRANT ALL PRIVILEGES ON cursomysql.* TO 'user1'@'localhost';

USE cursomysql;
SHOW TABLES;