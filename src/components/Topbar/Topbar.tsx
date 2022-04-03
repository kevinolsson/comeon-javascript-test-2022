import classes from "./topbar.module.scss";
import { Logo } from "components/Logo/Logo";
import { Link } from "react-router-dom";
import { paths } from "services/routes";

export const Topbar = (): JSX.Element => {
    return (
        <div className={classes.root}>
            <Link to={paths.index.path}>
                <Logo />
            </Link>
            <div>Profile</div>
        </div>
    );
};
