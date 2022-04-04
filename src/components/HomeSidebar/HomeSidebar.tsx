import classes from "./home-sidebar.module.scss";
import { Login } from "components/Login/Login";

export const HomeSidebar = (): JSX.Element => (
    <div className={classes.root}>
        <div className={classes.loginWrapper}>
            <Login />
        </div>
    </div>
);
