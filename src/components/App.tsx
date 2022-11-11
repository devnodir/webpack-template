import React from "react";
import "../assets/scss/App.scss";
import reactLogo from "assets/img/react_logo.svg";

const App: React.FC = () => (
  <div className="app">
    <h1>Hello World!</h1>
    <p>Foo to the barz 3</p>
    <img src={reactLogo} height="480" />
  </div>
);

export default App;
