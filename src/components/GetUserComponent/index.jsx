import { useState } from "react";
import "./style.css";

const GetUserComponent = ({ setUser, setIsLoggedIn }) => {
  const [userInput, setUserInput] = useState("");

  const HandleLogin = (userInput) => {
    setUser(userInput);
    setIsLoggedIn(true);
  };
  return (
    <form action="" className="form">
      <input
        className="input"
        type="text"
        value={userInput}
        placeholder="insira seu nome"
        onChange={(event) => setUserInput(event.target.value)}
      />{" "}
      <p>
        <button className="btn" onClick={() => HandleLogin(userInput)}>
          Acessar com o nome
        </button>
      </p>
    </form>
  );
};

export default GetUserComponent;
