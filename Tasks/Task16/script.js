"use strict";

// First
// document.querySelector('div');
// document.querySelector('.element');
// document.querySelector('#elzero');
// document.querySelector('[name="js"]');

// document.querySelectorAll('div .element');
// document.querySelectorAll('.element');
// document.querySelectorAll('#elzero');
// document.querySelectorAll('[name="js"]');

// document.getElementById('elzero');
// document.getElementsByClassName('element');
// document.getElementsByTagName('div');
// document.getElementsByName('js');

// const children = document.body.children;
// const ele = Array.from(children).find(child => child.id === 'elzero');

// Second
// const images = document.querySelectorAll('img');

// for (let i = 0; i < images.length; i++) {
//   images[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//   images[i].alt = 'Elzero Logo';
// }

// Third
// const inputElement = document.querySelector('input[name="dollar"]');
// const outputElement = document.querySelector('.result');

// inputElement.addEventListener('input', (event) => {
//   const dollar = event.target.value;
//   const pound = (dollar * 15.6).toFixed(2);

//   outputElement.textContent = `{${dollar}} USD Dollar = {${pound}} Egyptian Pound`;
// });

// Fourth
// const elementOne = document.querySelector('.one');
// const elementTwo = document.querySelector('.two');

// [elementOne.title , elementTwo.title] = [elementTwo.title, elementOne.title];

// [elementOne.textContent, elementTwo.textContent] = [elementTwo.textContent, elementOne.textContent];

// Fifth
// const images5 = document.querySelectorAll('.fifth img');

// for (const ig of images5) {
//   ig.alt = ig.alt ? 'Elzero New' : 'Old';
// }

// Sixth
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#formElement");
  const resultsContainer = document.querySelector(".results");

  form.addEventListener("submit", function (event) {
    // prevent default submission
    event.preventDefault();

    // get all elements values
    const numberOfElements = parseInt(form.querySelector('[name="elements"]').value);
    const elementText = form.querySelector('[name="texts"]').value;
    const elementType = form.querySelector('[name="type"]').value;

    // clear old elements
    resultsContainer.innerHTML = "";

    // create new elements
    for (let i = 1; i <= numberOfElements; i++) {
      const newElement = document.createElement(elementType);

      // add attributes
      newElement.className = "box";
      newElement.setAttribute("title", "Element");
      newElement.id = `id-${i}`;

      // add text content
      newElement.textContent = elementText;

      // append to result container
      resultsContainer.appendChild(newElement);
    }
  });
});
