const createReadMeForUser = (answers) => {
    return `
    ## ${answers.project}
    By: ${answers.name}

    ## Description
    The motivation behind this project was ${answers.motivation}.
    This project was built ${answers.theWhy}.
    This project solves ${answers.problemSolve}.
    I learned ${answers.learn}.


    ## Table of Contents
    - [Installation] (#installation)
    - [Usage] (#usage)
    - [Credits] (#credits)
    - [License] (#license)

    ## Installation
    ${answers.installation}

    ## Usage
    ${answers.usage}
    ``md
    ![alt text] (assets/images/screenshot.png)
    ``

    ## Credits
    ${answers.credits}

    ## License
    ${answers.license}

    ## Features
    ${answers.features}


    `;
};
module.exports = createReadMeForUser;