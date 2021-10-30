import { useState } from "react";
import "./style.css";

const GetUserComponent = ({ setUser, setIsLoggedIn }) => {
  const [userInput, setUserInput] = useState("");

  const HandleLogin = (userInput) => {
    setUser(userInput);
    setIsLoggedIn(true);
  };

  return (
    <form className="form">
      <input
        placeholder="Digite seu nome aqui"
        className="input"
        type="text"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
      ></input>
      <div>
        <button className="btn" onClick={() => HandleLogin(userInput)}>
          Acessar com o nome
        </button>
      </div>
    </form>
  );
};

export default GetUserComponent;
