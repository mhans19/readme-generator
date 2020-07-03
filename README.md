# <div align="center">**README GENERATOR**</div>

## **TABLE OF CONTENTS**    
[1. TABLE OF CONTENTS](#TABLE-OF-CONTENTS)  
[2. LICENSE](#LICENSE)  
[3. PROJECT DESCRIPTION](#PROJECT-DESCRIPTION)  
[4. APPLICATION LINKS](#APPLICATION-LINKS)  
[5. CONTRIBUTIONS](#CONTRIBUTIONS)  
[6. DEVELOPMENT](#DEVELOPMENT)  
[7. INSTALLATION](#INSTALLATION)   
[8. USAGE](#USAGE)   
[9. TESTING](#TESTING)  
[10. USER STORY](#USER-STORY)  
[11. ACCEPTANCE CRITERIA](#ACCEPTANCE-CRITERIA)   
[12. GRADING REQUIREMENTS](#GRADING-REQUIREMENTS)    
[13. FUNCTIONALITY](#FUNCTIONALITY)  

---

## **LICENSE**  
![MIT](https://img.shields.io/badge/License-MIT-blue.svg)
> This application is covered under the [MIT License](https://opensource.org/licenses/MIT)    

---

## **PROJECT DESCRIPTION**
> High-quality README documentation is important when creating an open source application to detail installation requirements, usage, licensing, and other contributing elements.   
  
> The purpose of this project was to create a command-line application that generates a README file using Markdown syntax. The application is initiated with the command-line and allow for user input using the [Inquirer Package](https://www.npmjs.com/package/inquirer). The user's input populates the README template.

---

## **APPLICATION LINKS**
> Live Application (Not relevant for this project)  
> [GitHub Repository](https://github.com/mhans19/readme-generator)  
> [Video Demonstration](https://www.youtube.com/watch?v=yWTvnqWZeL4&feature=youtu.be)  
> [Sample README Output](./dist/README.md)  

---

## **CONTRIBUTIONS**   
Please contact **MORGAN HANSEN** for all application inqueries.
| Email | GitHub | LinkedIn |  
| :------: | :------: |  :------: |  
| <mdhansen19@gmail.com> | [GitHub](https://github.com/mhans19?tab=repositories) |  [LinkedIn](https://www.linkedin.com/in/morgan-hansen-47235872/?challengeId=AQF6MR471a-pZgAAAXMTL5e4xLqg_LNW5yawcXgk_uUmLrzsXk5ehOnzlQuK2dOVeX4ARtJwxmcHQrQhtgL_jM96wbBzhLvmAA&submissionId=813167e8-8027-1e16-5911-1c143c23561f) |  
  
---

## **DEVELOPMENT**  
This application was developed with the following application structures:  
1. [Node.js](https://nodejs.org/en/)  
2. [NPM Inquirer](https://www.npmjs.com/package/inquirer)  
3. [NPM File System (fs)](https://nodejs.org/api/fs.html)  
4. [Markdown](https://www.markdownguide.org/)
5. [JavaScript (js)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  

---

## **INSTALLATION**
> Prior to using the application, a user *must* complete the following:  
> 1. Download the [GitHub repository](https://github.com/mhans19/readme-generator) to a local repository. 
> 2. [Install dependencies](#DEVELOPMENT) such as Node.js and NPM packages.  
> 3. Ensure installation of a Command Line Interface (CLI) utility such as *Git Bash* or *Terminal*.

---

## **USAGE**
> The application must be operated with a Command Line Interface (CLI) software. Using the command line, navigate to the local repository containing the *index.js* file. Then, call upon node followed by the file name - *node index.js*.   
[Walkthrough Demonstration](https://www.youtube.com/watch?v=yWTvnqWZeL4&feature=youtu.be)  

---

## **TESTING**
> This application has not undergone testing.

---

## **USER STORY**
> AS A developer    
> I WANT a README generator  
> SO THAT can quickly create a professional README for a new project   

---

## **ACCEPTANCE CRITERIA**
> GIVEN a command-line application that accepts user input  
> WHEN I am prompted for information about my application repository  
> THEN a high-quality, professional README is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions  
> WHEN I enter my project title  
> THEN this is displayed as the title of the README  
> WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions  
> THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests  
> WHEN I choose a license for my application from a list of options  
> THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under  
> WHEN I enter my GitHub username  
> THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile  
> WHEN I enter my email address  
> THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions  
> WHEN I click on the links in the Table of Contents  
> THEN I am taken to the corresponding section of the README  

---

## **GRADING REQUIREMENTS**
#### <div align="center">This Challenge is graded based on the following criteria:</div>
### **<div align="center">Deliverables: 20%</div>**
- [x] A sample README generated using the application must be submitted.
- [x] Your GitHub repository containing your application code.  

### **<div align="center">Walkthrough Video: 27%</div>**
- [x] A walkthrough video that demonstrates the functionality of the README generator must be submitted and a link to the video should be included in your README file.  
- [x] The walkthrough video must demonstrate how a user would invoke the application from the command line.
- [x] The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application.  
- [x] The walkthrough video must demonstrate a generated README that matches the user input and has a functioning table of contents.

### **<div align="center">Technical Acceptance Criteria: 40%</div>**
#### <div align="center">Satisfies all of the above acceptance criteria plus the following:  </div>
- [x] Uses the Inquirer package.

### **<div align="center">Repository Quality: 13%</div>**
- [x] Repository has a unique name.
- [x] Repository follows best practices for file structure and naming conventions.
- [x] Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
- [x] Repository contains multiple descriptive commit messages.
- [x] Repository contains a high-quality README with description and a link to walkthrough video.

---

## **FUNCTIONALITY**
1. From the command line interface (CLI), navigate to the local repository containing the *index.js* file.  
![](/assets/images/local_repo.PNG)  
2. Once in the local repository, type *node index.js* into the command line. Then press 'Enter'.  
![](/assets/images/initiate_node.PNG)  
3. From the command line, give a response to each of the questions prompted. Press 'Enter' to move to the next question. Once all the questions are answered, a validating message appears and instructs users that the newly generated README file is located within the 'dist' folder in the repository.  
![](/assets/images/node_prompts.PNG)  
4. Navigate to the created README and see that all responses given from the command line have populated into the README template.  
![](/assets/images/readme_populated.PNG)  
5. Your README file is ready to go!  