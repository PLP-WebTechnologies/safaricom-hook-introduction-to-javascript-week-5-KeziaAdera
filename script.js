// Part 1: JavaScript Basics

// 1. Variables and Data Types
const name = "Kezzy One";
const age = 25;
const isStudent = true;
const hobbies = ["reading", "coding", "cooking"];
const person = { name: "Tracy", age: 30 };

console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);

// 2. Operators - Simple Calculator
function calculator() {
    const num1 = parseFloat(prompt("Enter the first number:"));
    const num2 = parseFloat(prompt("Enter the second number:"));
    const operation = prompt("Choose an operation (+, -, *, /):");

    if (isNaN(num1) || isNaN(num2)) {
        alert("Invalid input. Please enter valid numbers.");
        return;
    }

    let result;
    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            alert("Invalid operation. Please choose +, -, *, or /.");
            return;
    }

    alert(`Result: ${result}`);
}

// 3. Functions - Greet User
function greetUser(name) {
    return `Hello, ${name}! Welcome to JavaScript!`;
}
const userName = prompt("Enter your name:");
document.body.innerHTML += `<p>${greetUser(userName)}</p>`;

// Part 2: JavaScript Control Structures

// 4. If Statements - Voting Eligibility
const userAge = parseInt(prompt("Enter your age:"));
const eligibilityMessage = userAge >= 18 ? "You are eligible to vote." : "You are not eligible to vote.";
document.getElementById("vote-eligibility").innerText = eligibilityMessage;

// 5. Loops - Display Numbers from 1 to 10
const numberList = document.getElementById("number-list");
for (let i = 1; i <= 10; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    numberList.appendChild(listItem);
}

// Part 3: Introduction to the DOM

// 6. Selecting and Modifying HTML Elements
// Change the text of the <h1> element
const heading = document.querySelector("h1");
heading.textContent = "JavaScript in Action!";

// Add a new <p> inside the #dynamic-content <div>
const dynamicDiv = document.getElementById("dynamic-content");
const newParagraph = document.createElement("p");
newParagraph.textContent = "This content was added dynammically using JavaScript.";
dynamicDiv.appendChild(newParagraph);
