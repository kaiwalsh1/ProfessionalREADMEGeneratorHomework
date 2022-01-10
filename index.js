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
// table of contents
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
            type: 'checkbox',
            message: 'Choose a license for your application',
            choices: ['License preferred by the community', 'MIT License', 'GNU GPLv3', 'None of the above']
            name: 'license',
        },
        {
            type: 'input',
            message: 'What are the features of your project',
            name: 'features',
        },
        {
            type: 'input',
            message: 'What are the features of your project',
            name: 'howToContribute',
        },
        {
            type: 'input',
            message: 'What are the features of your project',
            name: 'tests',
        },
    ]).then(answers => {
        fs.writeFile(
            `README.md`, 
            readMeMaker(answers), 
            err => err ? console.error(err) : console.log('Success'));
    });