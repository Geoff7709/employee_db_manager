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

INSERT INTO department (dep_name) VALUES ('Executive');
INSERT INTO department (dep_name) VALUES ('Engineering');
INSERT INTO department (dep_name) VALUES ('Accounting');
INSERT INTO department (dep_name) VALUES ('Advertising');
INSERT INTO department (dep_name) VALUES ('Legal');
INSERT INTO department (dep_name) VALUES ('Human Resources');

INSERT INTO emp_role (title, salary, department_id) VALUES ('CEO', 500000, 1);
INSERT INTO emp_role (title, salary, department_id) VALUES '(VP_Logistics', 300000, 1);
INSERT INTO emp_role (title, salary, department_id) VALUES ('CFO', 300000, 1);
INSERT INTO emp_role (title, salary, department_id) VALUES ('VP_Human_Resources', 300000, 1);
INSERT INTO emp_role (title, salary, department_id) VALUES ('Project_Manager', 130000, 2);
INSERT INTO emp_role (title, salary, department_id) VALUES ('Engineer', 75000, 2);
INSERT INTO emp_role (title, salary, department_id) VALUES '(Accountant', 100000, 3);
INSERT INTO emp_role (title, salary, department_id) VALUES ('Advertising_Coordinator', 130000, 4);
INSERT INTO emp_role (title, salary, department_id) VALUES ('Media_Specialist', 75000, 4);
INSERT INTO emp_role (title, salary, department_id) VALUES ('Corporate_Council', 130000, 5);
INSERT INTO emp_role (title, salary, department_id) VALUES ('Clerk', 75000, 5);
INSERT INTO emp_role (title, salary, department_id) VALUES ('HR_Representative', 100000, 6);
INSERT INTO emp_role (title, salary, department_id) VALUES ('Tech_Intern', 35000, 2);
INSERT INTO emp_role (title, salary, department_id) VALUES ('Accounting_Intern', 35000, 3);
INSERT INTO emp_role (title, salary, department_id) VALUES ('Communications_Intern', 35000, 4);
INSERT INTO emp_role (title, salary, department_id) VALUES ('Legal_Intern', 35000, 5);
INSERT INTO emp_role (title, salary, department_id) VALUES ('HR_Intern', 35000, 6);

INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Geoffrey', 'Zimmerman', 1, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Lenna', 'Rollinson', 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Elena', 'Duncan', 3, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Donovan', 'Jesus', 4, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Edwardo', 'Knickerbocker', 5, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Coralie', 'England', 6, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Dinorah', 'Cortina', 6, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Sumiko', 'Rathaman', 6, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Abel', 'Cruzan', 13, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Karima', 'Waters', 13, 5);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Roxanna', 'Villacana', 7, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Fletcher', 'Wildman', 7, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Wally', 'Esquer', 7, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Loyce', 'Pompa', 14, 11);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Karren', 'Pennock', 14, 11);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Florence', 'Gutierrez', 8, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jennie', 'Wimbish', 9, 16);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jefferson',' Bushman', 9, 16);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Marleen', 'Sheets', 9, 16);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Wes', 'Scheu', 15, 16);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Demetria',' Osby', 15, 16);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Lonnie', 'Kittle', 10, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Giovanni', 'Hazard', 11, 22);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Jenee', 'Haladay', 10, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Bonnie', 'Eichner', 11, 24);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('William', 'Lau', 16, 22);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Genaya', 'Simms', 12, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Bernard', 'Wirth', 17, 27);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Lorilee', 'Stephens', 17, 27);
INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('Chad',' Rumph', 17, 27);







