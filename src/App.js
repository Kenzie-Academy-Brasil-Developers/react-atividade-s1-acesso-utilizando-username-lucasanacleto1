import "./App.css";
import { useState } from "react";
import WelcomePage from "./components/WelcomePage";
import GetUserComponent from "./components/GetUserComponent";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  return (
    <div className="App">
      <div className="App-header">
        {isLoggedIn ? (
          <WelcomePage user={user} setIsLoggedIn={setIsLoggedIn}></WelcomePage>
        ) : (
          <GetUserComponent
            setUser={setUser}
            setIsLoggedIn={setIsLoggedIn}
          ></GetUserComponent>
        )}
      </div>
    </div>
  );
}

export default App;
