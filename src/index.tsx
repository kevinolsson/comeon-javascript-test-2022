import React from "react";
import * as ReactDOMClient from "react-dom/client";
import { App } from "./App";
import { store } from "./state/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.scss";

const container = document.getElementById("root") as HTMLDivElement;
const root = ReactDOMClient.createRoot(container);
root.render(
    <Router>
        <Provider store={store}>
            <App />
        </Provider>
    </Router>
);
