# <div align="center">**README GENERATOR**</div>

## **TABLE OF CONTENTS**  
[1. LICENSE](#LICENSE)  
[2. PROJECT DESCRIPTION](#PROJECT-DESCRIPTION)    
[3. TABLE OF CONTENTS](#TABLE-OF-CONTENTS)  
[4. APPLICATION LINKS](#APPLICATION-LINKS)  
[5. INSTALLATION](#INSTALLATION)   
[6. USAGE](#USAGE)   
[7. CONTRIBUTIONS](#CONTRIBUTIONS)  
[8. DEVELOPMENT](#DEVELOPMENT)  
[9. USER STORY](#USER-STORY)  
[10. ACCEPTANCE CRITERIA](#ACCEPTANCE-CRITERIA)   
[11. GRADING REQUIREMENTS](#GRADING-REQUIREMENTS)    
[12. FUNCTIONALITY](#FUNCTIONALITY)  

---

## **LICENSE**  
  ![MIT](https://img.shields.io/badge/License-MIT-blue.svg)  

---

## **PROJECT DESCRIPTION**
> The purpose of this project is 

---

## **APPLICATION LINKS**
> Live Application (Not relevant for this project)
> [GitHub Repository](https://github.com/mhans19/readme-generator)  
> [Video Demonstration]()  
> [Sample README Output]()  

---

## **CONTRIBUTIONS** 

| MORGAN HANSEN |  | |  
| :------: | :------: |  :------: |   
| Email | GitHub | LinkedIn |  
| <mdhansen19@gmail.com> | [GitHub](https://github.com/mhans19?tab=repositories) |  [LinkedIn](https://www.linkedin.com/feed/?trk=onboarding-landing) |  
  
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
> This application must be operated with a Command Line Interface (CLI) software. Using the command line, navigate to the local repository containing the *index.js* file. Then, call upon node followed by the file name - *node index.js*.   
[Walkthrough Demonstration]()  

---

## **USER STORY**
> AS A developer    
> I WANT a README generator  
> SO THAT can quickly create a professional README for a new project   

---

## **ACCEPTANCE CRITERIA**
> GIVEN a command-line application that accepts user input  
> WHEN I am prompted for information about my application repository  
> THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions  
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
1. When the application loads, the player is presented with a themed user interface, a 'Start Playing' button, and a 'Leaderboard' button.  
![](/assets/images/home.PNG)  
2. If the 'Leaderboard' button is clicked, a modal appears that shows the top 5 winning players. The user can close the modal to return to the home screen.  
![](/assets/images/leaderboard-modal.PNG)  
3. When the player clicks the 'Start Playing' button, a modal appears for the user to input a username, read game instructions, and begin the game.  
![](/assets/images/usermodal.PNG)  
4. If a user clicks the 'Instructions' button, a nested modal appears with game instructions. When a player is done reading the instructions, they can click the 'Back' button to return to the previous modal.  
![](/assets/images/instructions-modal.PNG)  
5. After a username is typed, the player can click the 'Begin Game' button to start playing. When the game begins, the user is presented with a game card of their username and starting gold on the left, and the NPC's name and starting gold on the right. In the middle of the interface, the player is presented with a text field to input their bet and a button to roll the dice when they are ready to play.  
![](/assets/images/gamecards.PNG)  
6. A random number generator is used to determine the roll of the player and the NPC. This rolled number will appear in the game cards. The opponent with the higher rolled number wins the round and will see the a green outline surrounding their game card and a confirmation that they won. The losing opponent will have a red outline for their game card and confirmation that they lost. The amount of gold each opponent has is then updated.  
![](/assets/images/resultscards.PNG)  
7. The player then places another bet and rolls the dice again. This game play continues until one of the opponents runs out of gold. The player with remaining gold wins the game and an appropriate Giphy is sent to the Death-Roll Slack channel.   
![](/assets/images/slackresults.PNG)  
8. When a game ends, a modal appears detailing the player's final points, number of wins, and winning streak for the game. The user's scores are saved to the local storage if they make the top 5. At the bottom of the modal, the player has the option of playing again.  
![](/assets/images/gameresults.PNG)  
