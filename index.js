const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');
const Department = require('./lib/Department.js') 
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'someCorp_db'
});

const actionChoices = [
    'View Departments', 'View Roles', 'View Employees', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee Role', 'Exit'
];



const action = [
    {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: actionChoices
    }
];

// `SELECT GROUP_CONCAT(dep_name) AS returned_values FROM ( SELECT dep_name FROM department) as department`, (err, res) => {
//     if (err) console.log(err);
//     res[0].returned_values.split(',').forEach((item) => departmentChoices.push(item) )
// }

connection.connect((err) => {
    if (err) throw err;
    console.log(`Connected to mysql on thread ${connection.threadId}`)
    init()
})
function findDepartments() {
    let departments = []
        connection.query(`SELECT dep_name FROM department`, (err, res) => {
            if (err) console.log(err);
            res.forEach(element => {
                departments.push(element);
            });
        });
        return departments;
}

function findRoles() {
    let roles = []
        connection.query(`SELECT title FROM emp_role`, (err, res) => {
            if (err) console.log(err);
            // console.log(res)
            res.forEach(element => {
                roles.push(element.title);
            });
        });
        return roles;
}

function findManagers() {
    // let managers = []
        connection.query(`SELECT  id, first_name, last_name FROM employee WHERE manager_id = 0`, (err, res) => {
            if (err) console.log(err);
            let managerName
            res.forEach(element => {
                managerName = `${element.id} ${element.first_name} ${element.last_name}`
                managers.push(managerName);
            });
        });
        return managers;
}
function findEmployees() {
    let employees = []
        connection.query(`SELECT  id, first_name, last_name FROM employee WHERE manager_id = 0`, (err, res) => {
            if (err) console.log(err);
            let managerName
            res.forEach(element => {
                managerName = `${element.id} ${element.first_name} ${element.last_name}`
                managers.push(managerName);
            });
        });
        return managers;
}
const init = () => {
    inquirer.prompt(action)
        .then(answer => {
            switch(answer.action) {
                case actionChoices[0]:
                    viewDepartments();
                    break;

                case actionChoices[1]:
                    viewRoles();
                    break;

                case actionChoices[2]:
                    viewEmployees();
                    break;

                case actionChoices[3]:
                    addDepartment();
                    break;

                case actionChoices[4]:
                    addRole();
                    break;

                case actionChoices[5]:
                    addEmployee();
                    break;

                case actionChoices[6]:
                    updateEmployee();
                    break;

                case actionChoices[7]:
                    exit();
                    break;   
            }
        })
}


const viewDepartments = () => {
    connection.query('SELECT * FROM department', (err, res) => {
        if (err) console.log(err);
        console.table('Departments', res);
        anotherAction();   
    })
}

const viewRoles = () => {
    connection.query('SELECT * FROM emp_role', (err, res) => {
        if (err) console.log(err);
        console.table('Roles', res);
        anotherAction();
    })
}

const viewEmployees = () => {
    connection.query('SELECT * FROM employee', (err, res) => {
        if (err) console.log(err);
        console.table('Employees', res);
        anotherAction();
    })
}

const addDepartment  =  () => {
    inquirer.prompt(
        [
            {
                type: 'input',
                name: 'emp_department',
                message: 'What is the name of the new department you would like to add?'
            }
        ]
    )
    .then(answer => {
        connection.query(`INSERT INTO department (dep_name) VALUES ('${answer.emp_department}')`, (err, res) => {
            if (err) console.log(err);
            viewDepartments();   
        })
    })
}

const addRole = () => {
    inquirer.prompt(
        [
            {
                type: 'input',
                name: 'title',
                message: 'What is the title of the new role you would like to add?'
            },
            {
                type: 'input',
                name: 'salary',
                message: 'What is the yearly salary of the new role?'
            },
            {
                type: 'list',
                name: 'department',
                message: 'What department is this role part of?',
                choices:  findDepartments() 
                
            }
        ]
    )
    .then(answer => {
        connection.query(`INSERT INTO emp_role (title, salary, department_id) VALUES ('${answer.title}', '${answer.salary}', (SELECT id FROM department WHERE dep_name = '${answer.department}'))`, (err, res) => {
            if (err) console.log(err);
            viewRoles();   
        })
    }) 
}

const addEmployee = () => {
    inquirer.prompt(
        [
            {
                type: 'input',
                name: 'first_name',
                message: 'What is the first name of the employee you would like to add?'
            },
            {
                type: 'input',
                name: 'last_name',
                message: 'What is the last name of the employee you would like to add?'
            },
            {
                type: 'list',
                name: 'role',
                message: 'What is the role of the new employee?',
                choices:  findRoles() 
                
            },
            {
                type: 'list',
                name: 'manager',
                message: 'Who is the manager for the new employee?',
                choices:  findManagers() 
                
            }

        ]
    )
    .then(answer => {
        const managerObject = answer.manager.split(' ')
        const mgrId = parseInt(managerObject[0])
        console.log(mgrId)
        console.log(typeof mgrId)
        connection.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${answer.first_name}', '${answer.last_name}', (SELECT id FROM emp_role WHERE title = '${answer.role}'), ${mgrId})`, (err, res) => {
            if (err) console.log(err);
            viewEmployees();   
        })
    });
}

const updateEmployee = () => {
    console.log('updateEmployee');
    anotherAction();
}

const anotherAction = () => {
    inquirer.prompt(
        [
            {
                type: 'confirm',
                name: 'continue',
                message: 'What would you like to do something else?',  
            }
        ]
        )
        .then(answer => {
            if (answer.continue === true) {
                init()
            }else{
                exit()
            }
        })
}

const exit = () => {
    connection.end();
    process.exit();
}