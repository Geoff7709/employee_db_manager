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
        connection.query(`SELECT * FROM department`, (err, res) => {
            if (err) console.log(err);
            res.forEach(element => {
                departments.push(element.dep_name);
            });
        });
        return departments;
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
                message: 'What is the name of the new role you would like to add?'
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
    console.log('addEmployee');
    anotherAction();
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