import { HomeSidebar } from "components/HomeSidebar/HomeSidebar";
import { HomeWelcomeMessage } from "components/HomeWelcomeMessage/HomeWelcomeMessage";
import classes from "./home.module.scss";

export const Home = (): JSX.Element => {
    return (
        <div className={classes.root}>
            <HomeWelcomeMessage />
            <HomeSidebar />
        </div>
    );
};
