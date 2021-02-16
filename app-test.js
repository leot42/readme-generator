//   test passing values later by writing as a function
function testTemplateFunc(answerResult) {
    let data = {"toppings": [], "first_name":"", "last_name": "", "fav_color": "", "phone": ""};
    data = answerResult;
        templateText = `
        toppings test  ${data.toppings}
        first name test ${data.first_name}
        last name test ${data.last_name}
        fav color test ${data.fav_color}
        phone num test ${data.phone}
        `;

        console.log(this.templateText);
}

//testing validation of function objects
function IsAtLeast2ChoicesSelected(answer) {
  if (answer.length < 2) {
    return 'You must choose at least two toppings.';
  }

  return true;
}


/**
 * Checkbox list examples
 */

'use strict';
var inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'checkbox',
      message: 'Select toppings',
      name: 'toppings',
      choices: [
        new inquirer.Separator(' = The Meats = '),
        {
          name: 'Pepperoni',
        },
        {
          name: 'Ham',
        },
        {
          name: 'Ground Meat',
        },
        {
          name: 'Bacon',
        },
        new inquirer.Separator(' = The Cheeses = '),
        {
          name: 'Mozzarella',
          checked: true,
        },
        {
          name: 'Cheddar',
        },
        {
          name: 'Parmesan',
        },
        new inquirer.Separator(' = The usual ='),
        {
          name: 'Mushroom',
        },
        {
          name: 'Tomato',
        },
        new inquirer.Separator(' = The extras = '),
        {
          name: 'Pineapple',
        },
        {
          name: 'Olives',
          disabled: 'out of stock',
        },
        {
          name: 'Extra cheese',
        },
      ],
      validate: (answer) => IsAtLeast2ChoicesSelected(answer),
    },
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
    },
    {
      type: 'input',
      name: 'phone',
      message: "What's your phone number",
    },
  ])
  .then((answers) => {

    testTemplateFunc(answers);
  });
