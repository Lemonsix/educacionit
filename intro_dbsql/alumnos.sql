-- clase 3 creacion de tablas
USE cursomysql;

CREATE TABLE IF NOT EXISTS alumnos(
id_alumnos INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
nombre VARCHAR(30) NOT NULL,
apellido VARCHAR(30),
dni INT UNSIGNED UNIQUE,
fecha_reg DATETIME DEFAULT CURRENT_TIMESTAMP
);
-- muestra las tablas dentro de la db
SHOW TABLES;
-- muestra la estructura de una tabla
DESCRIBE alumnos;

CREATE TABLE IF NOT EXISTS facturas(
tipo_facturas ENUM('A','B','C') DEFAULT 'B',
num_factura INT(8) UNSIGNED ZEROFILL,
monto DOUBLE NOT NULL,
fecha_reg DATETIME DEFAULT CURRENT_TIMESTAMP,
id_alumnos INT UNSIGNED,
PRIMARY KEY (tipo_facturas,num_factura)
);

DESC facturas;

-- Modificar la estructura de una tabla
ALTER TABLE alumnos ADD COLUMN fecha_act DATETIME DEFAULT CURRENT_TIMESTAMP;
DESC TABLE alumnos;
ALTER TABLE alumnos ADD COLUMN cuit VARCHAR(10) AFTER dni;

INSERT INTO alumnos VALUES(NULL,'Maria',NULL,'Rodriguez');
