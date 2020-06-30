// Require Modules
const fs = require('fs');
const inquirer = require('inquirer');  
const generateMarkdown = require('./utils/generateMarkdown');

// Veryify Module is successfully imported, e.g.->
    //console.log(inquirer);

// Question prompts for user input   
const userInput = [
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
];

const writeMD  = (responses) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', responses, err => {
            // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
            if (err) {
                reject(err);
                // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
                }
                // if everything went well, resolve the Promise and send the successful data to the `.then()` method
                resolve({
                ok: true,
                message: 'README created!'
                });
        });
    });
};

function init() {
    inquirer.prompt(userInput)
    .then((responses) => {
        generateMarkdown();
        writeMD();
    })
}

init();