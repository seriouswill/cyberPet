var inquirer = require('inquirer');
inquirer
  .prompt([
      {
    type: 'list',
    name: 'listQuestion',
    message: "Choose your pet type: ",
    choices: ['Dragon', 'Turtle', 'Tiger', 'Wolf'],
    default: 'Dragon',
},
{
    type: 'input',
    name: 'inputType',
    message: "Choose your pet's name ",
    default: 'Brian',
},
{
    type: 'list',
    name: 'listQuestion2',
    message: "Choose your pet color: ",
    choices: ['Blue', 'Red', 'Purple', 'Green'],
    default: 'Green',
},
{
    type: 'number',
    name: 'numberType',
    message: "Choose your pet's age ",
    default: '1000',
},

    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
