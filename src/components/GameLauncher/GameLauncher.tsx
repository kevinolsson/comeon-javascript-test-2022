import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { comeon } from "./comeon.game-1.0.min.js";
import classes from "./game-launcher.module.scss";
import { fetchGames } from "services/comeonAPI";
import { paths } from "services/routes";

export const GameLauncher = () => {
    const { gameId } = useParams();
    const navigate = useNavigate();
    const { data: games } = fetchGames({});

    const activeGame = games.find((game) => game.code === gameId);

    React.useEffect(() => {
        if (!!activeGame.code) {
            comeon.game.launch(activeGame.code);
        } else {
            navigate(paths.games.path);
        }
    }, [gameId]);

    return (
        <div className={classes.root}>
            <div id="game-launch" />
        </div>
    );
};
