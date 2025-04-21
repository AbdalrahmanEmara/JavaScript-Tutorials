console.log("One");

function sayHello(theName, theGender) {
  // Your Code Here
  if (theGender === "Male") console.log(`Hello Mr ${theName}`);
  else if (theGender === "Female") console.log(`Hello Miss ${theName}`);
  else console.log(`Hello ${theName}`);
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
///////////////////////////////////////////////////////////////
console.log("Two");
function calculate(firstNum, secondNum, operation) {
  // Your Code Here
  if (operation === "subtract") console.log(firstNum - secondNum);
  else if (operation === "multiply") console.log(firstNum * secondNum);
  else if (typeof secondNum !== "number")
    console.log("Second Number Not Found");
  else console.log(firstNum + secondNum);
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
///////////////////////////////////////////////////////////////
console.log("Three");
function ageInTime(theAge) {
  // Your Code Here
  if (theAge > 10 && theAge < 100) {
    console.log(`${theAge * 12} Months`);
    console.log(`${theAge * 12 * 30} Days`);
    console.log(`${theAge * 12 * 30 * 24} Hours`);
    console.log(`${theAge * 12 * 30 * 24 * 60} Minutes`);
    console.log(`${theAge * 12 * 30 * 24 * 60 * 60} Seconds`);
  } else console.log("Age Out Of Range");
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
///////////////////////////////////////////////////////////////
console.log("Four");
function checkStatus(a, b, c) {
  let name, age, status;
  for (const arg of [a, b, c]) {
    if (typeof arg === "number") age = arg;
    else if (typeof arg === "string") name = arg;
    else if (typeof arg === "boolean") status = arg;
  }

  const availabilityMsg = status ? "Available" : "Not Available";
  console.log(
    `Hello ${name}, Your Age Is ${age}, You Are ${availabilityMsg} For Hire`
  );
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
//////////////////////////////////////////////////////////////////
console.log("Five");
function createSelectBox(startYear, endYear) {
  // Your Code Here
  let select = document.createElement("select");

  for (startYear; startYear <= endYear; startYear++) {
    let option = document.createElement("option");
    option.value = startYear;
    option.text = startYear;
    select.append(option);
  }

  document.body.appendChild(select);
}
createSelectBox(2000, 2021);
///////////////////////////////////////////////////////////////
console.log("Six");
function multiply(...args) {
  let result = 1;
  for (let arg of args) {
    if (typeof arg === 'number') {
      arg = Math.trunc(arg);
      result *= arg;
    }
  }
  console.log(result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
