const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table'); 
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'someCorp_db'
});

const choices = [
    'View Departments', 'View Roles', 'View Employees', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee Role', 'Exit']

const action = [
    {
        type: 'list',
        name: 'action',
        message: 'What would you like to do?',
        choices: choices
    }
];


connection.connect((err) => {
    if (err) throw err;
    console.log(`Connected to mysql on thread ${connection.threadId}`)
    init()
})

const init = () => {
    inquirer.prompt(action)
        .then(answer => {
            switch(answer.action) {
                case choices[0]:
                    viewDepartments();
                    break;

                case choices[1]:
                    viewRoles();
                    break;

                case choices[2]:
                    viewEmployees();
                    break;

                case choices[3]:
                    addDepartment();
                    break;

                case choices[4]:
                    addRole();
                    break;

                case choices[5]:
                    addEmployee();
                    break;

                case choices[6]:
                    updateEmployee();
                    break;

                case choices[7]:
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

const addDepartment = () => {
    console.log('addDepartment');
    anotherAction();
}

const addRole = () => {
    console.log('addRole');
    anotherAction();
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
                type: 'list',
                name: 'continue',
                message: 'What would you like to do something else?',
                choices: ['Yes', 'No']   
            }
        ]
        )
        .then(answer => {
            if (answer.continue === 'Yes') {
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