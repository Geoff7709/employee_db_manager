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
    'View Departments', 'View Roles', 'View Employees', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee Role']

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
            connection.query(`SELECT * FROM employee`, (err, res) => {
                if (err) console.log(err)
                console.table(res)
            })
        })
}