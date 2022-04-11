import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./components/App";

function tick() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
}
setInterval(tick, 1000);
