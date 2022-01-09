const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of your project?',
            name: 'project',
        },
        {
            type: 'input',
            message: 'What is your project description?',
            name: 'description',
        },
        {
            type: 'checkbox',
            message: '',
            name: 'table of contents',
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
            message: '',
            name: 'credits',
        },
        {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'license',
        },
    ])
    .then((answers) => {
        fs.writeFile('README.md', `${answers}\n`, (err) => err ? console.error(err) : console.log('Commit logged!'));
    });