// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generatePage = require("./generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "docName",
    message: "Document name?",
  },
  {
    type: "input",
    name: "purpose",
    message: "What is the purpose of your project?",
  },
  {
    type: "input",
    name: "team",
    message: "Developer team names?",
  },
  {
    type: "input",
    name: "updates",
    message: "Future updates?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }

    console.log("Your README.md file has been created");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.table(data);
    writeToFile("README.md", `# ${data.title}`);
  });
}

// Function call to initialize app
init(app);
