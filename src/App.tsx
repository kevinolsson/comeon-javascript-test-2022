import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { useAppSelector, useAppDispatch } from "state/hooks";
import { decrement, increment } from "state/actions";
import {
    useFetchGamesQuery as fetchGames,
    useLoginQuery,
} from "./services/comeonAPI";

function App() {
    const dispatch = useAppDispatch();
    const { value: count } = useAppSelector((state) => state.counter);
    const { data, error, isLoading } = fetchGames({});
    const authFail = useLoginQuery({ username: "hello", password: "world" });
    const authPass = useLoginQuery({ username: "eric", password: "dad" });

    console.log(JSON.stringify({ username: "eric", password: "dad" }));

    console.log({ data, error, isLoading });
    console.log({ authFail, authPass });

    return (
        <div className="App">
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
                <button
                    aria-label="Decrement value"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
                <h1>{count}</h1>
                <button
                    aria-label="Increment value"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
            </header>
        </div>
    );
}

export default App;
