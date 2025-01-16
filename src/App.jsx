import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("Maria");
  const [input, setInput] = useState("");
  const technologies = ["React", "JS", "CSS", "HTML"];

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

      <ul>
        {technologies.map((el) => (
          <li key={el}>
            <p>{el}</p>
          </li>
        ))}
      </ul>

      <EnhancedComponent name="Updated Name" />
    </>
  );
}

const BaseComponent = ({ name }) => {
  return <p>Hello, {name}</p>;
};

const logger = (WrapperComponent) => {
  return (props) => {
    console.log(props);
    return <WrapperComponent {...props} />;
  };
};

const EnhancedComponent = logger(BaseComponent);

export default App;
