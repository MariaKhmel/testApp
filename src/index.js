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

ReactDom.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)