import React from "react";
import ReactDOM from "react-dom/client";
import "react-toastify/dist/ReactToastify.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./Services/Store/index";
import { PersistGate } from "redux-persist/integration/react";
import "./Assets/Styles/css/index.css";
import App from "./App";
// FOR LANGUAGE
// import "./Assets/Language/i18next";

import i18next from "../src/Assets/language/i18next";
const baseRoot = "http://159.89.198.52:8000";
localStorage.setItem("baseRoot", baseRoot);

const root = ReactDOM.createRoot(document.getElementById("root"));
const language = localStorage.getItem("lng");

if (language === "ar") {
  document.body.dir = window.dir || "rtl";
}
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
