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
const teamMembers = [];


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// Initalise package.json file 
// Create Employee,Engineer,Intern,Manager classes so that it'll pass the test
// Create inquirer prompt to ask for Manager information

//Create the inquirer flow so that it will ask different set of inquirer prompt based on user input
//write html result file 

//prompt questions for team manager
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


// prompt questions for engineer
const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your engineer's name?",
        
      
      },
      {
        type: 'input',
        name: 'id',
        message: "What is your engineer's ID?",
        
      },
      {
        type: 'input',
        name: 'email',
        message: "What is your engineer's email?",
        
      },
      {
        type: 'input',
        name: 'github',
        message: "What is your engineer's Github Username?",
       
      }
];

// prompt questions for intern
const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your intern's name?",
        
      
      },
      {
        type: 'input',
        name: 'id',
        message: "What is your intern's ID?",
        
      },
      {
        type: 'input',
        name: 'email',
        message: "What is your intern's email?",
        
      },
      {
        type: 'input',
        name: 'school',
        message: "What is your intern's school name?",
       
      }
];

// Menu options to continue
const menuOptions = [
    {
        type: 'list',
        name: 'choice',
        message: 'Choose an option',
        choices:['Add an engineer', 'Add an intern', 'Finish building the team'],
      }
];

// Function to prompt for manager details
function promptManager() {
    inquirer.prompt(managerQuestions).then((answers) => {
      // Create a manager object using the provided details
      const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
  
      // Call the function to display the menu options
      promptMenu();
    });
  }
  
  // Function to prompt for engineer details
  function promptEngineer() {
    inquirer.prompt(engineerQuestions).then((answers) => {
      // Create an engineer object using the provided details
      const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
  
      // Call the function to display the menu options
      promptMenu();
    });
  }
  
  // Function to prompt for intern details
  function promptIntern() {
    inquirer.prompt(internQuestions).then((answers) => {
      // Create an intern object using the provided details
      const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
  
      // Call the function to display the menu options
      promptMenu();
    });
  }
  
  // Function to prompt the user with the menu options
  function promptMenu() {
    inquirer.prompt(menuOptions).then((answers) => {
      // Handle the user's choice
      switch (answers.choice) {
        case 'Add an engineer':
          promptEngineer();
          break;
        case 'Add an intern':
          promptIntern();
          break;
        case 'Finish building the team':
          // Call a function to generate the HTML and exit the application
          generateHTML();
          break;
        default:
          console.log('Invalid choice');
          break;
      }
    });
  }

  // Function to generate HTML 
  function generateHTML() {
    try {
       const html = render(teamMembers);
       // function to write the HTML
       fs.writeFileSync(outputPath, html);
       console.log('HTML generated and saved to team.html');
    } catch (error) {
       console.error('Error generating HTML:', error.message);
    }
 }
 
  // Call the promptManager function to start the application
  promptManager();



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
// When a user decides to finish building their team then they exit the application, and the HTML is generated.
// Call the render function (provided for you) and pass in an array containing all employee objects;
// The render function will generate and return a block of HTML including templated divs for each employee!
// Create an HTML file using the HTML returned from the render function.
// Write it to a file named team.html in the output folder.
// You can use the provided variable outputPath to target this location.


