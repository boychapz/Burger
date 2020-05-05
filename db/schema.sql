DROP DATABASE IF EXISTS burger_db;
CREATE DATABASE burger_db;
Use burger_db;
Create TABLE burgers (
  id INT NOT NULL auto_increment,
  burger_name VARCHAR(100) not null,
  devoured BOOLEAN DEFAULT False,
  PRIMARY KEY(id)
);