import { StrictMode } from "react";
import ReactDOM from "react-dom";
import DataProvider from "./Conext/dataContext";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
      <DataProvider>
        <App />
      </DataProvider>
    </Router>
  </StrictMode>,
  rootElement
);
