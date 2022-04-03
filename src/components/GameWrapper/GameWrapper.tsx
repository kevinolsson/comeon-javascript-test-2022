import { fetchGames } from "services/comeonAPI";
import { Outlet } from "react-router-dom";
import { Topbar } from "components/Topbar/Topbar";
import { GameHeader } from "components/GameHeader/GameHeader";
import classes from "./game-wrapper.module.scss";

export const GameWrapper = (): JSX.Element => {
    const { data: games, error, isLoading } = fetchGames({});
    console.log({ games });
    return (
        <div className={classes.root}>
            <Topbar />
            <div className={classes.wrapper}>
                <GameHeader />
                <div className={classes.container}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};
