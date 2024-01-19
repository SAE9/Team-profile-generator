const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { error } = require("console");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Initalise package.json file 
// Create Employee,Engineer,Intern,Manager classes so that it'll pass the test

// Create inquirer prompt to ask for Manager information
//Create the inquirer flow so that it will ask different set of inquirer prompt based on user input
//write html result file 

//prompt questions for team manager's information
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your team manager's name?",
        
      
      },
      {
        type: 'input',
        name: 'id',
        message: "What is your team manager's ID?",
        
      },
      {
        type: 'input',
        name: 'email',
        message: "'What is your team manager's email?",
        
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: "What is your team manager's office number?",
       
      }
];

// // * Finally, although it’s not a requirement, consider adding validation to ensure that user input is in the proper format.   
// * Write code in `index.js` that uses inquirer to gather information about the development team members and creates objects for each team member using the correct classes as blueprints.
// * When a user starts the application then they are prompted to enter the **team manager**’s:
//   * Name
//   * Employee ID
//   * Email address
//   * Office number
// * When a user enters those requirements then the user is presented with a menu with the option to:
//   * Add an engineer
//   * Add an intern 
//   * Finish building the team
// * When a user selects the **engineer** option then a user is prompted to enter the following and then the user is taken back to the menu:
//   * Engineer's Name
//   * ID
//   * Email
//   * GitHub username
// * When a user selects the intern option then a user is prompted to enter the following and then the user is taken back to the menu:
//   * Intern’s name
//   * ID
//   * Email
//   * School



const people = [];
fs.readFile('address.csv', 'utf-8', (err, data) => {
    const parsedData = data.split('\n')
    .map((line)) => line 
}



)