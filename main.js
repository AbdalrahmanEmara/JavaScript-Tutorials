window.onload = function() {
    document.querySelector("h1").style.color = "Blue";
}

// window.alert("hello from js file");
// write html element from js code.
document.write("<h2>hay fai<br>fjads</h2>");

// write message in console
console.log("hello console.");

// show array in table
console.table([[5,6,7,8],[9,10,11,12],[5,6,7,8]]);

console.log("hello from %cjs %cfile", "color: red; font-size: 40px;", "color: blue; font-size: 40px;");

// message in console for error
console.error("undefined");

// data types

console.log(typeof "afsdfh");
console.log(typeof 33);
console.log(typeof [1,2,3])
console.log(typeof {name: "omar", age: 20, country: "eg"});
console.log(typeof true);

var x = {name: "omar", age: 20, country: "eg"};
console.log(x);

var y = [1,2,3];
console.table(y);

