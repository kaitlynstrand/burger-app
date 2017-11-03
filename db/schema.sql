CREATE DATABASE IF NOT EXISTS shoppinglist_db;
USE shoppinglist_db;

DROP TABLE IF EXISTS ingredients;

CREATE TABLE ingredients (
ingredient_id INTEGER(20) AUTO_INCREMENT NOT NULL,
ingredient_name VARCHAR(25) NOT NULL,
acquired BOOLEAN DEFAULT false,
PRIMARY KEY (id) 
);