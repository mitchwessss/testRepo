import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

function App() {
  const handleButton = () => {
    axios({
      method: "post",
      url: "/email",
      data: "hi backend",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((res) => {
        console.log(res);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick={handleButton}>Send a Post Request</button>
    </div>
  );
}

export default App;
