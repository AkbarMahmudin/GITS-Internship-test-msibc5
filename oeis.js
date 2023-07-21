import inquirer from "inquirer";

function calculateA000124(n) {
  const result = [1];
  let currentNumber = 1;

  for (let i = 1; i < n; i++) {
    currentNumber += i;
    result.push(currentNumber);
  }

  return result;
}

const main = async () => {
  const { inputNumber } = await inquirer.prompt([
    {
      type: "input",
      name: "inputNumber",
      message: "Enter a number: ",
      validate: (value) => {
        if (isNaN(value)) {
          return "Please enter a valid number";
        }
        return true;
      }
    },
  ]);

  const output = calculateA000124(inputNumber).join("-");
  console.log("Output: ", output);
};

main();
