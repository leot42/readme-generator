let inquirer = require('inquirer');

let questionsExample = [
    {
      type: 'input',
      name: 'first_name',
      message: "What's your first name",
    },
    {
      type: 'input',
      name: 'last_name',
      message: "What's your last name",
      default: function () {
        return 'Doe';
      },
    },
    {
      type: 'input',
      name: 'fav_color',
      message: "What's your favorite color",
    }
    // {
    //   type: 'input',
    //   name: 'phone',
    //   message: "What's your phone number",
    //   validate: function (value) {
    //     var pass = value.match(
    //       /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
    //     );
    //     if (pass) {
    //       return true;
    //     }
  
    //     return 'Please enter a valid phone number';
    //   },
    // },
  ];

// let cliPrompt = function inquirer.prompt(questions).then((answers) => {
//     console.log(JSON.stringify(answers, null, '  '));
//   });

//   module.exports = cliPrompt;