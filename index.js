const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of your project:",
  },
  {
    type: "input",
    name: "tableOfContents",
    message: "Enter your table of contents of your project",
  },
  {
    type: "input",
    name: "installation",
    message: "Describe how you install your project",
  },
  {
    type: "input",
    name: "usage",
    message: "Describe the usage for your project",
  },
  {
    type: "input",
    name: "license",
    message: "Which License is your project using on GitHub?",
  },
  {
    type: "input",
    name: "contributing",
    message: "Describe how users can contribute to your project",
  },
  {
    type: "input",
    name: "tests",
    message: "Describe how to run tests and ensure code integrity",
  },
  {
    type: "input",
    name: "questions",
    message: "Describe how people can contact you to ask questions",
  }
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("README.md created successfully!");
    }
  });
}

// Function to initialize program
function init() {
    inquirer
      .prompt(questions)
      .then((Answers) => {
        console.log("Answers:", Answers);
        
      // Generate markdown
      const markdown = generateMarkdown(Answers);

      // Add markdown info to readme file
      writeToFile("README.md", markdown);
    })
    .catch((err) => {
      console.error("Error generating README: ", err);
    });
}

// Function call to initialize program
init();
