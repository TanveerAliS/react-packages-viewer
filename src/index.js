import React from "react";
import ReactDOM from "react-dom";
import AllPackages from 'components/AllPackages';

import "./styles.css";

function App() {
  return (
    <div className="App">
      <AllPackages />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
