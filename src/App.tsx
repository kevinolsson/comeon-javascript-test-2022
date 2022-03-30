import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { useAppSelector, useAppDispatch } from "state/hooks";
import { decrement, increment } from "state/actions";
import { useGames } from "hooks/useGames";

function App() {
    const dispatch = useAppDispatch();
    const { value: count } = useAppSelector((state) => state.counter);

    const games = useGames();
    console.log({ games });

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
