CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
id INT NOT NULL AUTO_INCREMENT,
burgername VARCHAR(45) NULL,
devoured BOOLEAN DEFAULT FALSE,
date TIMESTAMP,
PRIMARY KEY(id)
)