import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./global.css";
import { AuthProvider } from "react-auth-kit";
import refreshApi from "./components/refreshApi";
import axios from "axios";
import { Dfn } from "./globals";

const container = document.getElementById("root");
const root = createRoot(container!);

axios.defaults.baseURL = Dfn.BASE_URL;

root.render(
  <React.StrictMode>
    <AuthProvider
      authType={"localstorage"}
      authName={"token"}
      refresh={refreshApi}
      cookieDomain={window.location.hostname}
      cookieSecure={window.location.protocol === "https:"}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
