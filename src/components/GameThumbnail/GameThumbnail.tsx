import classes from "./game-thumbnail.module.scss";
import { IGame } from "services/interfaces";
import { Button } from "components/Button/Button";
import { useNavigate } from "react-router-dom";

export const GameThumbnail = ({
    name,
    code,
    icon,
    description,
}: IGame): JSX.Element => {
    const navigate = useNavigate();
    return (
        <div
            className={classes.root}
            onClick={() => {
                navigate(code);
            }}
        >
            <img src={process.env.PUBLIC_URL + icon} alt={name} />
            <div>
                <div className={classes.title}>
                    <h3>{name}</h3>
                    <Button to={code} size="small">
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
};
