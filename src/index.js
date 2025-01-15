import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";

const arr = [3, 4, 5, 6, 4, 3, 4, 5, 3, 4];
const sortedArr = (array) => {
  const copiedArr = [...array];
  for (let i = 0; i < array.length; i += 1) {

  }
}

console.log(sortedArr(arr));

const str = "i am developer";
const capitalizeFirstLetter = (str) => {
  console.log(str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' '));
}

console.log(capitalizeFirstLetter(str));

const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
};

console.log(isPrime(7));  // true
console.log(isPrime(10)); // false


function outerFunc() {
  const localVar = 'This is outer func variable!';

  function innerFunc() {
    console.log(localVar)
  }

  return innerFunc;
}

const closureFunc = outerFunc();
console.log(closureFunc());


ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)