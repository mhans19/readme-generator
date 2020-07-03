// LICENSING
const badge = (license) =>{
    if (license == "MIT"){
        return 'https://img.shields.io/badge/License-MIT-blue.svg';
    } else if (license == "APACHE 2.0"){
        return `https://img.shields.io/badge/License-Apache%202.0-blue.svg`;
    } else if(license == "GPL 3.0"){
        return `https://img.shields.io/badge/License-GPLv3-blue.svg`;
    } else if(license == "AGPL 3.0"){
        return `https://img.shields.io/badge/License-AGPLv3-blue.svg`;
    } 
}

module.exports = templateData => {
    const { title, description, liveURL, repoLink, installation, usage, license, contributing, tests, email, github, linkedin } = templateData;

return `
# <div align="center">**${title}**</div>   
![${license}](${badge(license)})  
    
## **DESCRIPTION**   
> ${description}  
    
## **TABLE OF CONTENTS**  
* [DESCRIPTION](#DESCRIPTION)  
* [TABLE OF CONTENTS](#TABLE-OF-CONTENTS)  
* [APPLICATION LINKS](#APPLICATION-LINKS) 
* [INSTALLATION](#INSTALLATION)  
* [USAGE](#USAGE)  
* [LICENSE](#LICENSE)  
* [CONTRIBUTING](#CONTRIBUTING)  
* [TESTS](#TESTS)  
* [QUESTIONS](#QUESTIONS)  
    
## **APPLICATION LINKS**   
> [Live Application](${liveURL})  
> [GitHub Repository](${repoLink})  
    
## **INSTALLATION**   
${installation}  
    
## **USAGE**  
${usage}  
    
## **LICENSE**  
> This application is covered under the ${license} license.
    
## **CONTRIBUTING**  
> ${contributing}  
    
## **TESTS**  
> ${tests}   
    
## **QUESTIONS**  
| Reach Out | Repositories | Profile |  
| :------: | :------: |  :------: |  
| <${email}> | [GitHub](${github}) |  [LinkedIn](${linkedin}) |   
`;
};