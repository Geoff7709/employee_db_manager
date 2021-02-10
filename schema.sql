DROP DATABASE IF EXISTS someCorp_db;

CREATE DATABASE someCorp_db;

USE someCorp_db;

CREATE TABLE department (
    id INT AUTO_INCREMENT NOT NULL,
    dep_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE emp_role (
    id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(30) NOT NULL,
    salary FLOAT(10 2) NOT NULL,
    department_id INT,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
    id INT AUTO_INCREMENT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id)
);

