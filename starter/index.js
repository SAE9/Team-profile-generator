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



const people = [];
fs.readFile('address.csv', 'utf-8', (err, data) => {
    const parsedData = data.split('\n')
    .map((line)) => line 
}



)