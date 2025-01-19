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

const arr8 = [1, 2, 3, 4, 5];
let max = arr8[0];

for (const el of arr8) {
  if (el > max) {
    max = el;
  }
}
console.log('max', max);

let maxNumber = arr8[0];
arr8.forEach(el => {
  if (el > maxNumber) {
    maxNumber = el;
  }
})

console.log('forEach', maxNumber);

///closure

const createCounter = () => {
  let counter = 0;
  return {
    increment: function () {
      return counter += 1;
    },
    decrement: function () {
      return counter -= 1;
    },
    getCurrentCount: function () {
      return counter;
    }
  }
}

const counter1 = createCounter();
console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter1.increment());
console.log(counter1.increment());
console.log('decr', counter1.decrement());
console.log(counter1.getCurrentCount());

let maximumNum = arr8.reduce((acc, el) => el > acc ? el : acc, arr8[0])
console.log(maximumNum)

const arr9 = [1, 2, 3, 3, 4, 4, 5];
const uniqueArray = arr9.filter((el, index, array) => array.indexOf(el) === index);
console.log('uniquearr', uniqueArray);
const nestedArr = [1, [2, 3], [3, 4, [5, 6]]];

// console.log(nestedArr.flat(2))
// const flatArr = nestedArr.reduce((acc, currentEl) => acc.concat(currentEl), []);
// console.log(flatArr)
const flatten = arr => {
  return arr.reduce((acc, currentEl) => {
    if (Array.isArray(currentEl)) {
      console.log('here')
      return acc.concat(flatten(currentEl));
    }

    return acc.concat(currentEl);

  }, []);
}
function logArguments() {
  console.log(arguments);
}
logArguments(1, 2, 3); // Output: { '0': 1, '1': 2, '2': 3 }

(function func() {
  console.log('i am iife');
})()

function normalFunction() {
  console.log(this);
}

const arrowFunction = () => {
  console.log(this);
};


normalFunction();
arrowFunction();

const isSuccess = false;
const promise = new Promise((resolve, reject) => {
  if (isSuccess) {
    resolve('It is success!');
  } else {
    reject('Failed!');
  }
})

promise
  .then(value => console.log(value))
  .catch(error => console.log(error))
  .finally(() => console.log('finally!'))

new Promise(resolve => resolve('successfully!')).then(value => console.log(value));
new Promise((resolve, reject) => reject('Error happened!')).catch(error => console.log(error));
Promise.resolve('resolved promise').then(value => console.log(value));
Promise.reject('rejected promise').catch(error => console.log(error));

const fetchUserFromServer = (username, onSuccess, onError) => {
  console.log('username', username);
  const isSuccess = true;
  setTimeout(() => {
    if (isSuccess) {
      onSuccess('success value')
    } else {
      onError('error value')
    }
  }, 2000);
}

function onSuccess(value) {
  console.log(value);
}

function onError(value) {
  console.log(value);
}

fetchUserFromServer('Mango', onSuccess, onError)
console.log(flatten(nestedArr));


const fetchUserWithPromise = (username) => {
  const isSuccess = true;
  return new Promise((resolve, reject) => {
    console.log(`fetching data for ${username} `);
    setTimeout(() => {
      if (isSuccess) {
        resolve('success in promise')
      } else {
        reject('error is promise')
      }
    }, 2000);

  })
}


fetchUserWithPromise('Poly')
  .then(value => console.log(value))
  .catch(value => console.log(value))

const makePromise = (text, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(text);
    }, delay);
  })
}

const promise1 = makePromise('promise1 value', 2000);
const promise2 = makePromise('promise2 value', 2000);
const promise3 = makePromise('promise3 value', 2000);

Promise.all([promise1, promise2, promise3])
  .then(result => console.log(result));

Promise.race([promise1, promise2, promise3])
  .then(result => console.log(result));

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)