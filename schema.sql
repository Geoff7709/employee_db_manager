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

INSERT INTO department (dep_name) VALUES (Executive);
INSERT INTO department (dep_name) VALUES (Engineering);
INSERT INTO department (dep_name) VALUES (Accounting);
INSERT INTO department (dep_name) VALUES (Advertising);
INSERT INTO department (dep_name) VALUES (Legal);
INSERT INTO department (dep_name) VALUES (Human Resources);

INSERT INTO emp_role (title, salary, department_id) VALUES (CEO, 500000, 1);
INSERT INTO emp_role (title, salary, department_id) VALUES (VP Logistics, 300000, 1);
INSERT INTO emp_role (title, salary, department_id) VALUES (VP Human Resources, 300000, 1);
INSERT INTO emp_role (title, salary, department_id) VALUES (CFO, 300000, 1);
INSERT INTO emp_role (title, salary, department_id) VALUES (Project Manager, 130000, 2);
INSERT INTO emp_role (title, salary, department_id) VALUES (Engineer, 75000, 2);
INSERT INTO emp_role (title, salary, department_id) VALUES (Accountant, 100000, 3);
INSERT INTO emp_role (title, salary, department_id) VALUES (Advertising Coordinator, 130000, 4);
INSERT INTO emp_role (title, salary, department_id) VALUES (Media Specialist, 75000, 4);
INSERT INTO emp_role (title, salary, department_id) VALUES (Corporate Council, 130000, 5);
INSERT INTO emp_role (title, salary, department_id) VALUES (Clerk, 75000, 5);
INSERT INTO emp_role (title, salary, department_id) VALUES (HR Representative, 100000, 6);
INSERT INTO emp_role (title, salary, department_id) VALUES (Tech Intern, 35000, 2);
INSERT INTO emp_role (title, salary, department_id) VALUES (Accounting Intern, 35000, 3);
INSERT INTO emp_role (title, salary, department_id) VALUES (Communications Intern, 35000, 4);
INSERT INTO emp_role (title, salary, department_id) VALUES (Legal Intern, 35000, 5);
INSERT INTO emp_role (title, salary, department_id) VALUES (HR Intern, 35000, 6);







