import classes from "./home-sidebar.module.scss";
import { Login } from "components/Login/Login";

export const HomeSidebar = (): JSX.Element => (
    <div className={classes.root}>
        <div className={classes.loginWrapper}>
            <Login />
        </div>
        <div className={classes.legalText}>
            <small>
                Hos ComeOn! Sport &amp; Casino har du stora valmöjligheter. Vi
                har en konstant växande lista över casino slots med favoriter
                som exempelvis Starburst och Mega Fortune Dreams. Vi erbjuder
                även uppskattade gamla kortspel med klassiker som Blackjack.
                Dessutom hittar du alltid grymma bet &amp; odds på vår
                Sportsida. Kika in våra <a href="#">casino guider</a> för mer
                information.
            </small>
        </div>
    </div>
);
