import { sub } from "./substract.js";
import { mul } from "./Multiply.js";
import { add } from "./add.js";
import { div } from "./divide.js";
import inquirer from "inquirer";
import chalk from "chalk";
import showBanner from "node-banner";
// async function claculator() {
//    try {await showBanner("CALCULATOR")
const calculator = await inquirer.prompt([{
        name: "a",
        type: "number",
        message: "Enter first number"
    }, {
        name: "b",
        type: "number",
        message: "Enter 2nd number"
    }, {
        name: "operation",
        type: "list",
        message: 'choose an operation',
        choices: ["add", "substract", "Multiply", "divide"]
    }]);
async function calculate() {
    await showBanner('CALCULATOR', 'With Inquirer,Chalk and Node-Banner', 'green', 'yellow');
}
calculate();
if (calculator.operation == 'Multiply') {
    console.log(chalk.bgRed.white(`${calculator.a}*${calculator.b}=`, mul(calculator.a, calculator.b)));
}
else if (calculator.operation == 'substract') {
    console.log(chalk.bgRed.white(`${calculator.a}-${calculator.b}=`, sub(calculator.a, calculator.b)));
}
else if (calculator.operation == 'add') {
    console.log(chalk.bgRed.white(`${calculator.a}+${calculator.b}=`, add(calculator.a, calculator.b)));
}
else if (calculator.operation == 'divide') {
    console.log(chalk.bgRed.white(`${calculator.a}/${calculator.b}=`, div(calculator.a, calculator.b)));
}
