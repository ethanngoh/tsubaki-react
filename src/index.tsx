import { Provider } from "mobx-react";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Stores } from "./services";


// DO NOT REORDER
import "./reset.css";
import "./app.css";
// DO NOT REORDER

const stores = new Stores();

ReactDOM.render(
  <React.StrictMode>
    <Provider {...stores.stores}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
