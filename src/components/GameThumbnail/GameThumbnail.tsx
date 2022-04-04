import classes from "./game-thumbnail.module.scss";
import { IGame } from "services/interfaces";
import { Button } from "components/Button/Button";
import { paths, buildPath } from "services/routes";

export const GameThumbnail = ({
    name,
    code,
    icon,
    description,
}: IGame): JSX.Element => (
    <div className={classes.root}>
        <img src={process.env.PUBLIC_URL + icon} alt={name} />
        <div>
            <div className={classes.title}>
                <h3>{name}</h3>
                <Button to={buildPath(paths.games.path, code)} size="small">
                    Launch
                </Button>
            </div>
            <small>
                {description.substring(0, 80)}
                {description.length > 80 ? "..." : ""}
            </small>
        </div>
    </div>
);
