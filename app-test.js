//testing validation of function objects
function IsAtLeast2ChoicesSelected (answer) {
    if (answer.length < 2) {
      return 'You must choose at least two topping.';
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
    console.log(JSON.stringify(answers, null, '  '));
  });