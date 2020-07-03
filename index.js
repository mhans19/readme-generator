// Require Modules
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');
const inquirer = require('inquirer');  
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
        type: 'input',
        name: 'liveURL',
        message: 'Please provide the website URL.',
        validate: liveURL => {
            if (liveURL) {
                return true;
            } else {
                console.log('Please enter the URL!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'repoLink',
        message: 'Please provide the link to your GitHub repository.',
        validate: repoLink => {
            if (repoLink) {
                return true;
            } else {
                console.log('Please enter the link to your repository!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter any installation instructions for your project.',
        validate: installation => {
            if (installation) {
                return true;
            } else {
                console.log('Please enter installation instructions!');
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
                console.log('Please enter usage instructions!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select the appropriate licensing for this project.',
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "AGPL 3.0"],
        validate: usage => {
            if (usage) {
                return true; 
            } else {
                console.log('Select "None" if license is not appropriate.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please list collaborators (with links to GitHub repositories), third-party assets, or links to tutorials.',
        validate: usage => {
            if (usage) {
                return true;
            } else {
                console.log('Please list contributing factors!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please list any tests for your application.',
        validate: usage => {
            if (usage) {
                return true;
            } else {
                console.log('Please list tests!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.',
        validate: email => {
            if (email) {
                return true;
            } else {
                console.log('Please enter your email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please provide the link to your GitHub.',
        validate: github => {
            if (github) {
                return true;
            } else {
                console.log('Please enter your GitHub link!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'Please provide the link to your LinkedIn.',
        validate: linkedin => {
            if (linkedin) {
                return true;
            } else {
                console.log('Please enter your LinkedIn link!');
                return false;
            }
        }
    }
])
.then(answers => {
    return generateMarkdown(answers);
})
.then(pageMD => {
    fs.writeFile('./dist/README.md', pageMD, err => {
        if (err) {
            console.log(err);
            return;
            }
            console.log("Your README file was created! Navigate to the 'dist' folder to locate.")
    });
});
