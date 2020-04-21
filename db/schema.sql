DROP DATABASE IF EXISTS Burger_db;
-- Creates the "blogger" database --
CREATE DATABASE Burger_db;
Use Burger_db;
Create table burgers (
  id int not null auto_increment,
  burger_name varchar(100) not null,
  devoured BOOLEAN DEFAULT False,
  PRIMARY KEY(id)
);