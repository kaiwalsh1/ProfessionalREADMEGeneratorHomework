const createReadMeForUser = (answers) => {
    return `
    ## ${answers.project}
    By: ${answers.name}

    ## Description
    ${answers.description}

    ## Table of Contents
    - [Installation] (#installation)
    - [Usage] (#usage)
    - [Credits] (#credits)
    - [License] (#license)

    ## Installation
    ${answers.installation}

    ## Usage
    ${answers.usage}
    ![alt text] ()

    ## Credits
    ${answers.credits}

    ## License
    ${answers.license}

    ## Features
    ${answers.features}


    `;
};
module.exports = createReadMeForUser;