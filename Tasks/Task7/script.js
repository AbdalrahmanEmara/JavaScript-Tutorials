// ONE
let num = 10;

if (num < 10) {
  console.log(`00${num}`);
} else if (num >= 10 && num < 100) {
  console.log(`0${num}`);
} else if (num >= 100) {
  console.log(`${num}`);
}

// TWO
let num1 = 9;
let str = "9";
let str2 = "20";

if (num1 === str) {
  console.log("{num1} Is The Same Value As {str}");
} else if (num1 == str) {
  console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}

if (num1 != str2 && typeof num1 != typeof str2) {
  console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}
if (str != str2 && typeof str == typeof str2) {
  console.log("{str} Is The Same Type As {str2} But Not The Same Value")
}

// THREE 
let num11 = 10;
let num22 = 30;
let num33 = "30";

if (num33 > num11 && typeof num33 != typeof num11) {
  console.log(`${num33} Is Larger Than ${num11} And Type string Not The Same Type As number`);
}
if (num33 > num11 && typeof num33 != typeof num11 && num22 == num33) {
  console.log(`${num33} Is Larger Than ${num11} And Value Is The Same As 30 And Type string Not The Same Type As number`);
}
if (num33 != num11 && num33 == num22 && num33 !== num22) {
  console.log(`${num33} Value And Type Is Not The Same As ${num11} And Type Is Not The Same As ${num22}`);
}

// FOUR 
// Edit What You Want Here

let num111 = 10;
let num2 = 5;
let num3 = 10;
let num4 = 36;

/*
  Do Not Edit Below This Line
  Needed Output
  True 7 Times
*/

// Condition 1

if (num111 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2

if (num111 > num2 && num111 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3

if (num111 > num2 && num111 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4

if ((num111 + num2) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5

if ((num1 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6

if ((num1 + num2 + num3) < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7

if (num4 - (num111 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}