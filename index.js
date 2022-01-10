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
            message: 'What was your motivation?',
            name: 'motivation',
        },
        {
            type: 'input',
            message: 'Why did you build this project?',
            name: 'theWhy',
        },
        {
            type: 'input',
            message: 'What problem does it solve?',
            name: 'problemSolve',
        },
        {
            type: 'input',
            message: 'What did you learn?',
            name: 'learn',
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
            message: 'What are the steps required to install your project?',
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

    {
        type: 'checkbox',
        message: 'Check all elements you would like to include in the table of contents',
        choices: ['Installation', 'Usage', 'Credits', 'License'],
        name: 'tableOfContents',
    },



