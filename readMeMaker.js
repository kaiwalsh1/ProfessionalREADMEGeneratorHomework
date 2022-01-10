const createReadMeForUser = (answers) => {
    return `
## ${answers.project}
By: ${answers.name}

## Description
${answers.description}

## Table of Contents
- [Installation] (#Installation)
- [Usage] (#Usage)
- [Credits] (#Credits)
- [License] (#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)

## Installation
${answers.installation}

## Usage
${answers.usage}
![alt text] ()

## Credits
${answers.credits}

## License
${answers.license}

---

## Features
${answers.features}

## How to Contribute
${answers.howToContribute}

## Tests
${answers.tests}

## Questions
GitHub: ${answers.username}
Contact Me: ${answers.email}
    `
};

module.exports = createReadMeForUser;