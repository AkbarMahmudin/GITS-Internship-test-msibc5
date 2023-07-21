import inquirer from 'inquirer';

const isBalancedBrackets = (str) => {
  const bracketsString = str.trim();
  const stack = [];
  const brackets = {
    '{': '}',
    '[': ']',
    '(': ')'
  };
  const closingBrackets = {
    '}': true,
    ']': true,
    ')': true
  };

  for (let i = 0; i < bracketsString.length; i++) {
    const char = bracketsString[i];
    if (brackets[char]) {
      stack.push(char);
    } else if (closingBrackets[char]) {
      if (brackets[stack.pop()] !== char) return 'NO';
    }
  }
  return stack.length === 0 ? 'YES' : 'NO';
};

// const main = async () => {
//   let replay = true;

//   while (replay) {
//     const { input } = await inquirer.prompt([
//       {
//         type: "input",
//         name: "input",
//         message: "Enter the string of brackets: ",
//         validate: (value) => {
//           if (value.length === 0) {
//             return "Please enter a string of brackets";
//           }
//           return true;
//         }
//       },
//     ]);
    
//     const result = isBalancedBrackets(input);
//     console.log('Output: ', result);
    
//     const { isQuit } = await inquirer.prompt([
//       {
//         type: "confirm",
//         name: "isQuit",
//         message: "Quit?",
//       }
//     ]);

//     replay = !isQuit;
//   }
// };

// main();

const testCases = [
  {
    input: '{[()]}',
    output: 'YES'
  },
  {
    input: '{[(])}',
    output: 'NO'
  },
  {
    input: '{{[[(())]]}}',
    output: 'YES'
  },
  {
    input: '{{([])}}',
    output: 'YES'
  },
];

console.time('isBalancedBrackets');
testCases.forEach(({ input, output }) => {
  const result = isBalancedBrackets(input);
  console.log('Input: ', input);
  console.log('Output: ', result);
  console.log('Expected: ', output);
  console.log('-----------------------------------');
})
console.timeEnd('isBalancedBrackets');
