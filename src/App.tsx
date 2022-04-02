import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { useAppDispatch } from "state/hooks";
import {
    useFetchGamesQuery as fetchGames,
    useLoginQuery,
} from "./services/comeonAPI";
import { Routes, Route, Link, Outlet, useParams } from "react-router-dom";
import { AppWrapper } from "components/AppWrapper/AppWrapper";
import { Home } from "components/Home/Home";
import { GameWrapper } from "components/GameWrapper/GameWrapper";
import { GameLauncher } from "components/GameLauncher/GameLauncher";
import { GameListing } from "components/GameListing/GameListing";
import { PageNotFound } from "components/PageNotFound/PageNotFound";

function App() {
    const dispatch = useAppDispatch();

    const { data, error, isLoading } = fetchGames({});
    const authFail = useLoginQuery({ username: "hello", password: "world" });
    const authPass = useLoginQuery({ username: "eric", password: "dad" });

    console.log({ data, error, isLoading });
    console.log({ authFail, authPass });

    return (
        <Routes>
            <Route path="/" element={<AppWrapper />}>
                <Route index element={<Home />} />
                <Route path="games" element={<GameWrapper />}>
                    <Route path=":gameId" element={<GameLauncher />} />
                    <Route index element={<GameListing />} />
                </Route>
                <Route path="*" element={<PageNotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
