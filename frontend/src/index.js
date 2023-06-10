import App from "./App";
import React from "react";
import store from "./store";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import "./assest/css/font.css";
import "./assest/css/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
