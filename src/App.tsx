import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Joyride from "react-joyride";

const steps = [
  {
    target: "body",
    placement: "center",
    title: "TITLE 1",
    content: (
      <div>
        <h3>TITLE</h3>
        <p>
          Duis incididunt cupidatat voluptate quis deserunt proident est et.
          Velit cillum eiusmod adipisicing incididunt Lorem dolore eiusmod velit
          magna ad do reprehenderit ut. Veniam in Lorem et proident officia
          commodo elit ea laborum eiusmod.
        </p>
      </div>
    ),
  },
  {
    target: "body",
    disableBeacon: true,
    placement: "center",
    title: "TITLE 2",
    content: (
      <div>
        <h3>HEADING:</h3>
        <p>
          Nisi quis ut sunt ex adipisicing nostrud ipsum dolore esse
          reprehenderit quis. Eu sint commodo ipsum tempor eiusmod non
          exercitation anim dolore eiusmod quis. Nisi ipsum velit dolor ex.
        </p>
      </div>
    ),
  },
  {
    target: "body",
    placement: "center",
    disableBeacon: true,
    title: <h1>TITLE 3</h1>,
    content: (
      <div>
        <h3>HEADING</h3>
        <p>
          Qui consectetur occaecat sit sint in aliqua est enim id minim officia.
          Excepteur laborum duis proident et ullamco in. Amet ullamco est qui
          excepteur non excepteur ex magna aliquip in nostrud.
        </p>
      </div>
    ),
  },
];

function App() {
  return (
    <div className="App">
      {/* @ts-ignore */}
      <Joyride steps={steps} continuous disableScrolling />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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
    </div>
  );
}

export default App;
