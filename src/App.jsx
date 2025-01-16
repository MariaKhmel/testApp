import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Maria");
  const [input, setInput] = useState("");
  // console.log("console");
  // useEffect(() => {
  //   setInput("tttt");
  // }, []);
  const onBtnClick = () => {
    setName(input);
    setInput("");
  };
  const onInputChange = (e) => setInput(e.target.value);

  return (
    <>
      <p>{name}</p>
      <button type="button" onClick={onBtnClick}>
        Change Name
      </button>
      <input value={input} type="text" name="input" onChange={onInputChange} />
    </>
  );
}

export default App;
