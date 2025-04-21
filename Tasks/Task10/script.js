"use strict";

console.log("One");
let start = 10;
let end = 100;
let exclude = 40;

for (start; start <= end; start += 10) {
  if (start == exclude) continue;
  console.log(start);
}

console.log("Two");
let start2 = 10;
let end2 = 0;
let stop2 = 3;

for (start2; start2 >= stop2; start2--) {
  if (start2 < 10) console.log(`0${start2}`);
  else console.log(start2);
}

console.log('Three');
let start3 = 1;
let end3 = 6;
let breaker = 2;

for (start3; start3 <= end3; start3++) {
  console.log(start3);

  console.log(`-- ${breaker}`);
  console.log(`-- ${breaker*breaker}`);
}

console.log('Four');
let index = 10;
let jump = 2;

for (;;) {
  // Write Your Code Here
  console.log(index);
  index-=jump;
  if (index === jump) break;
}

console.log('Five');
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

for (let i = 0, cnt = 1; i < friends.length; i++) {
  if (friends[i][0] === 'a' || friends[i][0] === 'A') continue;
  else {
    console.log(`${cnt} => ${friends[i]}`);
    cnt++;
  }
}

console.log('Six');
let start6 = 0;
let swappedName = "elZerO";
let newstr = '';

let asc;
for (start6; start6 < swappedName.length; start6++) {
  // convert char to ascii
  asc = swappedName.charCodeAt(start6);
  if (asc >= 65 && asc <= 90) asc += 32;
  else asc -= 32;
  // convert ascii to a char and add it to new string
  newstr += String.fromCharCode(asc);
  // console.log(asc);
}
console.log(newstr);

console.log('Seven');
let start7 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (let i = start7 + mix[start7]; i < mix.length; i++) {
  if (typeof mix[i] !== typeof start7) continue;
  else {
    console.log(mix[i]);
  }
}
