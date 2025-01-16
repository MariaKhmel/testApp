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


function createUser(name) {
  return {
    getName: function () {
      return name;
    }
  }
}

function multiply(factor) {
  return function (num) {
    return num * factor;
  }
}

const double = multiply(2);
console.log(double(5))

const arr1 = [1, 2, 3, 4];
const index = arr1.findIndex(el => el > 5);
console.log(index); // 2

const arr2 = [1, 2, 3, 2, 1];
const uniqueArr = [...new Set(arr2)];
console.log(uniqueArr);

const uniqueArr2 = arr2.filter((el, index, array) => array.indexOf(el) === index);
console.log(uniqueArr2)

const uniqueArr3 = arr2.reduce((acc, el) => {
  if (!acc.includes(el)) {
    acc.push(el);
  }
  return acc;
}, []);
console.log(uniqueArr3)

//summation
const arr4 = [1, 2, 3, 3, 3, 4, 4, 5, 5, 5];

const sum = arr4.reduce((acc, currEl) => acc += currEl, 0);
console.log(sum);

const maxNum = arr4.reduce((acc, curEl) => curEl > acc ? curEl : acc, arr4[0]);
console.log(maxNum);

const newArr = arr.concat(arr1, arr2);
console.log(newArr);

const arr5 = [1, 2, 3, [4, 5], [6, 7]];
const flat = arr5.reduce((acc, curEl) => acc.concat(curEl), []);
console.log(flat);

const user = createUser('Name');
console.log(user.getName())
ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)