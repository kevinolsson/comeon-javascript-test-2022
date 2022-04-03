import { HomeSidebar } from "components/HomeSidebar/HomeSidebar";
import classes from "./home.module.scss";

export const Home = (): JSX.Element => {
    return (
        <div className={classes.root}>
            <div>Welcome message</div>
            <HomeSidebar />
        </div>
    );
};
