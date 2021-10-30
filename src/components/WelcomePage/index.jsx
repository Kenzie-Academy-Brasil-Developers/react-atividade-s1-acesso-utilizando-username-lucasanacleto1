import "./style.css";

const WelcomePage = ({ user, setIsLoggedIn }) => {
  const HandleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div className="content">
      <h1>Bem vindo, {user}!</h1>
      <button className="btn" onClick={HandleLogout}>
        Sair
      </button>
    </div>
  );
};

export default WelcomePage;
