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
        name: 'projDesc',
        message: 'Please enter a description of your project.',
        validate: projDesc => {
            if (projDesc) {
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
        name: 'install',
        message: 'Please enter any installation instructions for your project.',
        validate: projDesc => {
            if (projDesc) {
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
    ${answers.projDesc}  
      
    ## **TABLE OF CONTENTS**  
    [1. DESCRIPTION](#DESCRIPTION)  
    [2. TABLE OF CONTENTS](#TABLE-OF-CONTENTS)  
    [3. INSTALLATION](#INSTALLATION)  
    [4. USAGE](#USAGE)  
    [5. LICENSE](#LICENSE)  
    [6. CONTRIBUTING](#CONTRIBUTING)  
    [7. TESTS](#TESTS)  
    [8. QUESTIONS](#QUESTIONS)  
        
    ## **INSTALLATION**  
      
    ## **USAGE**  
      
    ## **LICENSE**  
      
    ## **CONTRIBUTING**  
      
    ## **TESTS**  
      
    ## **QUESTIONS**  
    | Email | GitHub | LinkedIn |
    | :------: | :------: |  :------: |
    | <${answers.liveURL}> | [github](${answers.repoLink}) | [LinkedIn](${answers.confirmLive}) |  
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
