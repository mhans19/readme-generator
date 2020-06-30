// Require Modules
const fs = require('fs');
const inquirer = require('inquirer');  
const { writeFile, generateMarkdown } = require('./utils/generateMarkdown.js');

// Veryify Module is successfully imported, e.g.->
    //console.log(inquirer);

// Question prompts for user input   
inquirer
  .prompt([
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
        name: 'installation',
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
// chain user responses with a callback method
.then(function(data) {
    generateMarkdown(data);
})
.then(mdFile => {
    return writeFile(mdFile);
})

// fs.writeFile("README.md", process.argv[2], function(err) {

//     if (err) {
//       return console.log(err);
//     }
  
//     console.log("Done!");
  
//   });