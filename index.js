const fs = require('fs');
const inquirer = require('inquirer');
const readMeMaker = require('./readMeMaker');

inquirer
    .prompt([
        {
            type: 'confirm',
            message: 'Do you want to create a README file?',
            name: 'README',
        },
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
            message: 'Check all elements you would like to include in the table of contents',
            choices: ['Installation', 'Usage', 'Credits', 'License'],
            name: 'tableOfContents',
        },
    ])
    .then((answers) => {
        fs.writeFile(
            `${answers.README}.md`, 
            (answers), (err) => 
            err ? console.error(err) : console.log('Success!'));
    })



    // {
    //     type: 'input',
    //     message: 'What are the steps required to install your project?',
    //     name: 'installation',
    // },
    // {
    //     type: 'input',
    //     message: 'How do you use the app?',
    //     name: 'usage',
    // },
    // {
    //     type: 'input',
    //     message: '',
    //     name: 'credits',
    // },
    // {
    //     type: 'input',
    //     message: 'What are the steps required to install your project?',
    //     name: 'license',
    // },