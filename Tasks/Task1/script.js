document.write("<h1>Elzero</h1>");

document.querySelector("h1").style.color = 'blue';
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.fontFamily = "Arial";
document.querySelector("h1").style.textAlign = 'center';
document.querySelector("h1").style.fontSize = '80px';

console.log("%cElzero %cWeb %cSchool", "color: red; font-size: 40px;" , 
    "color: green; font-size: 40px; font-weight: bold;", 
    "color: white; background-color: blue; font-size: 40px");

console.group("Group 1");
    console.log("Message One");
    console.log("Message Two");
    console.group("Child Group");
        console.log("Message One");
        console.log("Message Two");
        console.group("Grand Child Group");
            console.log("Message One");
            console.log("Message Two");
            console.groupEnd();
        console.groupEnd();
    console.groupEnd();
console.groupEnd();
console.group("Group 2");
    console.log("Message One");
    console.log("Message Two");

console.table(["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"]);