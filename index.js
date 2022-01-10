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
            type: 'list',
            message: 'Choose a license type for your application',
            choices: ['MIT', "Mozilla", 'Apache', 'Boost', 'Eclipse', 'IBM', 'Zlib', 'No license'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'What are the features of your project',
            name: 'features',
        },
        {
            type: 'input',
            message: 'Are there contribution guidelines for this project?',
            name: 'howToContribute',
        },
        {
            type: 'input',
            message: 'What are the features of your project',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username',
        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'email',
        },
    ]).then(answers => {
        fs.writeFile(
            // to not confuse README file
            `READMEGenerator.md`, 
            readMeMaker(answers), 
            err => err ? console.error(err) : console.log('Success'));
    });