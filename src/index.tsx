import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";
import { store } from "./state/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById("root") as HTMLDivElement;
const root = ReactDOMClient.createRoot(container);
root.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
);
