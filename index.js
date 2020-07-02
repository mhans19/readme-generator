// Require Modules
// const generatePage = require('./utils/generateMarkdown.js');
const fs = require('fs');
const inquirer = require('inquirer');  

// Veryify Module is successfully imported, e.g.->
    //console.log(inquirer);s

// Question prompts for user input   
inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: 'Please enter the title of your project.',
        validate: title => {
            if (title) {
            return true;
            } else {
            console.log('Please enter a title for your project!');
            return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project.',
        validate: description => {
            if (description) {
                return true;
            } else {
                console.log('Please enter a project description!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmLive',
        message: 'Is your project published to a live URL?',
        default: true
    },
    {
        type: 'input',
        name: 'liveURL',
        message: 'Please provide the website URL.',
        when: ({ confirmLive }) => confirmLive
    },
    {
        type: 'input',
        name: 'repoLink',
        message: 'Please provide the link to your GitHub repository.',
        when: ({ confirmLive }) => confirmLive
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter any installation instructions for your project.',
        validate: installation => {
            if (installation) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter any usage instructions for your project.',
        validate: usage => {
            if (usage) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select the appropriate licensing for this project.',
        choices: ["GPL V3", "EPL 1.0", "MIT", "MPL 2.0"],
        validate: license => {
            if (license) {
                return true;
            } else {
                return false;
            }
        }
    }
])
.then(answers => {
    return `
    # <div align="center">**${answers.title}**</div>  
      
    ## **PROJECT DESCRIPTION**  
    ${answers.description}  
      
    ## **TABLE OF CONTENTS**  
    [1. DESCRIPTION](#PROJECT-DESCRIPTION)  
    [2. TABLE OF CONTENTS](#TABLE-OF-CONTENTS)  
    [3. DEPLOYMENT](#DEPLOYMENT)  
    [4. INSTALLATION](#INSTALLATION)  
    [5. USAGE](#USAGE)  
    [6. LICENSE](#LICENSE)  
    [7. CONTRIBUTING](#CONTRIBUTING)  
    [8. TESTS](#TESTS)  
    [9. QUESTIONS](#QUESTIONS)  
        
    ## **DEPLOYMENT**  
    | Live URL | GitHub Repository |  
    | :------: | :------: |   
    | [Application](${answers.liveURL}) | [Repository](${answers.repoLink}) |   
      
    ## **INSTALLATION**  
    ${answers.installation}  
      
    ## **USAGE**  
    ${answers.usage}  
       
    ## **LICENSE**  
    ${answers.license}  
       
    ## **CONTRIBUTING**  
    ${answers.contributing}  
       
    ## **TESTS**  
    ${answers.tests}  
       
    ## **QUESTIONS**  
    | Email | GitHub | LinkedIn |
    | :------: | :------: |  :------: |
    | <${answers.email}> | [github](${answers.github}) | [LinkedIn](${answers.linkedin}) |  
    `;
})
.then(pageMD => {
    fs.writeFile('./dist/README.md', pageMD, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
            console.log(err);
            // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
            return;
            }
            // if everything went well, resolve the Promise and send the successful data to the `.then()` method
            console.log("Your README file was created! Navigate to the 'dist' folder to locate.")
    });
});
