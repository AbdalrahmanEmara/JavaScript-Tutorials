'use strict'

console.log('One');
function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    const words = zName.split(" ");
  
    return `${words[0]} ${words[1][0]}.`;
  }
  function ageWithMessage(zAge) {
    const words = zAge.split(" ");

    return `Your Age Is ${words[0]}`;
  }
  function countryTwoLetters(zCountry) {
    // convert char to ascii
    let newch = zCountry.charCodeAt(1) - 32;
    // convert ascii to char
    newch = String.fromCharCode(newch);

    return `You Live In ${zCountry[0]}${newch}`;
  }
  function fullDetails() {
    return `Hello ${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(zCountry)}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY

///////////////////////////////////////////////////////////////////////////////
console.log('Two');
function itsMe() {
  return `Iam A Normal Function`;
}
const arro = () => `Iam A Normal Function`;

console.log(arro());  // Iam An Arrow Function
console.log(itsMe()); // Iam A Normal Function

function urlCreate(protocol, web, tld) {
  return `${protocol}://www.${web}.${tld}`;
}

const a2 = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;
console.log(a2("https", "elzero", "org"));

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org

////////////////////////////////////////////////////////////////////////////