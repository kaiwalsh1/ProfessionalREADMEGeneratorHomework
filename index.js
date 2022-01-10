const fs = require('fs');
const inquirer = require('inquirer');
const readMeMaker = require('./readMeMaker');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'project',
        },
        {
            type: 'input',
            message: 'What is your name?',
            name: 'name',
        },
// Description
        {
            type: 'input',
            message: 'What is a description of your project?',
            name: 'description',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'How do you use the app?',
            name: 'usage',
        },
        {
            type: 'input',
            message: 'List your collaborators, if any.',
            name: 'credits',
        },
        {
            type: 'input',
            message: 'Write license, if applicable',
            name: 'license',
        },
        {
            type: 'input',
            message: 'What are the features of your project',
            name: 'features',
        },
    ])
    .then((answers) => {
        fs.writeFile(
            `README.md`, 
            readMeMaker(answers), 
            (err) => 
            err ? console.error(err) : console.log('Success!'));
    })



