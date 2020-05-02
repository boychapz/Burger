DROP DATABASE IF EXISTS burger_db;
-- Creates the "blogger" database --
CREATE DATABASE burger_db;
Use burger_db;
Create table burgers (
  id int not null auto_increment,
  burger_name varchar(100) not null,
  devoured BOOLEAN DEFAULT False,
  PRIMARY KEY(id)
);