import { Logo } from "components/Logo/Logo";
import classes from "./home-welcome-message.module.scss";

export const HomeWelcomeMessage = (): JSX.Element => (
    <div className={classes.root}>
        <div className={classes.wrapper}>
            <Logo />
            <h1>
                Välkomstbonus 100% bonus upp till 2000 kr + 100 gratissnurr på
                Gonzo's Gold + ett Free Bet värt 100 kr
            </h1>
        </div>
    </div>
);
