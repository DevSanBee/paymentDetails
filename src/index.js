import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
//import browserRouter from "react-router-dom/BrowserRouter";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";

ReactDOM.render(

    <BrowserRouter>
      <App />
    </BrowserRouter>,

  document.getElementById("root")
);
